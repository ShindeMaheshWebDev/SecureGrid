import React, { useEffect, useRef } from "react";
import "./Hero.css";
import heroImg from "../../assets/images/img1.jpg";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("animate");
          void entry.target.offsetWidth; // reflow
          entry.target.classList.add("animate");
        }
      },
      { threshold: 0.35 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* <div className="hero-content">
        <h1>Secure Grid</h1>
        <p>Powering the future with smart security</p>
      </div> */}
    </section>
  );
};

export default Hero;
