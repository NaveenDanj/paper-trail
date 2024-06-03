import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/home/Header";

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

        <div className="text-white p-2 bg-black flex w-full justify-center text-center">
          <label className="text-sm">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</label>
        </div>

        <Header />

        <div className="w-full h-[calc(100vh-140px)] overflow-y-auto">
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
      </body>
    </html>
  );
}
