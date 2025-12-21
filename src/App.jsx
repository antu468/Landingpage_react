import { useState } from 'react'
import './App.css'
import bg1 from './assets/images/image 85.png'
import bg2 from './assets/images/image 87.png'
import logo from './assets/images/Logo (1).png'
import avatar1 from './assets/images/Container (4).png'
import avatar2 from './assets/images/Container (3).png'
import avatar3 from './assets/images/Container (2).png'
import thumb1 from './assets/images/Container (1).png'
import thumb2 from './assets/images/Container.png'
import star1 from './assets/images/image (1).png'
import star2 from './assets/images/image (2).png'
import star3 from './assets/images/image (3).png'
import star4 from './assets/images/image (4).png'
import star5 from './assets/images/image (5).png'
import vector from './assets/images/Vector.png'
import featureImg1 from './assets/images/3 (1).png'
import featureImg2 from './assets/images/2 (1).png'
import featureImg3 from './assets/images/1 (1).png'
import box1 from './assets/images/3.png'
import box2 from './assets/images/2.png'
import box3 from './assets/images/1.png'
import featureImg4 from './assets/images/3 (2).png'
import featureImg5 from './assets/images/2 (2).png'
import featureImg6 from './assets/images/1 (2).png'
import box4 from './assets/images/3 (3).png'
import box5 from './assets/images/2 (3).png'
import box6 from './assets/images/Mask group.png'

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
      </nav>

      <div className="client-frame">
        <div className="client-avatars">
          <img src={avatar1} alt="a1" />
          <img src={avatar2} alt="a2" />
          <img src={avatar3} alt="a3" />
          <img src={thumb1} alt="a4" />
          <img src={thumb2} alt="a5" />
        </div>
        <div className="client-meta">
          <div className="client-stars" aria-hidden="true">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
          <p className="client-text">115+ happy clients</p>
        </div>
      </div>

      <div className="hero-section">
        <h1 className="text-7xl font-bold leading-tight items-center justify-between">
          Automate <span className="text-orange-500">Intelligence</span>.
          Accelerate Growth.
        </h1>

        <p className="text-gray-300 mt-6 text-2xl">
          Our AI-powered SaaS platform empowers businesses to streamline <br />
          operations, automate repetitive tasks, and make smarter, data-driven<br />
          decisions—all from one intuitive dashboard.
        </p>

        <div className="mt-8 flex gap-4 items-center justify-center">
          <button className="bg-orange-500 px-25 rounded-md">Get Started</button>
          <button className="border border-gray-900 px-25 rounded-md">See Details</button>
        </div>
      </div>

      <div className="stats-wrapper">
        <div className="stats">
          <div className="stat top-60px lest-200px">
            <div className="label">Clients</div>
            <div className="value">120K+</div>
          </div>

          <div className="stat">
            <div className="label">Projects</div>
            <div className="value">150+</div>
          </div>

          <div className="stat">
            <div className="label">5-Star Reviews</div>
            <div className="value">32K+</div>
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
              <p className="card-copy">
                Skip the blank canvas and spark creativity <br />
                instantly. Our AI generates high-quality, on-<br />
                brand design concepts within seconds
              </p>
              <h3 className="card-title">Instant Ideation</h3>
            </div>
            <button className="card-action" aria-label="open">➜</button>
          </article>

          <article className="feature-card feature-card--large-accent">
            <div className="card-body">
              <p className="card-copy">
                No two creators are the same, and neither are their<br />
                styles. Our AI learns from your inputs, understands your<br />
                aesthetic preferences, and fine-tunes every design.
              </p>
              <h3 className="card-title">Smart Adaptability</h3>
            </div>
            <button className="card-action" aria-label="open">➜</button>
          </article>

          <article className="feature-card feature-card--large">
            <div className="card-body">
              <p className="card-copy">
                Design once, export anywhere. Whether you need high-<br />
                res graphics for print, responsive visuals for the web,<br />
                mobile-optimized assets,
              </p>
              <h3 className="card-title">Multi-Format Export</h3>
            </div>
            <button className="card-action" aria-label="open">➜</button>
          </article>

          <article className="feature-card feature-card--accent-small feature-card--small">
            <div className="card-body">
              <p className="card-copy">
                Say goodbye to repetitive tweaks and<br />
                endless back-and-forths. With intuitive<br />
                prompt-based editing
              </p>
              <h3 className="card-title">Seamless Revisions</h3>
            </div>
            <button className="card-action" aria-label="open">➜</button>
          </article>
        </div>
      </section>


      <section className="features-section1 px-6">
        <div className="mx-auto hero-container relative">
          <div className="lead-year">2025</div>
          <p className="lead">
            Whether you're designing for personal projects, creative teams, or large-scale campaigns, our AI-powered platform is built to bring your ideas to life—quickly, beautifully, and intelligently. And the results? The numbers speak for themselves:
          </p>
        </div>
      </section>

      <section className="numbers-section px-6">
        <div className="mx-auto numbers-container">
          <div className="numbers-row">
            <div className="numbers-col">
              <div className="num">2014</div>
              <div className="num-label">Year of establishment</div>
              <div className="num-sub">More than 10 years in the field</div>

              <div className="line-wrap">
                <div className="avatars-inline">
                  <img src={featureImg1} alt="a1" />
                  <img src={featureImg2} alt="a2" />
                  <img src={featureImg3} alt="a3" />
                </div>
                <div className="h-line" />
                <div className="decoration"><span className="chev">&gt;&lt;</span></div>
              </div>
            </div>

            <div className="numbers-col">
              <div className="num">304</div>
              <div className="num-label">Projects are launched</div>
              <div className="num-sub">A lot of projects are done</div>

              <div className="line-wrap">
                <div className="img-box overlap">
                  <img src={box1} alt="thumb1" />
                  <img src={box2} alt="thumb2" />
                  <img src={box3} alt="thumb3" />
                </div>
                <div className="h-line" />
                <div className="decoration"><span className="chev">&gt;&lt;</span></div>
              </div>
            </div>

            <div className="numbers-col">
              <div className="num">189</div>
              <div className="num-label">Clients are satisfied</div>
              <div className="num-sub">These people love us</div>

              <div className="line-wrap">
                <div className="avatars-inline">
                  <img src={featureImg4} alt="c1" />
                  <img src={featureImg5} alt="c2" />
                  <img src={featureImg6} alt="c3" />
                </div>
                <div className="h-line" />
                <div className="decoration"><span className="chev">&gt;&lt;</span></div>
              </div>
            </div>

            <div className="numbers-col">
              <div className="num">12</div>
              <div className="num-label">Projects in work</div>
              <div className="num-sub">What we do right now</div>

              <div className="line-wrap">
                <div className="img-box overlap">
                  <img src={box4} alt="thumb2" />
                  <img src={box5} alt="thumb2" />
                  <img src={box6} alt="thumb2" />
                </div>
                <div className="h-line" />
                <div className="decoration"><span className="chev">&gt;&lt;</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="mx-auto hero-container">
          <div className="cta-wrap">
            <button className="btn-primary">Get Started →</button>
            <div className="cta-note">Slots are available <span style={{ width: 8, height: 8, background: '#22c55e', borderRadius: '50%', display: 'inline-block', marginLeft: 6 }} /></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
