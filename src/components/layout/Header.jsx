import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";
import { PAGE_ORDER } from "../../config/pages";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track scroll for header animation
  useEffect(() => {
    let cleanupContainer = null;

    const setupScrollListener = () => {
      const container = document.querySelector(".snap-container");

      const handleScroll = () => {
        const scrollTop = container ? container.scrollTop : window.scrollY;
        setScrolled(scrollTop > 20);
      };

      if (container) {
        container.addEventListener("scroll", handleScroll, { passive: true });
        cleanupContainer = () =>
          container.removeEventListener("scroll", handleScroll);
        handleScroll();
      } else {
        window.addEventListener("scroll", handleScroll, { passive: true });
        cleanupContainer = () =>
          window.removeEventListener("scroll", handleScroll);
      }
    };

    const timeoutId = setTimeout(setupScrollListener, 100);

    return () => {
      clearTimeout(timeoutId);
      if (cleanupContainer) cleanupContainer();
    };
  }, [location.pathname]);

  const handleNavigate = (href) => {
    navigate(href);
    setMobileMenuOpen(false);
  };

  const headerBgClass = "bg-beige border-b border-brown/20";
  const headerShadowClass = scrolled ? "shadow-sm" : "";

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-100 ${headerBgClass} ${headerShadowClass}`}
      >
        <nav className="flex justify-between items-center h-20 max-w-screen-2xl mx-auto px-4 md:px-10 lg:px-16">
          {/* Logo / Brand */}
          <div
            onClick={() => handleNavigate("/")}
            className="font-display text-3xl text-brown cursor-pointer select-none hover:translate-x-1 transition-transform tracking-tight leading-none uppercase border-2 border-transparent hover:border-brown hover:bg-red-muted/20 rounded-lg p-1"
          >
            VNR<span className="text-red-muted">202</span>
            <span className="hidden md:inline-block ml-3 text-xs font-mono tracking-widest text-brown/60 border-l-2 border-brown/20 pl-3">
              Lịch sử Đảng Cộng sản Việt Nam
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-3">
            {PAGE_ORDER.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Button
                  key={item.path}
                  variant={isActive ? "danger" : "ghost"}
                  onClick={() => handleNavigate(item.path)}
                  size="sm"
                  className={
                    isActive
                      ? ""
                      : "hover:bg-gold hover:text-ink hover:border-ink hover:shadow-hard"
                  }
                >
                  {item.label}
                </Button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <Button
              variant="outline"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Đóng menu" : "Mở menu"}
              className="p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-charcoal/80 backdrop-grayscale"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Content - Drawer Style */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-beige border-l border-brown/20 shadow-2xl p-6 pt-24"
            >
              <div className="flex flex-col gap-4">
                <div className="border-b border-brown/20 pb-4 mb-4">
                  <h3 className="font-display text-2xl text-brown uppercase">
                    Điều hướng
                  </h3>
                </div>

                {PAGE_ORDER.map((item, index) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Button
                        variant={isActive ? "danger" : "primary"}
                        onClick={() => handleNavigate(item.path)}
                        className="w-full justify-start text-left mb-2"
                      >
                        {item.label}
                      </Button>
                    </motion.div>
                  );
                })}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
