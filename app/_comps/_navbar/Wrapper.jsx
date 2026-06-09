"use client";
import React, { useEffect, useState } from "react";

function Wrapper({ children }) {
  const [scrolltop, setscrolltop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 50;
      if (shouldShow != scrolltop) setscrolltop(shouldShow);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolltop]);

  return (
    <div
      className={`w-full sticky top-0 flex items-center justify-center z-50 ${scrolltop ? "bg-black/10" : ""} duration-300`}
    >
      {children}
    </div>
  );
}

export default Wrapper;
