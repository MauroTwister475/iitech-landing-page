"use client";
import { ArrowUp } from "lucide-react";
import { ButtonPrimary } from "./primary";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function ButtonBackTop() {
  const [showTopBtn, setShowTopBtn] = useState(true);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const handleScroll = useCallback(() => {
    if (!showTopBtn && window.scrollY > 400) {
      setShowTopBtn(true);
    }

    if (showTopBtn && window.scrollY <= 400) {
      setShowTopBtn(false);
    }
  }, [showTopBtn]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <AnimatePresence>
      {showTopBtn && (
        <motion.div
          initial={{ opacity: 0, right: -10 }}
          animate={{ opacity: 1, right: 16 }}
          exit={{ opacity: 0, right: -10 }}
        >
          <ButtonPrimary
            Icon={ArrowUp}
            className="w-10 h-10 md:w-10 md:h-10 lg:w-10 lg:h-10 px-1 py-0 absolute animate-bounce bottom-8 right-4 shadow-md transition-all"
            onClick={scrollToTop}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
