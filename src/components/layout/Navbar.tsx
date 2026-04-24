import Link from "next/link";
import { NAV_LINKS } from "@/constants/navigation";
import { ROUTES } from "@/constants/routes";
import { Container } from "@/components/layout/Container";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href={ROUTES.home} className="text-lg font-semibold tracking-tight text-slate-900">
          CarePoint Clinic
        </Link>
        <nav className="hidden items-center gap-5 md:flex">
          {NAV_LINKS.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href={ROUTES.appointment}
          className="hidden rounded-md bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700 md:inline-flex"
        >
          Book Now
        </Link>
      </Container>
      <Container className="py-3 md:hidden">
        <MobileMenu />
      </Container>
    </header>
  );
}
