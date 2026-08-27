import type { Metadata } from "next";
import { WishlistView } from "@/components/ui/WishlistView";

export const metadata: Metadata = { title: "Wishlist — SAGA" };

export default function WishlistPage() {
  return <WishlistView />;
}
