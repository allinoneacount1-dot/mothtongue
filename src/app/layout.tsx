import type { Metadata } from "next";
import { Playfair_Display, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-ui",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MOTHTONGUE - Speak to the things that glow.",
    template: "%s | MOTHTONGUE",
  },
  description: "An atmospheric narrative game presented as a nocturnal natural-history museum that came alive. Speak the language of bioluminescent moths and night creatures.",
  metadataBase: new URL("https://mothtongue.vercel.app"),
  openGraph: {
    title: "MOTHTONGUE - Speak to the things that glow.",
    description: "An atmospheric narrative game presented as a nocturnal natural-history museum that came alive.",
    type: "website",
    locale: "en_US",
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
      className={`${playfair.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <div className="grain-overlay" aria-hidden="true" />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
