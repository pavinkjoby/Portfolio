import { useEffect, useState } from "react";

const Hero = () => {
  const fullText = "Pavin K Joby";
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;

    const typing = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;

      if (i === fullText.length) clearInterval(typing);
    }, 120);

    return () => clearInterval(typing);
  }, []);

  return (
    <section className="hero">
      <h1 className="hero-name">{text}</h1>

      <h2>Software Developer</h2>

      <p>
        <p>
  Building clean and responsive web applications with a focus on user experience and improving every day.
</p>
      </p>

      <a href="#projects" className="btn">View My Works</a>
    </section>
  );
};

export default Hero;