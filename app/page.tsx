import { Hero } from "@/components/sections/Hero";
import { ShopBySkinType } from "@/components/sections/ShopBySkinType";
import { BestSellers } from "@/components/sections/BestSellers";
import { ProductsByCategory } from "@/components/sections/ProductsByCategory";

export default function Home() {
  return (
    <>
      <Hero />
      <BestSellers />
      <ShopBySkinType />
      <ProductsByCategory />
    </>
  );
}
