import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Revyve — AI Automations for Small Business",
  description:
    "We set up AI automations that save you hours every week. Fixed-fee setup, secure by default, you own everything when we're done.",
  openGraph: {
    title: "Revyve — AI Automations for Small Business",
    description:
      "We set up AI automations that save you hours every week. Fixed-fee setup, secure by default, you own everything when we're done.",
    type: "website",
    locale: "en_US",
    siteName: "Revyve",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revyve — AI Automations for Small Business",
    description:
      "We set up AI automations that save you hours every week. Fixed-fee setup, secure by default, you own everything when we're done.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-zinc-925 text-zinc-100 font-sans">{children}</body>
    </html>
  );
}
