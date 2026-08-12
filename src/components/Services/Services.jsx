import { services } from "../../data/services.js";
import Container from "../common/Container.jsx";
import SectionHeading from "../common/SectionHeading.jsx";
import ServiceCard from "./ServiceCard.jsx";

/**
 * Maps services.js -> ServiceCard. Add a new service by pushing an
 * object into that file; nothing here needs to change.
 */
export default function Services() {
  return (
    <section id="services" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="What I can help you with"
          align="right"
        />

        {services.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          /* ✅ FIXED: text-right is now inside className and text size boosted */
          <p className="text-secondary text-base md:text-lg text-right">
            {/* Empty state while services.js is still empty */}
            Add entries to src/data/services.js to populate this section.
          </p>
        )}
      </Container>
    </section>
  );
}