import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>TGHZLUX</h2>
          <p>
            Discover timeless elegance and
            exceptional quality.
          </p>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/order">Order</a>
          <a href="/about">About Us</a>
        </div>

        <div className="footer-links">
          <h3>Customer Care</h3>
          <a href="/">Contact Us</a>
          <a href="/">Shipping Information</a>
          <a href="/">Returns & Exchanges</a>
        </div>

        <div className="footer-contact">
          <h3>Stay Connected</h3>
          <p>Discover our latest collections.</p>
          <a href="mailto:contact@tghzlux.com">
            contact@tghzlux.com
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} TGHZLUX.
          All rights reserved.
        </p>
        <p>Elegance in Every Detail.</p>
      </div>
    </footer>
  );
}

export default Footer;