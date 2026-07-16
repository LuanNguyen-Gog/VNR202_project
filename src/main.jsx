import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";

import Header from "./components/layout/Header.jsx";
import HomePage from "./pages/home/index.jsx";
import DaiHoiXPage from "./pages/dai-hoi-x/index.jsx";
import DaiHoiXIPage from "./pages/dai-hoi-xi/index.jsx";
import MindmapPage from "./pages/mindmap/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dai-hoi-x" element={<DaiHoiXPage />} />
        <Route path="/dai-hoi-xi" element={<DaiHoiXIPage />} />
        <Route path="/mindmap" element={<MindmapPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
