import nodemailer from 'nodemailer';
import dns from 'dns';

// Validate Email Format
const isValidEmailFormat = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
};

// Check for Disposable Emails
const disposableEmailProviders = [
    'tempmail.com', 'mailinator.com', '10minutemail.com', 'guerrillamail.com', 
    'yopmail.com', 'trashmail.com', 'fakeinbox.com', 'maildrop.cc'
];
const isDisposableEmail = (email) => disposableEmailProviders.includes(email.split('@')[1]);

// Check MX Records for Valid Domain
const hasValidMXRecords = async (email) => {
    const domain = email.split('@')[1];
    return new Promise((resolve) => {
        dns.resolveMx(domain, (err, addresses) => {
            resolve(!err && addresses && addresses.length > 0);
        });
    });
};

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    if (!isValidEmailFormat(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
    }

    if (isDisposableEmail(email)) {
        return res.status(400).json({ message: 'Disposable emails are not allowed' });
    }

    const isValidMX = await hasValidMXRecords(email);
    if (!isValidMX) {
        return res.status(400).json({ message: 'Invalid email domain' });
    }




    // Setup Nodemailer Transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: `"UniUms Contact Form" <${process.env.EMAIL_USER}>`,
            to: process.env.ADMIN_EMAIL,
            cc: ['bhabanishankarmohanta143@gmail.com', 'manasranjanmohanta27@gmail.com'],
            subject: '📩 New Contact Form Submission - UniUms',
            html: `
                <div style="max-width: 600px; margin: auto; font-family: Arial, sans-serif; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);">
                    <div style="background: #007bff; padding: 20px; text-align: center; color: white;">
                        <h1 style="margin: 0;">📞 New Contact Message</h1>
                    </div>
                    <div style="padding: 20px; background: #f9f9f9;">
                        <h2 style="color: #333;">📩 Contact Form Submission</h2>
                        <p style="color: #555;">You have received a new message. Here are the details:</p>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 10px; background: #007bff; color: white; font-weight: bold;">👤 Name</td>
                                <td style="padding: 10px; background: #e9ecef;">${name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; background: #f9f9f9; color: white; font-weight: bold;">📧 Email</td>
                                <td style="padding: 10px; background: #007bff;">${email}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; background: #007bff; color: white; font-weight: bold;">💬 Message</td>
                                <td style="padding: 10px; background: #e9ecef;">${message}</td>
                            </tr>
                        </table>
                    </div>
                    <div style="background: #007bff; padding: 15px; text-align: center; color: white;">
                        <p style="margin: 0;">📩 Need assistance? Contact us at <a href="mailto:uinums24hours@gmail.com" style="color: yellow;">uinums24hours@gmail.com</a></p>
                    </div>
                </div>
            `,
        });

        return res.status(200).json({ message: 'Message sent successfully' });

    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Error sending message' });
    }
}
