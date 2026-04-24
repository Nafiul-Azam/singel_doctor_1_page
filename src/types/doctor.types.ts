export interface Doctor {
  id: string;
  slug: string;
  name: string;
  title: string;
  specialty: string;
  experienceYears: number;
  image: string;
  bio: string;
  availableDays: string[];
}
