
import { Link } from 'react-router-dom';
import './Error.css';

function ErrorPage() {
  return (
    <main className="error-page">
      <div className="error-content">
        <p className="error-brand">TGHZLUX</p>

        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p className="error-message">
          Sorry, the page you are looking for does not exist
          or may have been moved.
        </p>

        <Link to="/" className="error-home-button">
          Back to Home
        </Link>

        <Link to="/products" className="error-products-link">
          Explore Our Collection
        </Link>
      </div>
    </main>
  );
}

export default ErrorPage;
