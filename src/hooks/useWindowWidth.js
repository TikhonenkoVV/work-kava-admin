import { useEffect, useState } from 'react';

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWindowWidth(window.innerWidth);
    document.addEventListener('resize', onResize);
    return () => document.removeEventListener('resize', onResize);
  }, []);
  return { windowWidth };
};
