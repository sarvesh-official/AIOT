import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const gilroyMedium = localFont({
  src: "./fonts/Gilroy-Medium.ttf",
  variable: "--font-gilroy-medium",
  weight: "500",
});

const gilroySemiBold = localFont({
  src: "./fonts/Gilroy-SemiBold.ttf",
  variable: "--font-gilroy-extra-bold",
  weight: "800",
});

const gilroyLight = localFont({
  src: "./fonts/Gilroy-Light.ttf",
  variable: "--font-gilroy-light",
  weight: "300",
});
const gilroyRegular = localFont({
  src: "./fonts/Gilroy-Regular.ttf",
  variable: "--font-gilroy-light",
  weight: "300",
});

export const metadata: Metadata = {
  title: "AIOT | All in one Traveler",
  description:
    "AIOT (All in One Traveller) is a comprehensive AI-powered travel assistant designed to simplify and enhance your travel experiences. Whether you're planning a trip, booking, or enjoying your vacation, AIOT has got you covered with personalized itineraries, real-time updates, document management, and much more!",
  icons: ["/favicon.svg"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-gilroy antialiased bg-[#F3F3F3]`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
