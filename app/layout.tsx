import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Bug Bounty Hub",
  description: "Prioritizing critical bugs and fostering collaborative development on Base",
  openGraph: {
    title: "Bug Bounty Hub",
    description: "Prioritizing critical bugs and fostering collaborative development on Base",
    images: ["/images/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
