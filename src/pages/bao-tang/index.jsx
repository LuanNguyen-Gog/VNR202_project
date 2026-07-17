import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Landmark, MousePointerClick, Move } from "lucide-react";
import Button from "../../components/ui/Button";
import Museum from "./Museum";

const BaoTangPage = () => {
  const navigate = useNavigate();
  const [locked, setLocked] = useState(false);
  const isTouch = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches,
    [],
  );

  return (
    <div className="w-full h-screen bg-charcoal relative overflow-hidden">
      <Museum isTouch={isTouch} onLockChange={setLocked} />

      {/* Overlay hướng dẫn — ẩn khi đang tham quan (pointer lock) */}
      <AnimatePresence>
        {!locked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-40 flex items-center justify-center bg-charcoal/60 backdrop-blur-[2px] pt-20"
          >
            <div className="bg-beige border-2 border-ink shadow-hard-md rounded-2xl p-8 max-w-md mx-4 text-center space-y-5">
              <div className="w-14 h-14 bg-red-muted mx-auto flex items-center justify-center border border-beige rounded-2xl">
                <Landmark className="text-beige" size={26} />
              </div>
              <h1 className="font-display text-2xl md:text-3xl font-bold text-brown uppercase">
                Bảo tàng 3D <span className="text-red-muted">Đổi mới</span>
              </h1>
              <p className="text-brown/80 font-body text-sm">
                Gian I (tường trái): Đại hội X • Gian II (tường phải): Đại hội
                XI • Tường cuối: Kết luận. Hình ảnh đang là placeholder — sẽ
                thay bằng ảnh tư liệu thật.
              </p>

              {isTouch ? (
                <p className="font-mono text-xs uppercase tracking-widest text-brown/60">
                  Dùng 1 ngón để xoay, 2 ngón để zoom
                </p>
              ) : (
                <div className="flex items-center justify-center gap-6 font-mono text-xs uppercase tracking-widest text-brown/60">
                  <span className="inline-flex items-center gap-1.5">
                    <Move size={14} /> WASD di chuyển
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MousePointerClick size={14} /> Chuột nhìn quanh
                  </span>
                </div>
              )}

              <div className="flex items-center justify-center gap-3 pt-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate("/mindmap")}
                  className="gap-2"
                >
                  <ArrowLeft size={16} /> Quay lại
                </Button>
                {!isTouch && (
                  <Button
                    variant="danger"
                    size="md"
                    onClick={() => window.__museumLock?.()}
                  >
                    Vào tham quan
                  </Button>
                )}
              </div>
              {!isTouch && (
                <p className="font-mono text-[10px] uppercase tracking-widest text-brown/40">
                  Nhấn ESC để thoát chế độ tham quan
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Crosshair khi đang tham quan */}
      {locked && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
          <div className="w-1.5 h-1.5 rounded-full bg-beige/80 shadow" />
        </div>
      )}
    </div>
  );
};

export default BaoTangPage;
