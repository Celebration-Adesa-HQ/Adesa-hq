import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppShell from "./AppShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://adesahq.com"),

  title: {
    default: "Adesa HQ | Digital Product & Media Company",
    template: "%s | Adesa HQ",
  },

  description:
    "Adesa HQ builds digital products, media platforms, and scalable web solutions for modern businesses.",

  keywords: [
    "Adesa HQ",
    "Digital Product Company",
    "Web Development Agency",
    "Media Platform Development",
    "Startup Technology Company",
  ],

  authors: [{ name: "Adesa HQ" }],
  creator: "Adesa HQ",
  publisher: "Adesa HQ",

  openGraph: {
    title: "Adesa HQ | Digital Product & Media Company",
    description:
      "We build scalable digital products and media platforms for startups and growing brands.",
    url: "https://adesahq.com",
    siteName: "Adesa HQ",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Adesa HQ",
    description:
      "Digital product development and media innovation for modern brands.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
