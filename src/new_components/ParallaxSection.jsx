import React, { useRef } from "react";
import { gsap, ScrollTrigger } from "gsap/all";

function ParallaxSection() {
  const sectionRef = useRef(null);

  React.useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, scrollTrigger: { trigger: sectionRef.current } }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "100px",
        background: "#f7f7f7",
      }}
    >
      <div>
        <h2>About Us</h2>
        <p>
          Our designs push the boundaries of innovation and craftsmanship,
          combining 3D modeling and elegance.
        </p>
      </div>
      <img src="/images/jewelry.jpg" alt="Jewelry" style={{ width: "50%" }} />
    </div>
  );
}

export default ParallaxSection;
