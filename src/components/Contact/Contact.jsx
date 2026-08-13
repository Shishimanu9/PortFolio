import { socials } from "../../data/socials.js";
import Container from "../common/Container.jsx";
import SectionHeading from "../common/SectionHeading.jsx";
import ContactLink from "./ContactLink.jsx";

/**
 * Contact section — reuses socials.js (same source Footer uses).
 * No form yet, per brief; when one is added later it can live in
 * its own ContactForm.jsx alongside this file without touching
 * this component.
 */
export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <Container>
        <SectionHeading eyebrow="Contact" title="Let us work together" align="right" />

        <div className="flex flex-col gap-4">
          {socials.map((social) => (
            <ContactLink key={social.id} social={social} />
          ))}
        </div>
        <div className="mt-8 p-8 md:p-10 bg-white text-gray-900 rounded-lg shadow-lg aspect-square max-w-lg ml-auto flex flex-col justify-center text-right">
                 {/* Place your contact content here */}
                         </div>
      </Container>
    </section>
  );
}
