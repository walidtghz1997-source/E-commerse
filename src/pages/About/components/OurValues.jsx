
import './OurValues.css';

function OurValues() {
  return (
    <section className="our-values">
      <div className="values-heading">
        <p>WHAT WE BELIEVE IN</p>
        <h2>Our Values</h2>
      </div>

      <div className="values-grid">
        <article className="value-card">
          <span>01</span>
          <h3>Timelessness</h3>
          <p>
            Designs that transcend trends and seasons.
          </p>
        </article>

        <article className="value-card">
          <span>02</span>
          <h3>Quality</h3>
          <p>
            Thoughtful details and a commitment to excellence.
          </p>
        </article>

        <article className="value-card">
          <span>03</span>
          <h3>Simplicity</h3>
          <p>
            Beauty expressed through restraint and balance.
          </p>
        </article>
      </div>
    </section>
  );
}

export default OurValues;
