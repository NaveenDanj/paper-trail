import Header from "@/components/home/Header";
import MainBanner from "@/components/home/MainBanner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">

      <div className="text-white p-2 bg-black flex w-full justify-center text-center">
        <label className="text-sm">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</label>
      </div>

      <Header />

      <MainBanner />

    </main>
  );
}
