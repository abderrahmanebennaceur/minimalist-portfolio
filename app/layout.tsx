import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abderrahmane BENNACEUR",
  description: "Building seamless, exceptional web and mobile app experiences",
  keywords: "web developer, frontend, backend, JavaScript, React, Node.js, TypeScript, PHP, Laravel, MySQL, MongoDB, PostgreSQL, HTML, CSS, SASS, Tailwind CSS, Bootstrap, React Native, Netlify, Vercel, Heroku, GitHub, GitLab, Jira, Trello, Asana, Slack, Discord, GitHub",
  authors: [{ name: "Abderrahmane BENNACEUR" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
