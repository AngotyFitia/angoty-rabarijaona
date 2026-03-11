import './App.css'
import Header from "@/components/ui/header"
import Home from "@/components/ui/home"
import About from "@/components/ui/about"

function App() {

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
