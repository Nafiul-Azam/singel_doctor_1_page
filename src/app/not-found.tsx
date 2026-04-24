import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ROUTES } from "@/constants/routes";

export default function NotFound() {
  return (
    <section className="py-20">
      <Container className="text-center">
        <h1 className="text-3xl font-bold text-slate-900">Page not found</h1>
        <p className="mt-3 text-slate-600">
          The page you requested does not exist.
        </p>
        <Link
          href={ROUTES.home}
          className="mt-6 inline-flex rounded-md bg-sky-600 px-4 py-2 text-sm font-semibold text-white"
        >
          Back to Home
        </Link>
      </Container>
    </section>
  );
}
