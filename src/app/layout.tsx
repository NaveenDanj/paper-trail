import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/home/Header";
import { Toaster } from "@/components/ui/toaster";
import TopSection from "@/components/global/TopSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Paper Trail Store",
  description: "Paper trail store fine graded stationaries at reasonalble price.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">

        <TopSection />

        <Header />

        <div className="w-full h-[calc(100vh-107px)] lg:h-[calc(100vh-119px)] overflow-y-auto">
          {/* <MainBanner />
            <FlashSales />
            <BrowsByCategories />
            <BestSeller />
            <BannerSection />
            <OurProduct /> */}
          {/* <NewArrival /> */}
          {/* <Footer /> */}
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
