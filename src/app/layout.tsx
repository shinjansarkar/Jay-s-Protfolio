import type { Metadata } from "next";
import { Share_Tech_Mono, Rajdhani, IBM_Plex_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import GlobalLayoutWrapper from "@/components/GlobalLayoutWrapper";

const shareTechMono = Share_Tech_Mono({
  variable: "--font-share-tech-mono",
  weight: "400",
  subsets: ["latin"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jayabrata Chakraborty | Project Manager",
  description: "Tactical Portfolio of Jayabrata Chakraborty, Project Manager & QA Leader",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${shareTechMono.variable} ${rajdhani.variable} ${ibmPlexMono.variable} ${orbitron.variable} h-full antialiased`}
    >
      <body className="h-full w-full bg-tactical-black bg-igi-global text-[#ffffff] font-rajdhani overflow-hidden selection:bg-tactical-green selection:text-black">
        <GlobalLayoutWrapper>
          {children}
        </GlobalLayoutWrapper>
      </body>
    </html>
  );
}
