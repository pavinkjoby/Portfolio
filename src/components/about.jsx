import profile from "../assets/profile.jpg";

const About = () => {
  return (
    <div className="about-container">
      <section id="about" className="section">

        <div className="about-card">

          {/* Corner Heading */}
          <div className="about-heading">Hiii</div>

          {/* Text */}
          <div className="about-text">
            <p>
              I’m a software developer with a strong interest in web development. I enjoy building clean, responsive, and user-focused interfaces, and I’m particularly interested in how design and functionality come together on the web. I focus on writing structured code, continuously improving my skills, and developing applications that are efficient and intuitive to use.
            </p>
          </div>

          {/* Image */}
          <img src={profile} alt="Profile" className="profile-img" />

        </div>

      </section>
    </div>
  );
};

export default About;