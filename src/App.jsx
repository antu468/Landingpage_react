import { useState } from 'react'
import './App.css'
import bg1 from './assets/images/image 85.png'
import bg2 from './assets/images/image 87.png'
import bg3 from './assets/images/image 88.png'
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
import rec1 from './assets/images/Rounded rectangle (1).png'
import rec2 from './assets/images/Rounded rectangle.png'
import rec3 from './assets/images/Circle.png'
import logo1 from './assets/images/facebook.png'
import logo2 from './assets/images/github.png'
import logo3 from './assets/images/twitter.png'
import logo4 from './assets/images/google.png'

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

      <div className="content-a">
        <h1 className="text-7xl font-bold leading-tight items-center justify-between">
          Choose the Plan <br />That’s Right for You
        </h1>
        <p className=" text-gray-300 mt-6 text-xl">
          Giving you access to essential features and over 1,000 creative tools. Upgrade to the<br /> Pro Plan to unlock powerful AI capabilities, cloud syncing, and a whole new level of<br /> creative freedom.
        </p>
      </div>
      <div className="toggle-wrapper">
        <div class="toggle-btn active">Monthly</div>
        <div class="toggle-btn">Yearly</div>
      </div>
      <div className="bg-layer--88" style={{ backgroundImage: `url(${bg3})` }} />

      <section class="pricing-section">
        <div class="pricing-wrapper">
          <div class="pricing-card side-card">
            <h3>Free</h3>
            <p class="desc">Everything you need to supercharge your productivity.</p>

            <div class="price">$0 <span>/ month</span></div>
            <h4>What's included</h4>
            <ul>
              <li>20 design generations/month</li>
              <li>Low-res downloads</li>
              <li>Basic style presets</li>
              <li>Limited customization options</li>
            </ul>

            <button class="btn">Subscribe →</button>
          </div>

          <div class="pricing-card pro-card">
            <h3 class="pro-title">Pro</h3>
            <p class="desc">Unlock a new level of your personal productivity.</p>

            <div class="price">
              $17 <span>/ month</span>
              <span class="badge">-20%</span>
            </div>
            <h4>What's included</h4>
            <ul>
              <li>Everything in Free</li>
              <li>Enigma AI</li>
              <li>Unlimited design generations</li>
              <li>Custom Themes</li>
              <li>High-resolution exports</li>
              <li>Custom Extensions</li>
              <li>Developer Tools</li>
            </ul>

            <button class="btn">Subscribe →</button>
          </div>

          <div class="pricing-card side-card">
            <h3>Team</h3>
            <p class="desc">Everything you need to supercharge your productivity.</p>

            <div class="price">
              $37 <span>/ month</span>
              <span class="badge">-20%</span>
            </div>
            <h4>What's included</h4>
            <ul>
              <li>Everything in Free</li>
              <li>Unlimited Shared Commands</li>
              <li>Unlimited Shared Quicklinks</li>
              <li>Priority support</li>
            </ul>
            <button class="btn">Subscribe →</button>
          </div>
        </div>
      </section>
      <div className="frequently-asked">
        <h1 className="text-7xl font-bold leading-tight items-center justify-between">
          Frequently Asked <br />Questions
        </h1>
        <p className=" text-gray-300 mt-6 text-xl">
          Got questions? We've got answers. Find everything you need to know about using our<br /> platform, plans, and features.
        </p>
      </div>
      <section className="faq-section px-4">
        <div class="faq-deco lt" aria-hidden="true">
          <img src={rec1} alt="decoration" />
        </div>
        <div class="faq-deco lb" aria-hidden="true">
          <img src={rec2} alt="decoration" />
        </div>
        <div class="faq-deco rm" aria-hidden="true">
          <img src={rec3} alt="decoration" />
        </div>
        <div className="mx-auto faq-container">
          <div className="faq-list">
            <details open className="faq-item">
              <summary className="faq-question">What is this platform used for?<span className="faq-arrow">▾</span></summary>
              <div className="faq-answer">
                <p>It's an AI-powered design assistant that helps you generate, customize, and export creative assets in seconds—whether for personal projects, brand work, or commercial use.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-question">What happens if I hit my free generation limit?<span className="faq-arrow">▾</span></summary>
            </details>

            <details className="faq-item">
              <summary className="faq-question">Do I need design experience to use it?<span className="faq-arrow">▾</span></summary>
            </details>

            <details className="faq-item">
              <summary className="faq-question">Can I collaborate with my team?<span className="faq-arrow">▾</span></summary>
            </details>

            <details className="faq-item">
              <summary className="faq-question">Is it really free to use?<span className="faq-arrow">▾</span></summary>
            </details>
          </div>
        </div>
      </section>

      <section class="curved-cta">
        <div class="bg"></div>
        <div class="grid"></div>
        <div class="container">
          <h2>Ready to Design Smarter?</h2>
          <p>Whether you're a freelancer, a team, or a growing agency—our tools adapt to your workflow. Design faster. Deliver better.</p>
          <a class="cta-btn" href="#">Get Started →</a>
        </div>
      </section>

      <footer className="site-footer-box" style={{ color: '#9ca3af', padding: '0' }}>
        <div className="mx-auto hero-container" style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', justifyContent: 'space-between', maxWidth: '1100px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
          <div style={{ flex: '1', maxWidth: '360px' }}>
            <h1 style={{ height: '36px', marginBottom: '18px', fontWeight: 'bold', color: '#fff', fontSize: '32px' }}>About Us</h1>
            <p style={{ color: '#cfcfcf', lineHeight: 1.6 }}>We're a team of designers, engineers, and innovators building AI tools that empower anyone to turn imagination into stunning visuals—faster, smarter, and effortlessly.</p>
          </div>

          <div style={{ flex: '0 0 160px' }}>
            <h4 style={{ color: '#ff6a00', marginBottom: '12px' }}>Useful Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#bfc7cb' }}>
              <li style={{ margin: '8px 0' }}>About</li>
              <li style={{ margin: '8px 0' }}>Services</li>
              <li style={{ margin: '8px 0' }}>Team</li>
              <li style={{ margin: '8px 0' }}>Prices</li>
            </ul>
          </div>

          <div style={{ flex: '0 0 160px' }}>
            <h4 style={{ color: '#ff6a00', marginBottom: '12px' }}>Help</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#bfc7cb' }}>
              <li style={{ margin: '8px 0' }}>Customer Support</li>
              <li style={{ margin: '8px 0' }}>Terms &amp; Conditions</li>
              <li style={{ margin: '8px 0' }}>Privacy Policy</li>
              <li style={{ margin: '8px 0' }}>Contact Us</li>
            </ul>
          </div>

          <div style={{ flex: '0 0 220px', textAlign: 'right' }}>
            <h4 style={{ color: '#ff6a00', marginBottom: '12px' }}>Connect With Us</h4>
            <div style={{ color: '#bfc7cb', fontSize: '14px', lineHeight: 1.6 }}>27 Division St, New York, NY 10002, USA<br />+123 324 2653<br />username@mail.com</div>

          </div>
        </div>

        <div style={{ maxWidth: '1100px', margin: '12px auto 0', borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ color: '#8b9396' }}>© {new Date().getFullYear()} Your Company. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', alignItems: 'center' }}>
            <img src={logo1} alt="fb" style={{ width: '36px', height: '36px', borderRadius: '999px', padding: '6px', border: '1px solid rgba(255,106,0,0.12)' }} />
            <img src={logo2} alt="pt" style={{ width: '36px', height: '36px', borderRadius: '999px', padding: '6px', border: '1px solid rgba(255,106,0,0.12)' }} />
            <img src={logo3} alt="tw" style={{ width: '36px', height: '36px', borderRadius: '999px', padding: '6px', border: '1px solid rgba(255,106,0,0.12)' }} />
            <img src={logo4} alt="g" style={{ width: '36px', height: '36px', borderRadius: '999px', padding: '6px', border: '1px solid rgba(255,106,0,0.12)' }} />
          </div>
        </div>
      </footer>

    </>
  )
}

export default App
