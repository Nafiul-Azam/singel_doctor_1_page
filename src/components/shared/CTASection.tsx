import Link from "next/link";
import { Container } from "@/components/layout/Container";

type CTASectionProps = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
};

export function CTASection({ title, description, buttonLabel, buttonHref }: CTASectionProps) {
  return (
    <section className="py-12">
      <Container>
        <div className="rounded-2xl bg-slate-900 px-6 py-8 text-white md:flex md:items-center md:justify-between md:px-10">
          <div>
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 max-w-2xl text-sm text-slate-200">{description}</p>
          </div>
          <Link href={buttonHref} className="mt-6 inline-flex rounded-md bg-white px-4 py-2 text-sm font-semibold text-slate-900 md:mt-0">
            {buttonLabel}
          </Link>
        </div>
      </Container>
    </section>
  );
}
