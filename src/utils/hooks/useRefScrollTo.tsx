import { useEffect, useRef } from 'react';
export const useRefScrollTo = () => {
  const scrollToTop = useRef<HTMLInputElement>(null);
  useEffect(() => {
    scrollToTop.current && scrollToTop.current.scrollIntoView();
  });
  return scrollToTop;
};
