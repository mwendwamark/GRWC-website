import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for triggering animations when an element enters the viewport
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Percentage of element that must be visible to trigger (0-1)
 * @param {string} options.rootMargin - Margin around the root element
 * @param {string} options.animation - The animate.css animation to apply (without the animate__ prefix)
 * @param {boolean} options.once - Whether to trigger the animation only once (true) or every time the element enters the viewport (false)
 * @returns {Object} - The ref to attach to your element and a boolean indicating if animation should be active
 */
export function useScrollAnimation({
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  animation = 'fadeInUp',
  once = true
} = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          // If once is true, stop observing after the element becomes visible
          if (once && elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        } else if (!once) {
          // If once is false, reset visibility when element leaves viewport
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, rootMargin, once]);

  // Construct the animation classes
  const animationClasses = isVisible 
    ? `animate__animated animate__${animation}` 
    : '';

  return { elementRef, animationClasses };
}
