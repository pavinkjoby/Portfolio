import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = async () => {
    if (!email || !message) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("https://portfolio-nzus.onrender.com/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Message sent successfully!");
        setEmail("");
        setMessage("");
      } else {
        alert(data.error || "Failed to send message");
      }
    } catch (error) {
      alert("Server error. Please try again.");
      console.error(error);
    }
  };

  return (
    <section id="contact" className="section contact-page">
      <div className="contact-box">

        <h2>Contact Me</h2>

        <input
          type="email"
          placeholder="Your Email"
          className="contact-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          placeholder="Your Message"
          className="contact-textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button onClick={handleSend} className="contact-btn">
          Send Message
        </button>

        <p className="resume-text">
          Click here to download my resume
        </p>

        <a href="/resume.pdf" download className="resume-link">
          Download Resume
        </a>

        <div className="contact-icons">
          <a href="https://www.linkedin.com/in/pavin-k-joby-a561a7305" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>

          <a href="https://github.com/pavinkjoby" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href="mailto:pavinkjoby17@gmail.com">
            <FaEnvelope />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;