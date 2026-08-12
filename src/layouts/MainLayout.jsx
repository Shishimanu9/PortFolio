import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";

// Shared chrome for every route. Navbar/Footer stay mounted across
// route changes so they do not need to be repeated per page.
export default function MainLayout() {
  return (
    <div className="min-h-screen bg-background text-primary font-body flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
