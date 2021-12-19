import { createRef, useLayoutEffect, useMemo, useState } from "react";

const LazyRender: React.FC<{
  threshold?: number;
  rootMargin?: string;
}> = ({ children, threshold, rootMargin }) => {
  const ref = useMemo(() => createRef<HTMLDivElement>(), []);
  const [isVisible, setIsVisible] = useState(false);

  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }

    const options = {
      rootMargin: rootMargin ?? "0px",
      threshold: threshold ?? 1,
    };

    const isIntersecting = (entry: IntersectionObserverEntry) =>
      entry.isIntersecting || entry.intersectionRatio > 0;

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (isIntersecting(entry)) {
          setIsVisible(true);
          observer.disconnect();
        }
      });
    }, options);

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, ref]);

  return <div ref={ref}>{isVisible ? children : null}</div>;
};

export default LazyRender;
