import AboutFashion from "../../../assets/img/about-fashion.jpg.jfif"
import './AboutHero.css';

function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero-content">
        <p className="about-eyebrow">
          OUR PHILOSOPHY
        </p>

        <h1>
          Luxury is not
          <br />
          about more.
          <br />
          It is about meaning.
        </h1>

        <p className="about-hero-description">
          A vision of timeless elegance, thoughtful design,
          and exceptional attention to detail.
        </p>
      </div>

      <div className="about-hero-image">
        <img
          src={AboutFashion}
          alt="TGHZLUX timeless fashion"
        />
      </div>
    </section>
  );
}

export default AboutHero;
