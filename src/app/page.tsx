import BannerSection from "@/components/home/BannerSection";
import BestSeller from "@/components/home/BestSeller";
import BrowsByCategories from "@/components/home/BrowsByCategories";
import FlashSales from "@/components/home/FlashSales";
import Header from "@/components/home/Header";
import MainBanner from "@/components/home/MainBanner";
import OurProduct from "@/components/home/OurProducts";
import NewArrival from "@/components/home/NewArrival";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <div className="">
      <MainBanner />
      <FlashSales />
      <BrowsByCategories />
      <BestSeller />
      <BannerSection />
      <OurProduct />
      <Footer />
    </div>
  );
}
