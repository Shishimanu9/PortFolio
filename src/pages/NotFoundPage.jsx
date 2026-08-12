import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="max-w-content mx-auto px-6 py-32 text-center">
      <h1 className="text-2xl font-display">404</h1>
      <p className="text-muted mt-2">Page not found.</p>
      <Link to="/" className="underline mt-4 inline-block">
        Back home
      </Link>
    </section>
  );
}
