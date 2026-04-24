import type { ClinicService } from "@/types/service.types";

export const serviceMockData: ClinicService[] = [
  {
    id: "s1",
    slug: "general-checkup",
    title: "General Checkup",
    shortDescription: "Routine health screening for all age groups.",
    icon: "checkup",
  },
  {
    id: "s2",
    slug: "cardiac-care",
    title: "Cardiac Care",
    shortDescription: "Heart diagnostics and specialist consultation.",
    icon: "heart",
  },
  {
    id: "s3",
    slug: "skin-treatment",
    title: "Skin Treatment",
    shortDescription: "Dermatology support for common and complex cases.",
    icon: "skin",
  },
  {
    id: "s4",
    slug: "lab-tests",
    title: "Lab Tests",
    shortDescription: "Reliable pathology and diagnostic test support.",
    icon: "lab",
  },
];
