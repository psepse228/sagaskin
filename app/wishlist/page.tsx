import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = { title: "Wishlist — SAGA" };

export default function WishlistPage() {
  return (
    <PlaceholderPage
      title="Your wishlist is empty"
      note="Saving products isn't wired up yet — it needs the real product catalog and, likely, an account to persist it against."
    />
  );
}
