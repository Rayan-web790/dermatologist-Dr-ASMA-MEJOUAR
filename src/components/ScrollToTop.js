import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  // useLayoutEffect runs synchronously before browser paint
  useLayoutEffect(() => {
    // Force scroll to top immediately before render
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      if (document.scrollingElement) {
        document.scrollingElement.scrollTop = 0;
      }
      
      // Special handling for home page
      if (pathname === '/') {
        const anchor = document.getElementById('home-top');
        if (anchor) {
          anchor.scrollIntoView({ behavior: 'instant', block: 'start' });
        }
      }
    };
    
    scrollToTop();
  }, [pathname]);

  useEffect(() => {
    // Force scroll to top immediately when route changes
    const scrollToTop = () => {
      // Multiple methods to ensure it works on all browsers
      window.scrollTo(0, 0);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      if (document.scrollingElement) {
        document.scrollingElement.scrollTop = 0;
      }
      
      // Special handling for home page
      if (pathname === '/') {
        const anchor = document.getElementById('home-top');
        if (anchor) {
          anchor.scrollIntoView({ behavior: 'instant', block: 'start' });
        }
      }
    };
    
    // Immediate
    scrollToTop();
    
    // Use requestAnimationFrame
    requestAnimationFrame(() => {
      scrollToTop();
    });
    
    // Additional attempts after render
    const timer1 = setTimeout(scrollToTop, 0);
    const timer2 = setTimeout(scrollToTop, 10);
    const timer3 = setTimeout(scrollToTop, 50);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;

