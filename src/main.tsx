import React from "react";
import ReactDOM from "react-dom/client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
