"use client";

import { useEffect } from "react";

export default function PageTop() {
  useEffect(() => {
    const pageTopTrigger = document.getElementById("pagetop");
    const handleScroll = () => {
      const scrollTarget = window.innerHeight;
      const scrollTop = window.scrollY;

      if (pageTopTrigger) {
        if (scrollTop > scrollTarget) {
          pageTopTrigger.classList.add("is-active");
        } else {
          pageTopTrigger.classList.remove("is-active");
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("DOMContentLoaded", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("DOMContentLoaded", handleScroll);
    };
  }, []);

  const handlePageTopClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <p id="pagetop" className="pagetop" onClick={handlePageTopClick}>
      <img src="/images/ico_pagetop.svg" alt="TOP" />
    </p>
  );
}
