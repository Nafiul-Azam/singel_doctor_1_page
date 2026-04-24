"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  BriefcaseMedical,
  CalendarPlus,
  House,
  Menu,
  PhoneCall,
  Stethoscope,
  UserRound,
  X,
} from "lucide-react";
import {
  useEffect,
  useMemo,
  useState,
  type ComponentType,
  type ReactNode,
} from "react";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils/cn";

type NavItem = {
  label: string;
  href: string;
};

type MobileItem = {
  label: string;
  href?: string;
  Icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  featured?: boolean;
  type?: "link" | "more";
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: ROUTES.home },
  { label: "About", href: ROUTES.about },
  { label: "Doctor", href: ROUTES.doctor },
  { label: "Services", href: ROUTES.services },
  { label: "Appointments", href: ROUTES.appointment },
  { label: "Reviews", href: ROUTES.reviews },
  { label: "Contact", href: ROUTES.contact },
];

const MOBILE_ITEMS: MobileItem[] = [
  { label: "Home", href: ROUTES.home, Icon: House, type: "link" },
  {
    label: "Services",
    href: ROUTES.services,
    Icon: BriefcaseMedical,
    type: "link",
  },
  {
    label: "Book",
    href: ROUTES.appointment,
    Icon: CalendarPlus,
    featured: true,
    type: "link",
  },
  { label: "Contact", href: ROUTES.contact, Icon: PhoneCall, type: "link" },
  { label: "More", Icon: Menu, type: "more" },
];

const MOBILE_VISIBLE_HREFS = new Set<string>([
  ROUTES.home,
  ROUTES.services,
  ROUTES.appointment,
  ROUTES.contact,
]);

const MORE_ITEMS: NavItem[] = NAV_ITEMS.filter(
  (item) => !MOBILE_VISIBLE_HREFS.has(item.href),
);

function isRouteActive(pathname: string, href?: string) {
  if (!href) return false;
  if (href === ROUTES.home) return pathname === ROUTES.home;
  return pathname === href || pathname.startsWith(`${href}/`);
}

function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href={ROUTES.home}
      className="inline-flex min-w-0 items-center gap-3"
      aria-label="Go to home page"
    >
      <span
        className={cn(
          "grid shrink-0 place-items-center rounded-full border border-white/60 bg-white/45 text-slate-950 backdrop-blur-2xl",
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.78),0_14px_34px_-25px_rgba(15,23,42,0.7)]",
          compact ? "h-10 w-10" : "h-12 w-12",
        )}
      >
        <Stethoscope
          className={compact ? "h-4 w-4" : "h-5 w-5"}
          strokeWidth={1.9}
        />
      </span>

      <span className="min-w-0 leading-tight">
        <span
          className={cn(
            "block truncate font-semibold uppercase tracking-[0.22em] text-slate-500",
            compact ? "text-[0.55rem]" : "text-[0.64rem]",
          )}
        >
          Doctor Brand
        </span>

        <span
          className={cn(
            "block truncate font-bold tracking-tight text-slate-950",
            compact ? "text-sm" : "text-lg",
          )}
        >
          Dr. Sarah Ahmed
        </span>
      </span>
    </Link>
  );
}

function DesktopNavLink({ item, active }: { item: NavItem; active: boolean }) {
  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      className="relative z-10 inline-flex"
    >
      <motion.span
        whileHover={{ y: -2, scale: 1.012 }}
        whileTap={{ y: -1, scale: 0.992 }}
        transition={{
          type: "spring",
          stiffness: 520,
          damping: 34,
          mass: 0.45,
        }}
        className={cn(
          "group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full border px-4 text-[0.88rem] font-bold tracking-[-0.02em]",
          "backdrop-blur-2xl transition-colors duration-300",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950/15",
          active
            ? "border-white/65 bg-white/48 text-slate-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.86),0_14px_30px_-24px_rgba(15,23,42,0.75)]"
            : "border-white/0 bg-white/0 text-slate-700 hover:border-white/50 hover:bg-white/28 hover:text-slate-950 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_12px_26px_-24px_rgba(15,23,42,0.52)]",
        )}
      >
        <span className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(135deg,rgba(255,255,255,0.46),rgba(255,255,255,0.08)_44%,rgba(255,255,255,0.18))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <span className="pointer-events-none absolute inset-y-0 -left-[80%] w-[44%] -skew-x-12 bg-gradient-to-r from-transparent via-white/55 to-transparent opacity-0 blur-[1px] transition-all duration-700 group-hover:translate-x-[360%] group-hover:opacity-100" />

        <span className="relative z-20">{item.label}</span>

        {active ? (
          <motion.span
            layoutId="desktop-nav-active"
            className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/65"
            transition={{ type: "spring", stiffness: 420, damping: 36 }}
          />
        ) : null}

        <span
          className={cn(
            "pointer-events-none absolute bottom-1.5 left-1/2 h-[2px] -translate-x-1/2 rounded-full transition-all duration-300",
            active
              ? "w-7 bg-slate-950/70"
              : "w-0 bg-slate-950/55 group-hover:w-6",
          )}
        />
      </motion.span>
    </Link>
  );
}

function PremiumButton({
  href,
  label,
  active,
  icon,
}: {
  href: string;
  label: string;
  active: boolean;
  icon: ReactNode;
}) {
  return (
    <Link href={href} className="relative inline-flex">
      <motion.span
        whileHover={{ y: -2, scale: 1.015 }}
        whileTap={{ y: -1, scale: 0.992 }}
        transition={{
          type: "spring",
          stiffness: 520,
          damping: 34,
          mass: 0.45,
        }}
        className={cn(
          "group relative inline-flex h-11 items-center justify-center gap-2 overflow-hidden rounded-full border px-5 text-sm font-bold",
          "backdrop-blur-2xl transition-colors duration-300",
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.68),0_16px_34px_-26px_rgba(15,23,42,0.72)]",
          active
            ? "border-slate-950/12 bg-slate-950/[0.08] text-slate-950 ring-1 ring-white/55"
            : "border-white/55 bg-white/[0.18] text-slate-900 hover:border-white/70 hover:bg-white/[0.36] hover:text-slate-950",
        )}
      >
        <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.72),transparent_52%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

        <span className="pointer-events-none absolute inset-y-0 -left-[75%] w-[42%] -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 blur-[1px] transition-all duration-700 group-hover:translate-x-[360%] group-hover:opacity-100" />

        <span className="relative z-20 inline-flex items-center gap-2">
          {icon}
          {label}
        </span>
      </motion.span>
    </Link>
  );
}

function MobileBottomLink({
  item,
  active,
  moreOpen,
  onMoreClick,
  closeMore,
}: {
  item: MobileItem;
  active: boolean;
  moreOpen: boolean;
  onMoreClick: () => void;
  closeMore: () => void;
}) {
  const Icon = item.Icon;
  const isMore = item.type === "more";

  const baseClassName = cn(
    "group relative flex min-h-[52px] flex-col items-center justify-center gap-0.5 overflow-hidden rounded-2xl px-1 py-1 text-[0.58rem] font-black tracking-[-0.01em]",
    "transition-all duration-300 active:scale-[0.94]",
    item.featured
      ? "border border-slate-950/20 bg-white/16 text-slate-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.82)] backdrop-blur-2xl hover:bg-white/28"
      : active || (isMore && moreOpen)
        ? "bg-slate-950 text-white shadow-[0_12px_26px_-18px_rgba(15,23,42,0.8)]"
        : "text-slate-700 hover:bg-white/45 hover:text-slate-950",
  );

  const content = (
    <>
      <span
        className={cn(
          "relative z-20 grid h-6 w-6 place-items-center rounded-full",
          item.featured && "border border-slate-950/15 bg-white/25",
        )}
      >
        {isMore && moreOpen ? (
          <X className="h-3.5 w-3.5" strokeWidth={2.2} />
        ) : (
          <Icon className="h-3.5 w-3.5" strokeWidth={2.2} />
        )}
      </span>

      <span className="relative z-20 leading-none">{item.label}</span>

      {(active || (isMore && moreOpen)) && !item.featured ? (
        <span className="absolute bottom-1 h-[2px] w-5 rounded-full bg-current opacity-70" />
      ) : null}

      {item.featured ? (
        <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/40" />
      ) : null}
    </>
  );

  if (isMore) {
    return (
      <button
        type="button"
        onClick={onMoreClick}
        aria-label={moreOpen ? "Close more menu" : "Open more menu"}
        aria-expanded={moreOpen}
        className={baseClassName}
      >
        {content}
      </button>
    );
  }

  return (
    <Link
      href={item.href ?? ROUTES.home}
      aria-current={active ? "page" : undefined}
      onClick={closeMore}
      className={baseClassName}
    >
      {content}
    </Link>
  );
}

export function PremiumGlassNavbar() {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const appointmentActive = isRouteActive(pathname, ROUTES.appointment);
  const doctorActive = isRouteActive(pathname, ROUTES.doctor);

  const hasActiveMoreItem = useMemo(() => {
    return MORE_ITEMS.some((item) => isRouteActive(pathname, item.href));
  }, [pathname]);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileMoreOpen(false);
        setMobileMenuOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileMoreOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Navbar */}
      <header className="sticky top-0 z-[90] w-full px-3 pt-3 sm:px-5 sm:pt-4 lg:px-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden h-28 bg-gradient-to-b from-slate-50/55 via-slate-50/20 to-transparent md:block" />

        <div className="mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "relative overflow-hidden rounded-[1.65rem] border border-white/40",
              "bg-white/62 backdrop-blur-xl md:bg-white/[0.26] md:backdrop-blur-[20px]",
              "shadow-none md:shadow-[0_20px_54px_-34px_rgba(15,23,42,0.58)]",
              scrolled && "bg-white/72 md:bg-white/[0.34]",
            )}
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.42),rgba(255,255,255,0.08)_38%,rgba(255,255,255,0.16))]" />
            <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-white/70" />

            <div className="relative flex min-h-[70px] items-center justify-between gap-3 px-4 sm:px-6 lg:min-h-[86px] lg:px-7">
              <div className="flex min-w-0 flex-1 items-center md:flex-none">
                <div className="hidden md:block">
                  <BrandLogo />
                </div>

                <div className="min-w-0 md:hidden">
                  <BrandLogo compact />
                </div>
              </div>

              <nav
                className="hidden lg:flex lg:flex-1 lg:justify-center"
                aria-label="Main desktop navigation"
              >
                <div className="relative flex items-center justify-center gap-1 overflow-hidden rounded-full border border-white/42 bg-white/[0.14] px-2 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.62)] backdrop-blur-2xl">
                  <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.55),transparent_55%)] opacity-50" />

                  {NAV_ITEMS.map((item) => (
                    <DesktopNavLink
                      key={item.href}
                      item={item}
                      active={isRouteActive(pathname, item.href)}
                    />
                  ))}
                </div>
              </nav>

              <nav
                className="hidden md:flex md:flex-1 md:justify-center lg:hidden"
                aria-label="Tablet navigation"
              >
                <div className="relative flex items-center justify-center gap-1 rounded-full border border-white/42 bg-white/[0.14] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.62)] backdrop-blur-2xl">
                  {NAV_ITEMS.slice(0, 4).map((item) => (
                    <DesktopNavLink
                      key={item.href}
                      item={item}
                      active={isRouteActive(pathname, item.href)}
                    />
                  ))}
                </div>
              </nav>

              <div className="hidden shrink-0 items-center justify-end gap-2 md:flex">
                <PremiumButton
                  href={ROUTES.appointment}
                  label="Book"
                  active={appointmentActive}
                  icon={<CalendarPlus className="h-4 w-4" strokeWidth={1.9} />}
                />

                <PremiumButton
                  href={ROUTES.doctor}
                  label="Profile"
                  active={doctorActive}
                  icon={<UserRound className="h-4 w-4" strokeWidth={1.9} />}
                />
              </div>

              <button
                type="button"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                onClick={() => {
                  setMobileMoreOpen(false);
                  setMobileMenuOpen((current) => !current);
                }}
                className="group relative inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/50 bg-white/36 text-slate-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] backdrop-blur-2xl transition-all duration-300 active:scale-[0.94] md:hidden"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" strokeWidth={2.1} />
                ) : (
                  <Menu className="h-5 w-5" strokeWidth={2.1} />
                )}
              </button>
            </div>

            <AnimatePresence initial={false}>
              {mobileMenuOpen ? (
                <motion.div
                  key="mobile-menu"
                  initial={{ height: 0, opacity: 0, y: -8 }}
                  animate={{ height: "auto", opacity: 1, y: 0 }}
                  exit={{ height: 0, opacity: 0, y: -8 }}
                  transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden border-t border-white/35 md:hidden"
                >
                  <div className="px-3 pb-4 pt-2">
                    <nav className="grid gap-2 rounded-[1.35rem] border border-white/40 bg-white/[0.24] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-[24px]">
                      {NAV_ITEMS.map((item, index) => {
                        const active = isRouteActive(pathname, item.href);

                        return (
                          <motion.div
                            key={item.href}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              delay: index * 0.025,
                              type: "spring",
                              stiffness: 420,
                              damping: 32,
                            }}
                          >
                            <Link
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              aria-current={active ? "page" : undefined}
                              className={cn(
                                "group relative flex items-center justify-between overflow-hidden rounded-2xl border px-4 py-3 text-sm font-bold transition-all duration-300 active:scale-[0.98]",
                                active
                                  ? "border-white/60 bg-slate-950 text-white shadow-[0_14px_30px_-22px_rgba(15,23,42,0.82)]"
                                  : "border-white/35 bg-white/[0.22] text-slate-800 hover:bg-white/[0.36]",
                              )}
                            >
                              <span className="relative z-10">
                                {item.label}
                              </span>

                              <span
                                className={cn(
                                  "relative z-10 h-2 w-2 rounded-full",
                                  active ? "bg-white" : "bg-slate-400/70",
                                )}
                              />

                              <span className="pointer-events-none absolute inset-y-0 -left-[80%] w-[42%] -skew-x-12 bg-gradient-to-r from-transparent via-white/45 to-transparent opacity-0 blur-[1px] transition-all duration-700 group-hover:translate-x-[360%] group-hover:opacity-100" />
                            </Link>
                          </motion.div>
                        );
                      })}
                    </nav>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        </div>
      </header>

      {/* Outside click layer for top mobile dropdown */}
      <AnimatePresence>
        {mobileMenuOpen ? (
          <motion.button
            type="button"
            aria-label="Close mobile menu"
            className="fixed inset-0 z-[80] cursor-default bg-transparent md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.16 }}
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : null}
      </AnimatePresence>

      {/* Outside click layer for Mobile More Popup */}
      <AnimatePresence>
        {mobileMoreOpen ? (
          <motion.button
            type="button"
            aria-label="Close more menu"
            className="fixed inset-0 z-[999997] cursor-default bg-transparent lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={() => setMobileMoreOpen(false)}
          />
        ) : null}
      </AnimatePresence>

      {/* Mobile More Popup */}
      <AnimatePresence>
        {mobileMoreOpen ? (
          <motion.div
            key="mobile-more-popup"
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.97 }}
            transition={{
              type: "spring",
              stiffness: 420,
              damping: 34,
              mass: 0.7,
            }}
            className="fixed inset-x-0 bottom-[82px] z-[999998] px-3 lg:hidden"
          >
            <div className="mx-auto max-w-sm">
              <div className="relative overflow-hidden rounded-[1.7rem] border border-white/35 bg-white/[0.16] p-2 shadow-[0_20px_55px_-34px_rgba(15,23,42,0.85)] backdrop-blur-[22px]">
                <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.34),rgba(255,255,255,0.06)_42%,rgba(255,255,255,0.16))]" />
                <span className="pointer-events-none absolute inset-x-5 top-0 h-px bg-white/65" />

                <div className="relative z-10 mb-2 flex items-center justify-between px-2 pt-1">
                  <div>
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-slate-600/80">
                      More
                    </p>
                    <p className="text-[0.72rem] font-medium text-slate-700/65">
                      Quick navigation
                    </p>
                  </div>

                  <motion.button
                    type="button"
                    whileTap={{ scale: 0.92 }}
                    onClick={() => setMobileMoreOpen(false)}
                    className="grid h-8 w-8 place-items-center rounded-full border border-white/40 bg-white/[0.18] text-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-2xl transition hover:bg-white/[0.3] active:bg-white/[0.42]"
                    aria-label="Close more menu"
                  >
                    <X className="h-3.5 w-3.5" strokeWidth={2.3} />
                  </motion.button>
                </div>

                <div className="relative z-10 grid grid-cols-3 gap-1.5">
                  {MORE_ITEMS.map((item, index) => {
                    const active = isRouteActive(pathname, item.href);

                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: index * 0.035,
                          type: "spring",
                          stiffness: 420,
                          damping: 32,
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setMobileMoreOpen(false)}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "group relative flex min-h-[68px] flex-col items-center justify-center overflow-hidden rounded-[1.25rem] border px-2 py-2 text-center",
                            "backdrop-blur-2xl transition-all duration-300 active:scale-[0.96]",
                            active
                              ? "border-white/55 bg-white/[0.36] text-slate-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.76),0_14px_30px_-24px_rgba(15,23,42,0.8)]"
                              : "border-white/25 bg-white/[0.12] text-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] hover:border-white/45 hover:bg-white/[0.24]",
                          )}
                        >
                          <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.45),transparent_58%)] opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

                          <span className="pointer-events-none absolute inset-y-0 -left-[80%] w-[44%] -skew-x-12 bg-gradient-to-r from-transparent via-white/55 to-transparent opacity-0 blur-[1px] transition-all duration-700 group-hover:translate-x-[380%] group-hover:opacity-100" />

                          <span
                            className={cn(
                              "relative z-10 mb-1 grid h-8 w-8 place-items-center rounded-full border text-[0.7rem] font-black backdrop-blur-2xl transition-all duration-300",
                              active
                                ? "border-white/55 bg-slate-950/85 text-white"
                                : "border-white/35 bg-white/[0.16] text-slate-700 group-hover:bg-white/[0.28]",
                            )}
                          >
                            {item.label.charAt(0)}
                          </span>

                          <span className="relative z-10 text-[0.72rem] font-black leading-none tracking-[-0.02em]">
                            {item.label}
                          </span>

                          {active ? (
                            <span className="relative z-10 mt-1 h-1 w-4 rounded-full bg-slate-950/70" />
                          ) : null}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                <span className="absolute bottom-[-6px] right-[2.35rem] h-3.5 w-3.5 rotate-45 border-b border-r border-white/35 bg-white/[0.16] backdrop-blur-[22px]" />
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Mobile Bottom Navigation */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[999999] block lg:hidden">
        <nav className="pointer-events-auto relative px-3 pb-[max(0.55rem,env(safe-area-inset-bottom))]">
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-[1.55rem] border border-white/55 bg-white/[0.38] shadow-[0_18px_48px_-24px_rgba(15,23,42,0.82)] backdrop-blur-[26px]">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.38),rgba(255,255,255,0.08)_46%,rgba(255,255,255,0.16))]" />
            <div className="relative grid grid-cols-5 gap-1 px-1.5 py-1.5">
              {MOBILE_ITEMS.map((item) => {
                const isMore = item.type === "more";

                return (
                  <MobileBottomLink
                    key={item.label}
                    item={item}
                    active={
                      isMore
                        ? hasActiveMoreItem
                        : isRouteActive(pathname, item.href)
                    }
                    moreOpen={mobileMoreOpen}
                    onMoreClick={() => {
                      setMobileMenuOpen(false);
                      setMobileMoreOpen((current) => !current);
                    }}
                    closeMore={() => setMobileMoreOpen(false)}
                  />
                );
              })}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
