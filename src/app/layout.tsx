import { cn } from "@kanvas/phoenix-rebirth/dist/lib/utils";
import {  Open_Sans } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Open_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased ",
          inter.className
        )}
      >
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
