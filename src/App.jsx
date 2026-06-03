import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  const location = useLocation();
  // Key transitions on the top-level section so opening a case
  // (/werk/:slug) glides the overlay instead of re-running the page swap.
  const base = "/" + location.pathname.split("/")[1];

  return (
    <>
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={base}>
          <Route path="/" element={<Home />} />
          <Route path="/werk" element={<Work />} />
          <Route path="/werk/:slug" element={<Work />} />
          <Route path="/diensten" element={<Services />} />
          <Route path="/over" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}
