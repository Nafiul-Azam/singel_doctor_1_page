import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/features/contact/components/ContactForm";

export function ContactFormSection() {
  return (
    <section className="py-8">
      <Container>
        <ContactForm />
      </Container>
    </section>
  );
}
