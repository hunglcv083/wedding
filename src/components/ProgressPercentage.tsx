import { useState, useEffect } from "react";

const ProgressPercentage = () => {
  const [filledWidth, setFilledWidth] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setFilledWidth((prevFilledWidth) => {
        if (prevFilledWidth > 97) {
          clearInterval(interval);
        }
        return prevFilledWidth + 1;
      });
    }, 800);

    return () => {
      clearInterval(interval);
    };
  }, [97]);

  return <span className="md:text-xl text-[10px] font-bold text-[#409afa] text-center mb-3">{filledWidth}%</span>;
};

export default ProgressPercentage;