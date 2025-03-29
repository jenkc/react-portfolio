import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    // callback(arrow) function passed in returns a list with first element being an entry and check if it is "intersecting"
    const observer = new IntersectionObserver(
      ([entry]) => {
        // if entry is intersecting the "observer", then we want to reveal the element
        if (entry.isIntersecting) {
          ref.current.classList.add("visible");
        }
      },
      // define the threshold of intersection and rootMargin
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // disconnect() stops observing the target element (ref)
    return () => observer.disconnect();
  });

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
};
