import { useState } from 'react'
import './App.css'
import Navbar from './component/navbar'
import Footer from './pages/footer'
import Intro from './pages/intro'
import heroImage from './assets/hero.png'
import Card from './component/Card'
import Second from './pages/second.jsx'
import Third from './pages/Third.jsx'
import Fourth from './pages/Fourth.jsx'
import Fifth from './pages/Fifth.jsx'


function App() {
  return (
    <div>
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
