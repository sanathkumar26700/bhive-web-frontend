import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/providers/ReduxProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bhive - Managed Office Spaces | Zero CapEx | Enterprise Grade",
  description:
    "We offer Zero CapEX enterprise grade BHIVE managed office spaces in Bangalore, Shared Desks. Rent Flexible Offices to suit your need.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
