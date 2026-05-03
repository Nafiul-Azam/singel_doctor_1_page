import { Container } from "@/components/layout/Container";

type PageBannerProps = {
  title: string;
  description?: string;
};

export function PageBanner({ title, description }: PageBannerProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-sky-50 via-white to-cyan-50">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -right-40 top-20 h-64 w-64 rounded-full bg-sky-200/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-cyan-200/20 blur-3xl" />

      <Container className="relative py-12 md:py-16">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="max-w-3xl text-lg text-slate-600">{description}</p>
          )}
        </div>
      </Container>
    </section>
  );
}
