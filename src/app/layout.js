import "../styles/globals.scss";
import { Inter, Space_Grotesk } from "next/font/google";

const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const heading = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
});

export const metadata = {
  title: "Ellis Home Value — free home valuation",
  description:
    "Get a free, no-obligation estimate of your home's value from a local agent within 24 hours.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${body.variable} ${heading.variable}`}>
      <body>{children}</body>
    </html>
  );
}
