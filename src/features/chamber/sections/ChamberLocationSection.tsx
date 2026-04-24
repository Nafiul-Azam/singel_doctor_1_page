import { Container } from "@/components/layout/Container";

type ChamberLocationSectionProps = {
  name: string;
  address: string;
  phone: string;
};

export function ChamberLocationSection({
  name,
  address,
  phone,
}: ChamberLocationSectionProps) {
  return (
    <section className="py-8 md:py-12">
      <Container>
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-bold text-slate-900">{name}</h2>
          <p className="mt-2 text-sm text-slate-600">Address: {address}</p>
          <p className="mt-1 text-sm text-slate-600">Phone: {phone}</p>
        </div>
      </Container>
    </section>
  );
}
