import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "RSSSR Hall of Fame",
  description: "Robotics: RSS/SR Hall of Fame",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-neutral-900 text-black dark:text-white w-full min-h-screen flex flex-col font-mono">
        {children}
      </body>
    </html>
  );
}
