import "./about.css";
import about__image from "../../images/author.png";

function About() {
  return (
    <div className="about">
      <img className="about__image" src={about__image} alt="author" />
      <div className="about__text">
        <h2 className="about__title">About the author</h2>
        <p className="about__description">
          Hey there, I'm Santiago. I'm a motivated and passionate software
          engineer with a background in eCommerce and Project Management. I have
          a bachelor's degree in Education.
        </p>
        <p className="about__description">
          I’m a curious person, I love to code and I like to experiment with new
          technologies. Now coding is my passion and my new professional career
          focus.
        </p>
      </div>
    </div>
  );
}

export default About;
