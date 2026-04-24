import { doctorMockData } from "@/data/mock/doctor.mock";

export async function getDoctors() {
  return doctorMockData;
}

export async function getDoctorBySlug(slug: string) {
  return doctorMockData.find((doctor) => doctor.slug === slug) ?? null;
}
