import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { ShopBySkinType } from "@/components/sections/ShopBySkinType";
import { BestSellers } from "@/components/sections/BestSellers";
import { ProductsByCategory } from "@/components/sections/ProductsByCategory";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <BestSellers />
      <ShopBySkinType />
      <ProductsByCategory />
    </>
  );
}
