import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Nox - AI Automation Platform | Say it once, watch AI agents do it forever",
  description:
    "Automate sales, meetings, operations, support, and admin tasks without writing a line of code. Used by global enterprises like Monzo, Guild, CLEO, TradeMe, and Paradigm.",
  keywords: [
    "AI automation",
    "business automation",
    "AI agents",
    "workflow automation",
    "enterprise automation",
  ],
  authors: [{ name: "Nox" }],
  openGraph: {
    title: "Nox - AI Automation Platform",
    description:
      "Say it once, watch AI agents do it forever. Automate your business processes without coding.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "font-sans antialiased relative",
          geistSans.variable,
          geistMono.variable,
        )}
      >
        <div className="grid grid-cols-12 mx-auto border-x-[1px] border-primary/10 relative">
          <div className=" h-full col-span-1 w-full text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
          <div className="col-span-10 border-x-[1px]">{children}</div>
          <div className="h-full w-full col-span-1 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
        </div>
      </body>
    </html>
  );
}
