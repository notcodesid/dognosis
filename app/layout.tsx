import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dognosis",
  description: "Reimagining the relationship between humans and our best friends",
  openGraph: {
    title: "Dognosis",
    description: "Reimagining the relationship between humans and our best friends",
    url: "https://dognosis.vercel.app/",
    siteName: "Dognosis",
    images: [
      {
        url: "https://dognosis.vercel.app/mainlogo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}