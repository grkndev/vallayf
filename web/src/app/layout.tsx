import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Metadata } from "next";

const fontHeading = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});
export const metadata: Metadata = {
  title: "VALLAYF | Valorant Stats Tracker",
  description: "Track your Valorant stats with VALLAYF",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("antialiased", fontHeading.variable, fontBody.variable)}
      >
        {children}
      </body>
    </html>
  );
}
