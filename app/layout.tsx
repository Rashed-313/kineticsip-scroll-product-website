import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KineticSip | Cinematic Mango Energy",
  description:
    "A premium scroll-driven mango drink product landing page built with GSAP ScrollTrigger.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
