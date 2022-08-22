import React, { useState, useRef, useEffect } from 'react';

interface RootElement {
  element: HTMLElement;
  id: string;
}

interface ObserveOptions {
  rootElement?: RootElement;
  rootMargin?: string;
  threshold?: number | number[];
}

function InViewObserver(props: {
  children: React.ReactNode;
  className: String;
  transitionClass: String;
}) {
  const { children, className, transitionClass } = props;

  const [isVisible, setIsVisible] = useState(false);
  const [hasSeen, setHasSeen] = useState(false);

  const elementRef = useRef(null);

  // Callback function verifitying when viewpoint is visible
  const crossedViewpoint = (entries: any[]) => {
    const [entry] = entries;

    // If intersects viewport, set element visible to true
    if (entry.isIntersecting && !hasSeen) {
      setIsVisible(true);

      // Object has been seen
      setHasSeen(true);
    }
  };

  // Observer options for viewport intersecting
  const options: ObserveOptions = {
    // Element to detect visibility
    rootElement: null,

    // Margin around root
    rootMargin: '0px',

    // Percentage of target that detects visibility
    threshold: 0.25,
  };

  // Observe only if element is within viewport and hasn't been seen
  useEffect(() => {
    if (!hasSeen) {
      const observer = new IntersectionObserver(crossedViewpoint, options);

      if (elementRef.current) observer.observe(elementRef.current);

      return () => {
        if (elementRef.current) observer.unobserve(elementRef.current);
      };
    }
  }, [hasSeen]);

  return (
    <div
      ref={elementRef}
      className={`${className} ${isVisible ? transitionClass : ''}`}
    >
      {children}
    </div>
  );
}

export default InViewObserver;
