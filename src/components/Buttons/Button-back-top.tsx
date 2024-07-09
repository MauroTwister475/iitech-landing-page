"use client";
import { ArrowUp } from "lucide-react";
import { ButtonPrimary } from "./primary";
import { useEffect, useState } from "react";

export function ButtonBackTop() {
  const [showTopBtn, setShowTopBtn] = useState(true);

  useEffect(() => {
    if (window) {
      window.addEventListener("click", () => {
        console.log("scroll YYYYY = " + window.scrollY);
        if (window.scrollY) {
          if (window.scrollY > 400) {
            setShowTopBtn(true);
          } else {
            setShowTopBtn(false);
          }
        }
      });
    }
  }, []);

  const goToTop = () => {
    if (window) {
      window.scroll({
        top: 0,
        left: 0,
      });
    }
  };

  // console.log("Scroll = " + window.scrollY);

  return (
    <>
      {showTopBtn && (
        <ButtonPrimary
          Icon={ArrowUp}
          className="w-10 h-10 md:w-10 md:h-10 lg:w-10 lg:h-10 px-1 py-0 absolute animate-bounce bottom-8 right-4 shadow-md transition-all"
          onClick={goToTop}
        />
      )}
    </>
  );
}
