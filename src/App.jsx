import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import bg1 from './assets/images/image 85.png';
import bg2 from './assets/images/image 87.png';
import logo from './assets/images/Logo (1).png';
import avatar1 from './assets/images/Container (4).png';
import avatar2 from './assets/images/Container (3).png';
import avatar3 from './assets/images/Container (2).png';
import thumb1 from './assets/images/Container (1).png';
import thumb2 from './assets/images/Container.png';
import star1 from './assets/images/image (1).png';
import star2 from './assets/images/image (2).png';
import star3 from './assets/images/image (3).png';
import star4 from './assets/images/image (4).png';
import star5 from './assets/images/image (5).png';
import vector from './assets/images/Vector.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-layer bg-87" style={{ backgroundImage: `url(${bg1})` }} />
      <div className="bg-layer bg-85" style={{ backgroundImage: `url(${bg2})` }} />

      <img src={star1} alt="star1" className="star-img star-1" />
      <img src={star2} alt="star2" className="star-img star-2" />
      <img src={star3} alt="star3" className="star-img star-3" />
      <img src={star4} alt="star4" className="star-img star-4" />
      <img src={star5} alt="star5" className="star-img star-5" />

      <header className="site-header">
        <img src={logo} alt="logo" className="site-logo" />
      </header>
      <button className="site-login">Login</button>
      <nav className="nav-ul">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">About Us</a></li>
        </ul>

      </nav >

      <div className="client-frame">
        <div className="client-avatars">
          <img src={avatar1} alt="a1" />
          <img src={avatar2} alt="a2" />
          <img src={avatar3} alt="a3" />
          <img src={thumb1} alt="a4" />
          <img src={thumb2} alt="a5" />
        </div>
        <div className="client-meta">
          <div className="client-stars" aria-hidden>
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
          <p className="client-text">115+ happy clients</p>
        </div>
      </div>
      <div className="hero-section">
        <h1 class="text-7xl font-bold leading-tight items-center justify-between">
          Automate <span class="text-orange-500">Intelligence</span>.
          Accelerate Growth.
        </h1>

        <p class="text-gray-300 mt-6 text-2xl">
          Our AI-powered SaaS platform empowers businesses to streamline <br />    operations, automate repetive tasks, and make smarter, data-driven<br />
          decisions-all from one intuitive dashboard.
        </p>

        <div class="mt-8 flex gap-4 items-center justify-center">
          <button class="bg-orange-500 px-25 rounded-md">
            Get Started
          </button>
          <button class="border border-gray-900 px-25 rounded-md">
            See Details
          </button>
        </div>
      </div>

      <div class="stats-wrapper">
        <div class="stats">
          <div class="stat top-60px lest-200px">
            <div class="label">Clients</div>
            <div class="value">120K+</div>
          </div>

          <div class="stat">
            <div class="label">Projects</div>
            <div class="value">150+</div>
          </div>

          <div class="stat">
            <div class="label">5-Star Reviews</div>
            <div class="value">32K+</div>
          </div>
        </div>
      </div>

      <div className="content-section px-20">
        <h2 className="text-7xl font-bold leading-tight">
          Designed for Designers<br />Powered by <span className="text-orange-500">AI</span>.
        </h2>

        <p className="text-gray-300 mt-6 text-2xl">
          Unlock the full potential of your creativity with our AI-powered design assistant.<br />
          Explore new dimensions of design
        </p>

        <img src={vector} alt="vector" className="vector-img" />
      </div>

      <section className="feature-section">
        <div className="feature-grid">
          <article className="feature-card feature-card--accent feature-card--small">
            <div className="card-body">
              <p className="card-copy">Skip the blank canvas and spark creativity <br />instantly. Our AI generates high-quality, on-<br /> brand design concepts within seconds</p>
              <h3 className="card-title">Instant Ideation</h3>
            </div>
            <button className="card-action" aria-label="open">➜</button>
          </article>

          <article className="feature-card feature-card--large-accent">
            <div className="card-body">
              <p className="card-copy">No two creators are the same, and neither are their<br /> styles. Our AI learns from your inputs, understands your <br />aesthetic preferences, and fine-tunes every design.</p>
              <h3 className="card-title">Smart Adaptability</h3>
            </div>
            <button className="card-action" aria-label="open">➜</button>
          </article>

          <article className="feature-card feature-card--large">
            <div className="card-body">
              <p className="card-copy">Design once, export anywhere. Whether you need high- <br />res graphics for print, responsive visuals for the web, <br />mobile-optimized assets,</p>
              <h3 className="card-title">Multi-Format Export</h3>
            </div>
            <button className="card-action" aria-label="open">➜</button>
          </article>

          <article className="feature-card feature-card--accent-small feature-card--small">
            <div className="card-body">
              <p className="card-copy">Say goodbye to repetitive tweaks and<br /> endless back-and-forths. With intuitive<br /> prompt-based editing</p>
              <h3 className="card-title">Seamless Revisions</h3>
            </div>
            <button className="card-action" aria-label="open">➜</button>
          </article>
        </div>
      </section>

    </>
  );
}

export default App
