import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import App from "./App.jsx";
import { LanguageProvider } from "./i18n.jsx";
import "./index.css";

const lenisOptions = {
  lerp: 0.09,
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 1.6,
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <ReactLenis root options={lenisOptions}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReactLenis>
    </LanguageProvider>
  </React.StrictMode>
);
