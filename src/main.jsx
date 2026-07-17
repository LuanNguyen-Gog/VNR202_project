import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";

import Header from "./components/layout/Header.jsx";
import HomePage from "./pages/home/index.jsx";
import DaiHoiXPage from "./pages/dai-hoi-x/index.jsx";
import DaiHoiXIPage from "./pages/dai-hoi-xi/index.jsx";
import MindmapPage from "./pages/mindmap/index.jsx";

// Trang 3D nặng (Three.js) — chỉ tải khi người dùng vào /bao-tang
const BaoTangPage = lazy(() => import("./pages/bao-tang/index.jsx"));

const PageLoader = () => (
  <div className="w-full h-screen flex items-center justify-center bg-beige">
    <div className="bg-brown text-beige border-2 border-ink shadow-hard rounded-xl px-6 py-3 font-mono text-xs uppercase tracking-widest">
      Đang tải...
    </div>
  </div>
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dai-hoi-x" element={<DaiHoiXPage />} />
          <Route path="/dai-hoi-xi" element={<DaiHoiXIPage />} />
          <Route path="/mindmap" element={<MindmapPage />} />
          <Route path="/bao-tang" element={<BaoTangPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
);
