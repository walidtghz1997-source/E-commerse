
import AboutHero from './components/AboutHero';
import OurStory from './components/OurStory';
import OurValues from './components/OurValues';

import './About.css';

function AboutPage() {
  return (
    <main className="about-page">
      <AboutHero />
      <OurStory />
      <OurValues />
    </main>
  );
}

export default AboutPage;
