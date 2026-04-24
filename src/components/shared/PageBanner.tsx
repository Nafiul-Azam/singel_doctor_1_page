import { Container } from "@/components/layout/Container";

type PageBannerProps = {
  title: string;
  description?: string;
};

export function PageBanner({ title, description }: PageBannerProps) {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-r from-sky-50 via-white to-cyan-50">
      <Container className="py-12 md:py-16">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{title}</h1>
        {description ? <p className="mt-3 max-w-2xl text-slate-600">{description}</p> : null}
      </Container>
    </section>
  );
}
