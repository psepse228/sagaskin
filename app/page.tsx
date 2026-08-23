import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { ShopBySkinType } from "@/components/sections/ShopBySkinType";
import { BestSellers } from "@/components/sections/BestSellers";
import { ProductsByCategory } from "@/components/sections/ProductsByCategory";
import { BubbleDivider } from "@/components/ui/BubbleDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <BestSellers />
      <BubbleDivider />
      <ShopBySkinType />
      <ProductsByCategory />
    </>
  );
}
