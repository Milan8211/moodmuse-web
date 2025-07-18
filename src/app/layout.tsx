import type { Metadata } from "next";
import { Inter, Roboto, Open_Sans } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ 
  weight: ['300', '400', '500', '700'],
  subsets: ["latin"],
  variable: '--font-roboto'
});
const openSans = Open_Sans({ 
  subsets: ["latin"],
  variable: '--font-open-sans'
});

export const metadata: Metadata = {
  title: "MoodMuse Docs",
  description: "Documentation for the MoodMuse UI component library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${roboto.variable} ${openSans.variable}`}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
