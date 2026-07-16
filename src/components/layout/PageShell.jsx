import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

/**
 * PageShell — snap-scroll container cho mỗi trang.
 *
 * Khi người dùng cuộn xuống hết trang và tiếp tục cuộn, tự động chuyển
 * sang trang tiếp theo (prop `next`). Cuộn ngược lên ở đầu trang sẽ quay
 * về trang trước (prop `prev`) — không cần bấm vào menu.
 */
const THRESHOLD = 480; // tổng deltaY cần tích luỹ ở mép trang để chuyển trang
const EDGE_EPSILON = 4;

const PageShell = ({ children, prev, next, prevLabel, nextLabel }) => {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const accumRef = useRef(0);
  const decayTimerRef = useRef(null);
  const navigatingRef = useRef(false);
  const touchYRef = useRef(null);
  const [progress, setProgress] = useState(0); // -1..1 (âm = lên trang trước)

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const atBottom = () =>
      container.scrollTop + container.clientHeight >=
      container.scrollHeight - EDGE_EPSILON;
    const atTop = () => container.scrollTop <= EDGE_EPSILON;

    const resetAccum = () => {
      accumRef.current = 0;
      setProgress(0);
    };

    const scheduleDecay = () => {
      if (decayTimerRef.current) clearTimeout(decayTimerRef.current);
      decayTimerRef.current = setTimeout(resetAccum, 700);
    };

    const goTo = (path) => {
      if (navigatingRef.current || !path) return;
      navigatingRef.current = true;
      navigate(path);
    };

    const feed = (delta) => {
      // Chỉ tích luỹ khi đang đứng ở mép trang và cuộn tiếp về phía ngoài
      if (delta > 0 && next && atBottom()) {
        accumRef.current = Math.max(0, accumRef.current) + delta;
        setProgress(Math.min(1, accumRef.current / THRESHOLD));
        if (accumRef.current >= THRESHOLD) goTo(next);
        scheduleDecay();
      } else if (delta < 0 && prev && atTop()) {
        accumRef.current = Math.min(0, accumRef.current) + delta;
        setProgress(Math.max(-1, accumRef.current / THRESHOLD));
        if (accumRef.current <= -THRESHOLD) goTo(prev);
        scheduleDecay();
      } else if (accumRef.current !== 0) {
        resetAccum();
      }
    };

    const onWheel = (e) => feed(e.deltaY);

    const onTouchStart = (e) => {
      touchYRef.current = e.touches[0].clientY;
    };
    const onTouchMove = (e) => {
      if (touchYRef.current == null) return;
      const y = e.touches[0].clientY;
      const delta = touchYRef.current - y; // kéo lên = cuộn xuống
      touchYRef.current = y;
      feed(delta * 2.2);
    };
    const onTouchEnd = () => {
      touchYRef.current = null;
    };

    container.addEventListener("wheel", onWheel, { passive: true });
    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchmove", onTouchMove, { passive: true });
    container.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      container.removeEventListener("wheel", onWheel);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", onTouchEnd);
      if (decayTimerRef.current) clearTimeout(decayTimerRef.current);
    };
  }, [navigate, next, prev]);

  const showNextHint = progress > 0.04 && next;
  const showPrevHint = progress < -0.04 && prev;

  return (
    <div
      ref={containerRef}
      className="home-shell w-full bg-beige selection:bg-brown selection:text-beige snap-container h-screen overflow-y-scroll"
    >
      {children}

      {/* Hint chuyển trang tiếp theo */}
      <AnimatePresence>
        {showNextHint && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
          >
            <div className="bg-brown text-beige border-2 border-ink shadow-hard px-6 py-3 flex flex-col items-center gap-1 min-w-72">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest">
                <ChevronDown size={16} className="animate-bounce" />
                Cuộn tiếp để sang: {nextLabel || "Trang tiếp theo"}
                <ChevronDown size={16} className="animate-bounce" />
              </div>
              <div className="w-full h-1.5 bg-beige/20 overflow-hidden">
                <div
                  className="h-full bg-gold transition-[width] duration-75"
                  style={{ width: `${Math.round(progress * 100)}%` }}
                />
              </div>
            </div>
          </motion.div>
        )}
        {showPrevHint && (
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
          >
            <div className="bg-brown text-beige border-2 border-ink shadow-hard px-6 py-3 flex flex-col items-center gap-1 min-w-72">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest">
                <ChevronUp size={16} className="animate-bounce" />
                Cuộn lên để về: {prevLabel || "Trang trước"}
                <ChevronUp size={16} className="animate-bounce" />
              </div>
              <div className="w-full h-1.5 bg-beige/20 overflow-hidden">
                <div
                  className="h-full bg-gold transition-[width] duration-75"
                  style={{ width: `${Math.round(-progress * 100)}%` }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PageShell;
