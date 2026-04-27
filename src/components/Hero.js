import React from "react";
import { TypeAnimation } from "react-type-animation";
import "../styles/global.css";

const Hero = () => {
  return (
    <section className="hero">
      <h2>Hi, I'm Moe Kyaw Aung</h2>
      <TypeAnimation
        sequence={[
          'Android Developer', 2000,
          'Flutter & Web Enthusiast', 2000
        ]}
        wrapper="h3"
        repeat={Infinity}
      />
      <a href="#projects" className="btn">View Projects</a>
    </section>
  );
};

export default Hero;
