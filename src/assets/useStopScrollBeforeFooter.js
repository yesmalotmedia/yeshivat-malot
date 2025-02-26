import { useEffect } from "react";

const useStopScrollBeforeBottom = (offsetFromBottom = 750) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // מוודא שלא ניתן לגלול מעבר לנקודה מסוימת מהתחתית
      if (scrollY + windowHeight >= documentHeight - offsetFromBottom) {
        window.scrollTo(0, documentHeight - windowHeight - offsetFromBottom);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offsetFromBottom]);
};

export default useStopScrollBeforeBottom;
