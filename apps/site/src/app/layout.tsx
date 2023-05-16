import type { Metadata } from "next";
import "ui/styles.css";

// @TODO: define metadata
export const metadata: Metadata = {
  title: "Web",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="pb-safe-bottom pl-safe-left pr-safe-right pt-safe-top antialiased">
        {children}
      </body>
    </html>
  );
}
