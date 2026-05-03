import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";

type CTASectionProps = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  variant?: "dark" | "light" | "gradient";
};

const variantStyles = {
  dark: "bg-slate-900",
  light: "bg-sky-50 border border-sky-200",
  gradient: "bg-gradient-to-r from-sky-600 to-cyan-600",
};

export function CTASection({
  title,
  description,
  buttonLabel,
  buttonHref,
  variant = "dark",
}: CTASectionProps) {
  const isDarkVariant = variant === "dark" || variant === "gradient";

  return (
    <section className="py-12 md:py-16">
      <Container>
        <div
          className={`rounded-2xl px-6 py-12 text-white md:flex md:items-center md:justify-between md:px-10 ${variantStyles[variant]}`}
        >
          <div className={`${!isDarkVariant ? "text-slate-900" : ""}`}>
            <h3 className="text-3xl font-bold md:text-4xl">{title}</h3>
            <p
              className={`mt-3 max-w-2xl text-base leading-relaxed ${isDarkVariant ? "text-slate-300" : "text-slate-700"}`}
            >
              {description}
            </p>
          </div>

          <Link
            href={buttonHref}
            className={`group mt-6 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-base font-bold transition-all duration-200 md:mt-0 ${
              variant === "light"
                ? "bg-sky-600 text-white hover:bg-sky-700"
                : "bg-white text-slate-900 hover:shadow-lg hover:-translate-y-0.5"
            }`}
          >
            {buttonLabel}
            <ArrowRight
              size={20}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}
