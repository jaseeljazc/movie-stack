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
  title: {
    default: "MovieStack – Find the Best Movies by Genre",
    template: "%s | MovieStack",
  },
  description:
    "Discover the best movies across genres including action, crime, sci-fi, comedy, horror and more. Curated lists, ratings, reviews, and trending films.",
  keywords: [
    "best movies",
    "movie finder",
    "movie lists",
    "action movies",
    "crime movies",
    "sci-fi movies",
    "comedy movies",
    "top rated movies",
    "film recommendations"
  ],
  openGraph: {
    title: "MovieStack – Find the Best Movies",
    description:
      "Explore top movies categorized by Action, Crime, Sci-Fi, Comedy and more.",
    url: "https://yourwebsite.com",
    siteName: "MovieStack",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
