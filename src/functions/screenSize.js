import { useState, useEffect } from "react";

const screenSize = () => {
  const [isSmall, setIsSmall] = useState(window.innerWidth < 600);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const issmall = window.innerWidth < 600;
        if (issmall !== isSmall) setIsSmall(issmall);
      },
      false
    );
  }, [isSmall]);
  return isSmall;
};

export default screenSize;
