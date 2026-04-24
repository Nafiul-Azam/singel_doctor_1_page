import type { Doctor } from "@/types/doctor.types";

export const doctorMockData: Doctor[] = [
  {
    id: "d1",
    slug: "dr-samira-haque",
    name: "Dr. Samira Haque",
    title: "Senior Consultant",
    specialty: "Internal Medicine",
    experienceYears: 12,
    image: "/images/doctors/doctor-1.jpg",
    bio: "Focused on preventive and family care with patient-first communication.",
    availableDays: ["Sun", "Tue", "Thu"],
  },
  {
    id: "d2",
    slug: "dr-mahmud-rahman",
    name: "Dr. Mahmud Rahman",
    title: "Consultant",
    specialty: "Cardiology",
    experienceYears: 9,
    image: "/images/doctors/doctor-2.jpg",
    bio: "Works on heart health diagnostics and long-term treatment planning.",
    availableDays: ["Mon", "Wed", "Sat"],
  },
  {
    id: "d3",
    slug: "dr-nabila-islam",
    name: "Dr. Nabila Islam",
    title: "Specialist",
    specialty: "Dermatology",
    experienceYears: 7,
    image: "/images/doctors/doctor-3.jpg",
    bio: "Treats skin, hair, and aesthetic concerns with evidence-based methods.",
    availableDays: ["Sun", "Mon", "Thu"],
  },
];
