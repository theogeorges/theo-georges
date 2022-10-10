import { SectionTitle } from "../../../widgets/01-Atoms/SectionTitle/SectionTitle";
import { SectionWrapper } from "../../../widgets/05-Templates/SectionWrapper";
import { ContactForm } from "./ContactForm/ContactForm";
import "./ContactSection.scss";

export function ContactSection() {
  return (
    <SectionWrapper className="contact-section" id="contact">
      <SectionTitle>Contact</SectionTitle>
      <ContactForm />
    </SectionWrapper>
  );
}
