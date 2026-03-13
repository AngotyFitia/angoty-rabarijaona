import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("down")

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight

      // Si on est proche du bas de la page
      if (scrollTop + windowHeight >= docHeight - 10) {
        setScrollDirection("up")
      } else {
        setScrollDirection("down")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
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
      <a
  href="/public/About me.pdf" 
  download
  className="bg-[#000000] text-[#ffffff] hover:bg-[#333333] px-4 py-2 rounded-md"
>
<Button className="bg-[#000000] text-[#ffffff] hover:bg-[#333333]">CV</Button>
</a>

      
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
  <a
  href="/About me.pdf" 
  download
  className="w-full flex items-center justify-center gap-2 bg-[#000000] text-[#ffffff] hover:bg-[#333333] px-4 py-2 rounded-md"
>
  <i className="fas fa-file-download"></i>
  <span>CV</span>
</a>

</div>


  )}
</header>
<div className="fixed bottom-0 w-full z-40 flex flex-col items-center gap-2 mb-4" style={{ marginLeft: "-20px" }}>
        {/* Indicateur Scroll */}
        <div
          className={`flex flex-col items-center text-gray-700 ${
            scrollDirection === "down" ? "animate-bounce" : "animate-bounce-up"
          }`}
        >
          {scrollDirection === "down" ? (
            <>
              <span className="text-sm">Scroll down</span>
              <i className="fas fa-chevron-down text-lg"></i>
            </>
          ) : (
            <>
              <span className="text-sm">Scroll up</span>
              <i className="fas fa-chevron-up text-lg"></i>
            </>
          )}
        </div>

        {/* Bandeau disponibilité */}
        <div className="flex items-center gap-2 bg-white text-gray-900 text-sm px-4 py-1 rounded-full shadow-md">
          <i className="fas fa-briefcase text-gray-700" style={{ color: "green" }}></i>
          <span>Available for new projects</span>
        </div>
      </div>



      
  </>
  )
}
