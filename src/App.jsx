import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import bg1 from './assets/images/image 85.png';
import bg2 from './assets/images/image 87.png';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-layer bg-87" style={{ backgroundImage: `url(${bg1})` }} />
      <div className="bg-layer bg-85" style={{ backgroundImage: `url(${bg2})` }} />

      

    </>
  );
}

export default App
