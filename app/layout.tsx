import type { Metadata } from "next";
import { Jost, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const jostSans = Jost({
  weight : ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title : "DesignX - A design system for everyone",
  description : "DesignX is a design system for everyone. It is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body
        className={`${jostSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
