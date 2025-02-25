import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Home | UniUms - Smart University Management System",
  description: "UniUms is a subscription-based university management system that simplifies student and faculty administration with modules for attendance, leave, reports, exams, and more.",
  keywords: "university management system, ums, uniums, student management, faculty management, education software, attendance tracking, subscription-based ERP",
  
  authors: [{ name: "uniums", url: "https://uniums.com" }],
  openGraph: {
    title: "UniUms - Smart University Management System",
    description: "Streamline university and college management with UniUms. Manage students, faculty, exams, attendance, and more.",
    url: "https://uniums.com",
    siteName: "UniUms",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "UniUms - University Management System",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourTwitterHandle",
    creator: "@yourTwitterHandle",
    title: "UniUms - Smart University Management System",
    description: "Simplify university and college administration with UniUms.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/logonew.jpeg",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Head>
        
        <meta name="google-site-verification" content="xVG1I2x9qJCnpxv1g5mZ_4BWVkcgNoXrrPrO12wNFlA" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
