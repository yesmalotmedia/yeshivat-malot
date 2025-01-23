import { useState, useEffect } from 'react';

const useResponsive = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const responsive = (desktopValue, tabletValue, mobileValue) => {
    if (width <= 768) {
      return mobileValue;
    } else if (width <= 1024) {
      return tabletValue;
    } else {
      return desktopValue;
    }
  };

  return { width, responsive };
};

export default useResponsive;