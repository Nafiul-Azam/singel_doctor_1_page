import { getDoctors } from "@/services/doctor.service";
import { getClinicServices } from "@/services/services.service";
import { getReviews } from "@/services/review.service";
import { getBlogPosts } from "@/services/blog.service";
import { HomeHeroSection } from "@/features/home/sections/HomeHeroSection";
import { HomeServicesPreviewSection } from "@/features/home/sections/HomeServicesPreviewSection";
import { HomeDoctorPreviewSection } from "@/features/home/sections/HomeDoctorPreviewSection";
import { HomeAppointmentCTASection } from "@/features/home/sections/HomeAppointmentCTASection";
import { HomeTestimonialsSection } from "@/features/home/sections/HomeTestimonialsSection";
import { HomeEmergencySection } from "@/features/home/sections/HomeEmergencySection";
import { HomeBlogPreviewSection } from "@/features/home/sections/HomeBlogPreviewSection";

export default async function HomePage() {
  const [doctors, services, reviews, posts] = await Promise.all([
    getDoctors(),
    getClinicServices(),
    getReviews(),
    getBlogPosts(),
  ]);

  return (
    <>
      <HomeHeroSection />
      <HomeServicesPreviewSection services={services} />
      <HomeDoctorPreviewSection doctors={doctors} />
      <HomeAppointmentCTASection />
      <HomeTestimonialsSection reviews={reviews} />
      <HomeEmergencySection />
      <HomeBlogPreviewSection posts={posts} />
    </>
  );
}
