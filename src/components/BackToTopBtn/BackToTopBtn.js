import React, { useState, useEffect } from "react";
import { UpToTop } from "@carbon/react/icons";
import { button } from "./BackToTopBtn.module.scss";

const BackToTopBtn = () => {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setHidden(window.scrollY < 300);
    };

    window.addEventListener("scroll", handleScroll);

    // Run once in case page is already scrolled when component mounts
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (hidden) return null; // Hide button when `hidden` is true

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      className={button}
      type="button"
      aria-label="Back to Top"
    >
      <UpToTop size={20} />
    </button>
  );
};

export default BackToTopBtn;
