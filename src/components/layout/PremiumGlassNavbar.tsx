"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  BriefcaseMedical,
  CalendarPlus,
  House,
  Info,
  Stethoscope,
  UserRound,
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

type IconType = ComponentType<{ className?: string; strokeWidth?: number }>;

type NavItem = {
  label: string;
  href: string;
};

type MobileItem = {
  label: string;
  href: string;
  Icon: IconType;
  featured?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: ROUTES.home },
  { label: "About", href: ROUTES.about },
  { label: "Doctor", href: ROUTES.doctor },
  { label: "Services", href: ROUTES.services },
];

const MOBILE_ITEMS: MobileItem[] = [
  { label: "Home", href: ROUTES.home, Icon: House },
  { label: "About", href: ROUTES.about, Icon: Info },
  { label: "Services", href: ROUTES.services, Icon: BriefcaseMedical },
  {
    label: "Book",
    href: ROUTES.appointment,
    Icon: CalendarPlus,
    featured: true,
  },
  { label: "Profile", href: ROUTES.doctor, Icon: UserRound, featured: true },
];

function isRouteActive(pathname: string, href?: string) {
  if (!href) return false;

  if (href === ROUTES.home) {
    return pathname === ROUTES.home;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href={ROUTES.home}
      aria-label="Go to home page"
      className="group inline-flex min-w-0 items-center gap-3 outline-none focus:outline-none focus-visible:outline-none"
    >
      <motion.span
        whileHover={{ scale: 1.06, rotate: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 360, damping: 25 }}
        className={cn(
          "relative grid shrink-0 place-items-center text-emerald-700 transition-colors duration-500 group-hover:text-emerald-600",
          compact ? "h-9 w-9" : "h-11 w-11",
        )}
      >
        <span className="pointer-events-none absolute inset-0 rounded-full bg-emerald-500/12 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
        <Stethoscope
          className={cn("relative z-10", compact ? "h-5 w-5" : "h-6 w-6")}
          strokeWidth={2.2}
        />
      </motion.span>

      <span className="min-w-0 leading-tight">
        <span
          className={cn(
            "block truncate font-extrabold uppercase tracking-[0.2em] text-slate-500/85 transition-colors duration-500 group-hover:text-emerald-600",
            compact ? "text-[0.52rem]" : "text-[0.62rem]",
          )}
        >
          Doctor Brand
        </span>

        <span
          className={cn(
            "block truncate font-black tracking-[-0.035em] text-slate-950 transition-colors duration-500 group-hover:text-emerald-700",
            "[text-shadow:0_1px_1px_rgba(255,255,255,0.75)]",
            compact ? "text-sm" : "text-[1.08rem]",
          )}
        >
          Dr. Sarah Ahmed
        </span>
      </span>
    </Link>
  );
}

function DesktopNavLink({
  item,
  active,
  highlighted,
  onHover,
}: {
  item: NavItem;
  active: boolean;
  highlighted: boolean;
  onHover: () => void;
}) {
  const greenText = active || highlighted;

  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      onMouseEnter={onHover}
      className="relative inline-flex h-12 items-center justify-center pb-2 outline-none focus:outline-none focus-visible:outline-none"
    >
      <motion.span
        whileTap={{ scale: 0.965 }}
        transition={{ type: "spring", stiffness: 420, damping: 30 }}
        className={cn(
          "relative inline-flex h-full items-center justify-center px-2 text-[0.96rem] font-extrabold tracking-[-0.018em]",
          "bg-transparent outline-none transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
          "[text-shadow:0_1px_1px_rgba(255,255,255,0.72)]",
          greenText ? "text-emerald-700" : "text-slate-950/82",
        )}
      >
        <motion.span
          animate={{
            y: highlighted ? -1 : 0,
            opacity: greenText ? 1 : 0.88,
          }}
          transition={{ type: "spring", stiffness: 360, damping: 28 }}
        >
          {item.label}
        </motion.span>

        {highlighted ? (
          <motion.span
            layoutId="desktop-nav-travel-stroke"
            className="pointer-events-none absolute bottom-0 left-1/2 h-[2.7px] w-[calc(100%+22px)] -translate-x-1/2 rounded-full bg-emerald-600 shadow-[0_0_20px_rgba(5,150,105,0.38)]"
            transition={{
              type: "spring",
              stiffness: 420,
              damping: 35,
              mass: 0.72,
            }}
          />
        ) : null}
      </motion.span>
    </Link>
  );
}

function ActionButton({
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
  const [hovered, setHovered] = useState(false);
  const softActive = active || hovered;

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className="inline-flex outline-none focus:outline-none focus-visible:outline-none"
    >
      <motion.span
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileTap={{ scale: 0.955 }}
        transition={{ type: "spring", stiffness: 420, damping: 28 }}
        className={cn(
          "relative isolate inline-flex h-11 items-center justify-center gap-2 overflow-hidden rounded-full px-4 text-sm font-extrabold tracking-[-0.012em]",
          "outline-none transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          "[text-shadow:0_1px_1px_rgba(255,255,255,0.65)]",
          active
            ? "text-white [text-shadow:none]"
            : hovered
              ? "text-emerald-700"
              : "text-slate-950/86",
        )}
      >
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 -z-10 rounded-full bg-emerald-600"
          animate={{
            opacity: active ? 1 : hovered ? 0.12 : 0,
            scale: softActive ? 1 : 0.82,
          }}
          transition={{
            type: "spring",
            stiffness: 340,
            damping: 28,
          }}
        />

        <motion.span
          aria-hidden="true"
          className="absolute inset-x-3 top-1 -z-10 h-4 rounded-full bg-white/35 blur-md"
          animate={{
            opacity: active ? 0.55 : hovered ? 0.35 : 0,
            y: softActive ? 0 : 4,
          }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        />

        <motion.span
          animate={{
            scale: active ? 1.08 : hovered ? 1.05 : 1,
            rotate: hovered ? -2 : 0,
          }}
          transition={{ type: "spring", stiffness: 420, damping: 24 }}
          className={cn(
            "grid h-7 w-7 place-items-center rounded-full transition-colors duration-500",
            active
              ? "bg-white/18 text-white"
              : hovered
                ? "bg-emerald-100 text-emerald-700"
                : "bg-transparent text-slate-800",
          )}
        >
          {icon}
        </motion.span>

        <motion.span
          animate={{ y: active ? -0.5 : 0 }}
          transition={{ type: "spring", stiffness: 360, damping: 28 }}
        >
          {label}
        </motion.span>
      </motion.span>
    </Link>
  );
}

function MobileBottomLink({
  item,
  active,
}: {
  item: MobileItem;
  active: boolean;
}) {
  const Icon = item.Icon;
  const [hovered, setHovered] = useState(false);

  const isFilled = item.featured && active;
  const isGreen = active || hovered;

  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex min-h-[59px] flex-col items-center justify-center gap-1 overflow-hidden rounded-[1.15rem] px-1 py-1 outline-none focus:outline-none focus-visible:outline-none"
    >
      {isFilled ? (
        <motion.span
          layoutId="mobile-filled-action"
          className="absolute inset-1 rounded-[1rem] bg-emerald-600 shadow-[0_14px_28px_rgba(5,150,105,0.24)]"
          transition={{
            type: "spring",
            stiffness: 430,
            damping: 32,
          }}
        />
      ) : null}

      <motion.span
        animate={{
          y: active ? -1.5 : 0,
          scale: active ? 1.08 : hovered ? 1.04 : 1,
        }}
        transition={{ type: "spring", stiffness: 380, damping: 26 }}
        className={cn(
          "relative z-10 grid h-6 w-6 place-items-center transition-colors duration-500",
          isFilled
            ? "text-white"
            : isGreen
              ? "text-emerald-700"
              : "text-slate-700",
        )}
      >
        <Icon className="h-4 w-4" strokeWidth={2.35} />
      </motion.span>

      <span
        className={cn(
          "relative z-10 text-[0.6rem] font-extrabold leading-none tracking-[-0.01em] transition-colors duration-500",
          isFilled
            ? "text-white"
            : isGreen
              ? "text-emerald-700"
              : "text-slate-700",
        )}
      >
        {item.label}
      </span>

      {active && !isFilled ? (
        <motion.span
          layoutId="mobile-nav-stroke"
          className="absolute bottom-1 h-[2.3px] w-8 rounded-full bg-emerald-600 shadow-[0_0_14px_rgba(5,150,105,0.35)]"
          transition={{
            type: "spring",
            stiffness: 470,
            damping: 34,
          }}
        />
      ) : null}
    </Link>
  );
}

export function PremiumGlassNavbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);

  const activeNavHref = useMemo(() => {
    return NAV_ITEMS.find((item) => isRouteActive(pathname, item.href))?.href;
  }, [pathname]);

  const indicatorHref = hoveredHref ?? activeNavHref;

  const appointmentActive = isRouteActive(pathname, ROUTES.appointment);
  const doctorActive = isRouteActive(pathname, ROUTES.doctor);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-[90] w-full">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "relative isolate overflow-hidden bg-white/[0.34] backdrop-blur-[56px] backdrop-brightness-[1.08] backdrop-contrast-[0.92] backdrop-saturate-[190%] transition-all duration-700",
            "supports-[backdrop-filter]:bg-white/[0.26]",
            "[transform:translateZ(0)]",
            scrolled &&
              "bg-white/[0.42] backdrop-blur-[64px] backdrop-brightness-[1.1] backdrop-contrast-[0.9] backdrop-saturate-[210%] supports-[backdrop-filter]:bg-white/[0.32]",
          )}
        >
          {/* premium glass layer - background visible but unreadable */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/62 via-white/24 to-white/10" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(255,255,255,0.74),transparent_34%),radial-gradient(circle_at_82%_0%,rgba(16,185,129,0.11),transparent_34%),linear-gradient(90deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02),rgba(255,255,255,0.12))]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.48)_42%,transparent_62%)]" />
          <div className="pointer-events-none absolute -top-28 left-1/2 h-44 w-[82%] -translate-x-1/2 rounded-full bg-emerald-100/32 blur-3xl" />

          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/85 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-500/22 to-transparent" />

          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -left-40 top-0 h-full w-52 rotate-12 bg-gradient-to-r from-transparent via-white/24 to-transparent blur-2xl"
            animate={{ x: ["0%", "240%"] }}
            transition={{
              duration: 8.5,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 4.5,
            }}
          />

          <div
            className={cn(
              "relative mx-auto flex min-h-[72px] w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:min-h-[84px] lg:px-8",
              "shadow-[0_18px_60px_rgba(15,23,42,0.045)]",
            )}
          >
            <div className="flex min-w-0 flex-1 items-center lg:flex-none">
              <div className="hidden sm:block">
                <BrandLogo />
              </div>

              <div className="min-w-0 sm:hidden">
                <BrandLogo compact />
              </div>
            </div>

            <nav
              onMouseLeave={() => setHoveredHref(null)}
              className="hidden flex-1 items-center justify-center lg:flex"
              aria-label="Main navigation"
            >
              <div className="flex items-center justify-center gap-10">
                {NAV_ITEMS.map((item) => {
                  const active = isRouteActive(pathname, item.href);
                  const highlighted = indicatorHref === item.href;

                  return (
                    <DesktopNavLink
                      key={item.href}
                      item={item}
                      active={active}
                      highlighted={highlighted}
                      onHover={() => setHoveredHref(item.href)}
                    />
                  );
                })}
              </div>
            </nav>

            <div className="hidden shrink-0 items-center justify-end gap-2 md:flex">
              <ActionButton
                href={ROUTES.appointment}
                label="Book"
                active={appointmentActive}
                icon={<CalendarPlus className="h-4 w-4" strokeWidth={2.25} />}
              />

              <ActionButton
                href={ROUTES.doctor}
                label="Profile"
                active={doctorActive}
                icon={<UserRound className="h-4 w-4" strokeWidth={2.25} />}
              />
            </div>

            <div className="flex shrink-0 items-center gap-1 md:hidden">
              <ActionButton
                href={ROUTES.appointment}
                label="Book"
                active={appointmentActive}
                icon={<CalendarPlus className="h-4 w-4" strokeWidth={2.25} />}
              />
            </div>
          </div>
        </motion.div>
      </header>

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[999999] block md:hidden">
        <nav className="pointer-events-auto px-3 pb-[max(0.55rem,env(safe-area-inset-bottom))]">
          <div className="relative isolate mx-auto w-full max-w-sm overflow-hidden rounded-[1.65rem] bg-white/[0.36] backdrop-blur-[52px] backdrop-brightness-[1.08] backdrop-contrast-[0.92] backdrop-saturate-[190%] shadow-[0_24px_70px_rgba(15,23,42,0.12)] supports-[backdrop-filter]:bg-white/[0.28]">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/62 via-white/25 to-white/12" />
            <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-white/80" />
            <div className="pointer-events-none absolute -top-16 left-1/2 h-24 w-56 -translate-x-1/2 rounded-full bg-emerald-100/36 blur-3xl" />

            <div className="relative grid grid-cols-5 gap-1 px-1.5 py-1.5">
              {MOBILE_ITEMS.map((item) => (
                <MobileBottomLink
                  key={item.href}
                  item={item}
                  active={isRouteActive(pathname, item.href)}
                />
              ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
