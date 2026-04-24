import { serviceMockData } from "@/data/mock/service.mock";

export async function getClinicServices() {
  return serviceMockData;
}

export async function getServiceBySlug(slug: string) {
  return serviceMockData.find((service) => service.slug === slug) ?? null;
}
