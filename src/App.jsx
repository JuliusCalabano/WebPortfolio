import { useState } from 'react'
import './App.css'
import Navbar from './component/navbar'
import Footer from './pages/footer'
import Intro from './pages/intro'
import Lightfall from './component/background'
import heroImage from './assets/hero.png'
import Card from './component/Card'
import Second from './pages/second.jsx'
import Third from './pages/Third.jsx'
import Fourth from './pages/Fourth.jsx'
import Fifth from './pages/Fifth.jsx'


function App() {
  return (
    <div>
      <div style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100vh",
        zIndex: -1,
        overflow: "hidden",
      }}>
        <Lightfall
          colors={['#A6C8FF', '#5227FF', '#FF9FFC']}
          backgroundColor="#0A29FF"
          speed={0.5}
          streakCount={2}
          streakWidth={1}
          streakLength={1}
          glow={1}
          density={0.6}
          twinkle={1}
          zoom={3}
          backgroundGlow={0.5}
          opacity={1}
          mouseInteraction
          mouseStrength={0.5}
          mouseRadius={1}
          color1="#A6C8FF"
          color2="#5227FF"
          color3="#FF9FFC"
        />
      </div>
      <div className="relative inset-0 z-10">
        <Navbar />
        <Intro />
        <Second />
        <Third />
        <Fourth />
        <Fifth />
        <Footer />
      </div>

    </div>
  );
}

export default App;
