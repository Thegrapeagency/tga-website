import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Grain from "./components/Grain.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import CaseSheet from "./components/CaseSheet.jsx";
import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import { getCase } from "./data/cases.js";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // Modal-route pattern: a case opens as an overlay over the page you came from
  // (the "background"), so that page stays mounted — its grid recedes in 3D and
  // the tapped tile is right there for the card-expand to grow out of.
  const background = location.state && location.state.background;
  const pageLocation = background || location;
  const basePage = "/" + pageLocation.pathname.split("/")[1];

  const caseMatch = location.pathname.match(/^\/werk\/([^/]+)/);
  const caseData = caseMatch ? getCase(caseMatch[1]) : null;

  const closeCase = () => {
    if (background) navigate(-1);
    else navigate("/werk");
  };

  return (
    <>
      <ScrollProgress />
      <Nav />
      <motion.div
        className="page-stage"
        style={{ transformPerspective: 1600, transformOrigin: "50% 0%" }}
        animate={
          caseData
            ? { scale: 0.93, rotateX: 5, y: -4, filter: "brightness(0.62)" }
            : { scale: 1, rotateX: 0, y: 0, filter: "brightness(1)" }
        }
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <AnimatePresence mode="wait">
          <Routes location={pageLocation} key={basePage}>
            <Route path="/" element={<Home />} />
            <Route path="/werk" element={<Work />} />
            <Route path="/werk/:slug" element={<Work />} />
            <Route path="/diensten" element={<Services />} />
            <Route path="/over" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {caseData && <CaseSheet key={caseData.slug} data={caseData} onClose={closeCase} />}
      </AnimatePresence>

      <Footer />
      <Grain />
    </>
  );
}
