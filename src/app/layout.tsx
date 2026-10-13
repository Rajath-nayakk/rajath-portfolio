import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rajathnayak.dev"),
  title: "Rajath Nayak — Full-Stack Developer & Engineering Student",
  description:
    "Personal cinematic interactive portfolio of Rajath Nayak, a Computer Science Engineering undergraduate and full-stack developer at Sahyadri College of Engineering and Management, Mangaluru.",
  keywords: [
    "Rajath Nayak",
    "Rajath Nayak Portfolio",
    "Full-Stack Developer",
    "Software Engineer",
    "Computer Science Undergraduate",
    "Sahyadri College of Engineering and Management",
    "HackHub",
    "Fin Pilot",
    "Next.js Developer",
    "React Developer",
    "Interactive Portfolio",
    "Mangaluru Developer",
  ],
  authors: [{ name: "Rajath Nayak" }],
  creator: "Rajath Nayak",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rajathnayak.dev",
    title: "Rajath Nayak — Full-Stack Developer & Engineering Student",
    description:
      "Explore the interactive portfolio of Rajath Nayak: building ideas into experiences across full-stack systems and emerging technologies.",
    siteName: "Rajath Nayak Portfolio",
    images: [
      {
        url: "/images/rajath-formal.jpg",
        width: 805,
        height: 1024,
        alt: "Rajath Nayak — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajath Nayak — Full-Stack Developer & Engineering Student",
    description:
      "Interactive digital identity & portfolio of Rajath Nayak, Computer Science Engineering undergraduate.",
    images: ["/images/rajath-formal.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#08090B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased selection:bg-[#467BFF] selection:text-white`}
    >
      <body className="min-h-full bg-[#08090B] text-[#F5F5F0] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
