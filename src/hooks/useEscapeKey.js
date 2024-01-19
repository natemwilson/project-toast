import React from "react";

export const useEscapeKey = (fn) => {
  React.useEffect(() => {
    const handleEscape = document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        fn();
      }
    });
    return () => document.removeEventListener("keydown", handleEscape);
  }, [fn]);
};
