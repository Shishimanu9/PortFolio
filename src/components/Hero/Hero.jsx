import Container from "../common/Container.jsx";
import Button from "../common/Button.jsx";
import profilePhoto from "../../assets/Y_image.jpeg";

/**
 * Hero section with a central photo, headline, and call-to-action buttons.
 */
export default function Hero() {
  return (
    <section id="hero" className="min-h-[85vh] flex items-center justify-center pt-32 pb-20 text-center">
      <Container className="flex flex-col items-center justify-center">

        {/* Headline placeholder */}
        <h1 className="font-display text-4xl md:text-6xl font-bold text-primary max-w-3xl mx-auto">
          {/* TODO: positioning statement */}
        </h1>

        {/* Subheadline placeholder */}
        <p className="text-secondary text-lg md:text-xl mt-6 max-w-2xl mx-auto">
          {/* TODO: value proposition */}
        </p>

        {/* Your photo - centered above buttons */}
        <div className="mt-12 mb-8">
          <img 
            src={profilePhoto} 
            alt="Yashika Basapure"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-2xl border-4 border-background ring-2 ring-border mx-auto"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button
            href="#projects"
            variant="primary"
            className="px-8 py-3.5 text-lg font-semibold tracking-wide transition-all duration-300 hover:scale-105 shadow-md hover:shadow-primary/20"
          >
            View Projects
          </Button>
          <Button
            href="#contact"
            variant="secondary"
            className="px-8 py-3.5 text-lg font-semibold tracking-wide transition-all duration-300 hover:scale-105 border border-border hover:border-primary"
          >
            Get in Touch
          </Button>
        </div>
      </Container>
    </section>
  );
}