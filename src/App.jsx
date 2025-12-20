import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import bg1 from './assets/images/image 85.png';
import bg2 from './assets/images/image 87.png';
import logo from './assets/images/Logo (1).png';
import star1 from './assets/images/image (1).png';
import star2 from './assets/images/image (2).png';
import star3 from './assets/images/image (3).png';
import star4 from './assets/images/image (4).png';
import star5 from './assets/images/image (5).png';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-layer bg-87" style={{ backgroundImage: `url(${bg1})` }} />
      <div className="bg-layer bg-85" style={{ backgroundImage: `url(${bg2})` }} />
        {/* five small star/dust overlays */}
        <div className="star-layer star-1" style={{ backgroundImage: `url(${star1})` }} />
        <div className="star-layer star-2" style={{ backgroundImage: `url(${star2})` }} />
        <div className="star-layer star-3" style={{ backgroundImage: `url(${star3})` }} />
        <div className="star-layer star-4" style={{ backgroundImage: `url(${star4})` }} />
        <div className="star-layer star-5" style={{ backgroundImage: `url(${star5})` }} />
      
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



    </>
  );
}

export default App
