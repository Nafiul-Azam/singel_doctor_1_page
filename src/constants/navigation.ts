import { ROUTES } from "@/constants/routes";
import type { NavItem } from "@/types/common.types";

export const NAV_LINKS: NavItem[] = [
  { label: "Home", href: ROUTES.home },
  { label: "About", href: ROUTES.about },
  { label: "Doctor", href: ROUTES.doctor },
  { label: "Services", href: ROUTES.services },
  { label: "Chamber", href: ROUTES.chamber },
  { label: "Schedule", href: ROUTES.schedule },
  { label: "Appointment", href: ROUTES.appointment },
  { label: "Reviews", href: ROUTES.reviews },
  { label: "Blog", href: ROUTES.blog },
  { label: "Contact", href: ROUTES.contact },
  { label: "Emergency", href: ROUTES.emergency },
  { label: "Online", href: ROUTES.onlineConsultation },
];
