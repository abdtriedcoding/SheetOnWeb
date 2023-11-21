import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const inter = Montserrat({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Employee Information Dashboard",
  description:
    "Explore employee data with our interactive dashboard. Gain insights into your workforce, make informed decisions, and optimize your company's performance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
