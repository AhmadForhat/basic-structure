import { useEffect, useRef } from 'react';

const useLayout = () => {
  const widthRef = useRef(window.innerWidth);
  const heightRef = useRef(window.innerHeight);
  const xOffsetRef = useRef(window.pageXOffset);
  const yOffsetRef = useRef(window.pageYOffset);

  useEffect(() => {
    const handleResize = () => {
      widthRef.current = window.innerWidth;
      heightRef.current = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScrollPosition = () => {
      xOffsetRef.current = window.pageXOffset;
      yOffsetRef.current = window.pageYOffset;
    };

    window.addEventListener('scroll', handleScrollPosition);

    return () => window.removeEventListener('scroll', handleScrollPosition);
  }, []);

  const mobileWidth = 400;
  const desktopWidth = 1200;
  const isSmallMobile = widthRef.current < mobileWidth;
  const isDektop = widthRef.current >= desktopWidth;
  const isMobile = !isSmallMobile && !isDektop;

  return {
    widthRef,
    heightRef,
    xOffsetRef,
    yOffsetRef,
    isSmallMobile,
    isMobile,
    isDektop
  };
};

export default useLayout;
