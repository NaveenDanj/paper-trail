import BannerSection from "@/components/home/BannerSection";
import BestSeller from "@/components/home/BestSeller";
import BrowsByCategories from "@/components/home/BrowsByCategories";
import FlashSales from "@/components/home/FlashSales";
import Header from "@/components/home/Header";
import MainBanner from "@/components/home/MainBanner";
import OurProduct from "@/components/home/OurProducts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">

      <div className="text-white p-2 bg-black flex w-full justify-center text-center">
        <label className="text-sm">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</label>
      </div>

      <Header />


      <div className="w-full h-[calc(100vh-140px)] overflow-y-auto pb-10">
        <MainBanner />
        <FlashSales />
        <BrowsByCategories />
        <BestSeller />
        <BannerSection />
        <OurProduct />
      </div>

    </main>
  );
}
