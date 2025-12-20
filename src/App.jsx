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

      {/* five small star/dust overlays as positioned images with borders */}
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



    </>
  );
}

export default App
