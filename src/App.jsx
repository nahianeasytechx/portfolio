import { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import "./App.css";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";

export const lenisRef = { current: null };
// Add excluded paths here if needed in the future
const EXCLUDED_PATHS = [];

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const isExcluded = EXCLUDED_PATHS.some((p) =>
      location.pathname.startsWith(p),
    );

    // Always destroy previous instance on route change
    if (lenisRef.current) {
      lenisRef.current.destroy();
      lenisRef.current = null;
    }

    if (isExcluded) {
      // Restore normal scroll for excluded routes
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      return;
    }

    const lenis = new Lenis({
      duration: 2,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // expo ease-out — fast start, luxurious slow finish
      orientation: "vertical",
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 0.56, // slightly slower wheel response = feels heavier/premium
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Global helper — replaces window.smoothScrollTop()
    window.lenisScrollTop = () => {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    };

    // Scroll to top immediately on route change
    lenis.scrollTo(0, { immediate: true });

    // RAF loop
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
