
import Hero from './components/Hero';
import Intro from'./components/Intro';

import './Home.css';

function Home() {
  return (
    <main className="home-page">
      <Hero />
      <Intro />
    </main>
  );
}

export default Home;
