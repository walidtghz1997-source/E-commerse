import imgHero from "../../../assets/img/home-fashion.jpg.jfif"
import './Hero.css';
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="home-hero">
      <div className="hero-content">
        <p className="hero-subtitle">
          THE ART OF QUIET LUXURY
        </p>

        <h1>
          Elegance in
          <br />
          Every Detail.
        </h1>

        <p className="hero-description">
          Discover timeless pieces crafted for those
          who appreciate simplicity and sophistication.
        </p>

        <Link to="/products" className="hero-button">
          DISCOVER THE COLLECTION
        </Link>
      </div>

      <div className="hero-image">
        <img
          src={imgHero}
          alt="TGHZLUX fashion collection"
        />
      </div>
    </section>
  );
}

export default Hero;
