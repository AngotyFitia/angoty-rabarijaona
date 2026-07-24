import './App.css'
import Header from "@/components/ui/header"
import Home from "@/components/ui/home"
import About from "@/components/ui/about"
import Project from './components/ui/projects'
import Skills from './components/ui/skills'
import Services from './components/ui/services'
import Contact from './components/ui/contact'
import Footer from './components/ui/footer'
import { Toaster } from "react-hot-toast"
import { LanguageProvider } from "@/context/LanguageContext";

function App() {

  return (
    <LanguageProvider>

    
    <div className="min-h-screen">
      <Header />
      <Toaster position="top-right" />
        <Home />
        <About />
        <Project />
        <Skills />
        <Services />
        <Contact />
        <Footer />
    </div>
    </LanguageProvider>
    
  )
}

export default App
