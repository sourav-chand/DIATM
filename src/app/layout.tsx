import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/Cursor";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "DIATM | Durgapur Institute of Advanced Technology & Management",
  description:
    "Top-ranked engineering college in West Bengal. NAAC Accredited, AICTE Approved, 100% Placement Record. Offers B.Tech CSE, Mechanical, Electrical, MBA & MCA.",
  keywords: [
    "DIATM",
    "Durgapur Institute of Advanced Technology and Management",
    "engineering college West Bengal",
    "B.Tech CSE Durgapur",
    "top engineering college India",
    "NAAC accredited engineering college",
    "AICTE approved college",
  ],
  openGraph: {
    title: "DIATM — Engineer The Future",
    description:
      "5th Ranked in West Bengal. NAAC Accredited. 100% Placement Record.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} antialiased`}
    >
      <body className="min-h-screen font-sans">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
