import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Banner from '@hackclub/banner'
import Navigation from "@/components/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AWEST Coding Club",
  description: "Official website of the AWEST Coding Club",
  icons: [
    {
      url: "/favicon.png",
      sizes: "64x64",
      type: "image/png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <Banner />
          <div className="w-screen max-w-screen h-screen relative flex justify-center items-center overflow-x-hidden">
            {children}
            <Navigation />{" "}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
