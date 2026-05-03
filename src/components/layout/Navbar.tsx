import Link from "next/link";
import { NAV_LINKS } from "@/constants/navigation";
import { ROUTES } from "@/constants/routes";
import { Container } from "@/components/layout/Container";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Stethoscope } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href={ROUTES.home}
          className="group inline-flex items-center gap-2"
        >
          <div className="rounded-lg bg-sky-600 p-2 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
            <Stethoscope size={20} className="text-white" />
          </div>
          <div className="hidden sm:block">
            <span className="block text-lg font-bold tracking-tight text-slate-900">
              CarePoint
            </span>
            <span className="block text-xs font-medium text-slate-500">
              Clinic
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm font-semibold text-slate-700 transition-colors duration-200 hover:text-sky-600 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-sky-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <Link
            href={ROUTES.appointment}
            className="hidden rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-sky-700 hover:shadow-lg hover:-translate-y-0.5 md:inline-flex"
          >
            Book Now
          </Link>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}
