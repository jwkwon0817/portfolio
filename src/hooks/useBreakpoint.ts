'use client';

import { useEffect, useState } from 'react';

export const useBreakpoint = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileDesktop, setIsMobileDesktop] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth < 900) {
        setIsMobile(true);
        setIsMobileDesktop(false);
        setIsDesktop(false);
      } else if (window.innerWidth < 1500) {
        setIsMobile(false);
        setIsMobileDesktop(true);
        setIsDesktop(false);
      } else {
        setIsMobile(false);
        setIsMobileDesktop(false);
        setIsDesktop(true);
      }
    };

    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return { isMobile, isMobileDesktop, isDesktop };
};
