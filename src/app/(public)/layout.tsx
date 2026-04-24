import type { PropsWithChildren } from "react";
import { PremiumGlassNavbar } from "@/components/layout/PremiumGlassNavbar";
import { Footer } from "@/components/layout/Footer";

export default function PublicLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen">
      <PremiumGlassNavbar />
      <main className="pb-44 md:pb-0">{children}</main>
      <Footer />
    </div>
  );
}
