import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Geist, Jost } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import { QueryProvider } from "@/context/query-provider";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const jostSans = Jost({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "DesignX - AI design assisstant for everyone",
  description:
    "DesignX is an AI design assisstant for everyone. It is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jostSans.className} antialiased`}>
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster position="top-right" richColors />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
