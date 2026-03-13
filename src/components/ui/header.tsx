import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
    <div className="fixed bottom-0 w-full z-40 flex justify-center">
  <div className="flex items-center gap-2 bg-white text-gray-900 text-sm px-4 py-1 rounded-full shadow-md mb-2">
    <i className="fas fa-briefcase text-gray-700" style={{color:"green"}}></i>
    <span>Available for new projects</span>
  </div>
</div>
    <header className="w-full fixed  top-0 left-0 border-b border-[#e0e0e0] z-50 
        bg-white/30 backdrop-blur-md">
  <div className="w-full flex items-center justify-between py-4 px-6">
    <div className="text-2xl font-bold text-[#1a1a1a]">Angoty</div>

    {/* Desktop navigation */}
    <div className="hidden md:flex items-center space-x-6">
      <nav className="flex space-x-6">
        <a href="#home" className="text-[#1a1a1a] hover:text-[#555555]">Home</a>
        <a href="#about" className="text-[#1a1a1a] hover:text-[#555555]">About</a>
        <a href="#projects" className="text-[#1a1a1a] hover:text-[#555555]">Projects</a>
        <a href="#skills" className="text-[#1a1a1a] hover:text-[#555555]">Skills</a>
        <a href="#services" className="text-[#1a1a1a] hover:text-[#555555]">Services</a>
        <a href="#contact" className="text-[#1a1a1a] hover:text-[#555555]">Contact</a>
      </nav>
      <Button className="bg-[#000000] text-[#ffffff] hover:bg-[#333333]">CV</Button>
    </div>

    {/* Mobile hamburger */}
    <div className="md:hidden">
      <button onClick={() => setOpen(!open)} className="text-[#1a1a1a] focus:outline-none">
        ☰
      </button>
    </div>
  </div>

  {/* Mobile menu */}
  {open && (
    <div className="md:hidden bg-white/70 backdrop-blur-md border-t border-[#e0e0e0] px-6 py-4 space-y-4 text-center">
  <a href="#home" className="flex items-center justify-center gap-2 text-[#1a1a1a] hover:text-[#555555]">
    <i className="fas fa-home"></i> <span>Home</span>
  </a>
  <a href="#about" className="flex items-center justify-center gap-2 text-[#1a1a1a] hover:text-[#555555]">
    <i className="fas fa-user"></i> <span>About</span>
  </a>
  <a href="#projects" className="flex items-center justify-center gap-2 text-[#1a1a1a] hover:text-[#555555]">
    <i className="fas fa-folder-open"></i> <span>Projects</span>
  </a>
  <a href="#skills" className="flex items-center justify-center gap-2 text-[#1a1a1a] hover:text-[#555555]">
    <i className="fas fa-bolt"></i> <span>Skills</span>
  </a>
  <a href="#services" className="flex items-center justify-center gap-2 text-[#1a1a1a] hover:text-[#555555]">
    <i className="fas fa-briefcase"></i> <span>Services</span>
  </a>
  <a href="#contact" className="flex items-center justify-center gap-2 text-[#1a1a1a] hover:text-[#555555]">
    <i className="fas fa-envelope"></i> <span>Contact</span>
  </a>
  <Button className="w-full bg-[#000000] text-[#ffffff] hover:bg-[#333333]">CV</Button>

  
</div>


  )}
</header>

{/* Indicateur Scroll Down */}
<div className="fixed bottom-12 w-full flex justify-center z-40">
  <div className="flex flex-col items-center text-gray-700 animate-bounce">
    <span className="text-sm">Scroll down</span>
    <i className="fas fa-chevron-down text-lg"></i>
  </div>
</div>


      
  </>
  )
}
