import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered reveal animations.
 * Returns a ref to attach to the element and whether it's visible.
 * 
 * @param {Object} options
 * @param {number} options.threshold - Intersection threshold (0-1)
 * @param {string} options.rootMargin - Root margin for earlier/later triggering
 * @param {boolean} options.once - If true, only triggers once
 */
export function useScrollReveal({ threshold = 0.15, rootMargin = '0px 0px -40px 0px', once = true } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, isVisible];
}

/**
 * Returns staggered delay style for items in a list.
 * @param {number} index - Item index
 * @param {number} baseDelay - Base delay in ms
 */
export function staggerDelay(index, baseDelay = 100) {
  return { transitionDelay: `${index * baseDelay}ms` };
}
