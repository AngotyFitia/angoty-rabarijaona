import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"
import Header from "@/components/ui/header"
import Home from "@/components/ui/home"
import About from "@/components/ui/about"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen">
      <Header />
        <Home />
        <About />
        {/* <section id="about" className="p-10">À propos…</section>
        <section id="projects" className="p-10">Mes projets…</section>
        <section id="contact" className="p-10">Contact…</section> */}
    </div>
    
  )
}

export default App
