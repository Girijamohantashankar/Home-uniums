import nodemailer from 'nodemailer';
import dns from 'dns';

// Function to validate email format
const isValidEmailFormat = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
};

// List of common disposable email providers
const disposableEmailProviders = [
    'tempmail.com', 'mailinator.com', '10minutemail.com', 'guerrillamail.com', 
    'yopmail.com', 'trashmail.com', 'fakeinbox.com', 'maildrop.cc'
];

// Function to check if an email is from a disposable provider
const isDisposableEmail = (email) => {
    const domain = email.split('@')[1];
    return disposableEmailProviders.includes(domain);
};

// Function to check MX records for a domain
const hasValidMXRecords = async (email) => {
    const domain = email.split('@')[1];
    return new Promise((resolve) => {
        dns.resolveMx(domain, (err, addresses) => {
            if (err || !addresses || addresses.length === 0) {
                resolve(false);
            } else {
                resolve(true);
            }
        });
    });
};

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, email, phone, institute, organization, date, message } = req.body;

    if (!name || !email || !phone || !institute || !organization || !date) {
        return res.status(400).json({ message: 'All fields except message are required' });
    }

    // Check if email format is valid
    if (!isValidEmailFormat(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
    }

    // Check if email is from a disposable provider
    if (isDisposableEmail(email)) {
        return res.status(400).json({ message: 'Disposable emails are not allowed' });
    }

    // Check if email has valid MX records
    const isValidMX = await hasValidMXRecords(email);
    if (!isValidMX) {
        return res.status(400).json({ message: 'Invalid email domain' });
    }

    // Phone number validation (10-15 digits, only numbers)
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(phone)) {
        return res.status(400).json({ message: 'Invalid phone number' });
    }

    // Configure your SMTP transport
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: `"UniUms Demo Request" <${process.env.EMAIL_USER}>`,
            to: process.env.ADMIN_EMAIL,
            cc: ['bhabanishankarmohanta143@gmail.com', 'manasranjanmohanta27@gmail.com'],
            subject: '🚀 New Demo Booking Request - UniUms',
            html: `
                <div style="max-width: 600px; margin: auto; font-family: Arial, sans-serif; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);">
                    <div style="background: #007bff; padding: 20px; text-align: center; color: white;">
                        <h1 style="margin: 0;">📅 UniUms Demo Request</h1>
                    </div>
                    <div style="padding: 20px; background: #f9f9f9;">
                        <h2 style="color: #333;">🎉 New Demo Booking Request</h2>
                        <p style="color: #555;">You have received a new demo booking request. Here are the details:</p>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 10px; background: #007bff; color: white; font-weight: bold;">👤 Name</td>
                                <td style="padding: 10px; background: #e9ecef;">${name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; background: #007bff; color: white; font-weight: bold;">📧 Email</td>
                                <td style="padding: 10px; background: #f9f9f9;">${email}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; background: #007bff; color: white; font-weight: bold;">📞 Phone</td>
                                <td style="padding: 10px; background: #e9ecef;">${phone}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; background: #007bff; color: white; font-weight: bold;">🏫 Institute</td>
                                <td style="padding: 10px; background: #f9f9f9;">${institute}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; background: #007bff; color: white; font-weight: bold;">🏢 Organization</td>
                                <td style="padding: 10px; background: #e9ecef;">${organization}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; background: #007bff; color: white; font-weight: bold;">📆 Preferred Date</td>
                                <td style="padding: 10px; background: #f9f9f9;">${date}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; background: #007bff; color: white; font-weight: bold;">💬 Message</td>
                                <td style="padding: 10px; background: #e9ecef;">${message || 'N/A'}</td>
                            </tr>
                        </table>
                    </div>
                    <div style="background: #007bff; padding: 15px; text-align: center; color: white;">
                        <p style="margin: 0;">📩 Need assistance? Contact us at <a href="mailto:support@uniums.com" style="color: yellow;">support@uniums.com</a></p>
                    </div>
                </div>
            `,
        });

        return res.status(200).json({ message: 'Email sent successfully' });

    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Error sending email' });
    }
}
