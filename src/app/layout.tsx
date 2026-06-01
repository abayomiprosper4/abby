import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import CustomCursor from "../../Components/ui/CustomCursor";
import "@/globals.css";

export const metadata: Metadata = {
  title: "Arby",
  description: "Portfolio",
};

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable}`}>
      <body className="font-manrope text-white">
        <div className="relative isolate z-0">
        {children}
        </div>
      <CustomCursor />
      </body>
    </html>
  );
}
