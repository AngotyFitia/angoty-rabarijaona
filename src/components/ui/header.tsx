import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import toast from "react-hot-toast"
import emailjs from "emailjs-com";

export default function Header() {
  const [open, setOpen] = useState(false)
  const [, setScrollDirection] = useState<"down" | "up">("down")
  const [cvModalOpen, setCvModalOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [nom, setNom] = useState("")
  const [errorMessage, setErrorMessage] = useState("");


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight

      if (scrollTop + windowHeight >= docHeight - 10) {
        setScrollDirection("up")
      } else {
        setScrollDirection("down")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSendCv = () => {
    if (!nom || !email) {
      setErrorMessage("Veuillez remplir tous les champs.");
      return;
    }
  
    if (!isValidEmail) {
      setErrorMessage("Adresse email invalide.");
      return;
    }
  
    emailjs.send(
      "service_y6e35rp",
      "template_fenv5uw",
      { to_email: email, to_name: nom },
      "nyCuHCn8P7986n21j"
    )
    .then(() => {
      toast.success(`The CV has been sent to your inbox.`);
      setCvModalOpen(false);
      setEmail("");
      setNom("");
      setErrorMessage(""); // on efface l'erreur si succès
    })
    .catch((error) => {
      console.error("Erreur:", error);
      setErrorMessage("Échec de l'envoi du CV. Vérifiez votre adresse email.");
    });
  };
  
  const isValidEmail = /^[^\s@]+@[^\s@]+\.(fr|com)$/.test(email) && 
                     (email.endsWith("@gmail.com") || email.endsWith(".fr"));
  const canSend = nom.trim() !== "" && isValidEmail;


  return (
    <>
      <header className="w-full fixed top-0 left-0 border-b border-[#e0e0e0] z-50 bg-white/30 backdrop-blur-md">
        <div className="w-full flex items-center justify-between py-4 px-6">
          <div className="text-2xl font-bold text-[#1a1a1a]">Angoty</div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#services">Services</a>
              <a href="#contact">Contact</a>
            </nav>
            <Button
              className="bg-black text-white hover:bg-gray-800"
              onClick={() => setCvModalOpen(true)}
            >
              CV
            </Button>
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
            <a href="#home" className="flex items-center justify-center gap-2">
              <i className="fas fa-home"></i> <span>Home</span>
            </a>
            <a href="#about" className="flex items-center justify-center gap-2">
              <i className="fas fa-user"></i> <span>About</span>
            </a>
            <a href="#projects" className="flex items-center justify-center gap-2">
              <i className="fas fa-folder-open"></i> <span>Projects</span>
            </a>
            <a href="#skills" className="flex items-center justify-center gap-2">
              <i className="fas fa-bolt"></i> <span>Skills</span>
            </a>
            <a href="#services" className="flex items-center justify-center gap-2">
              <i className="fas fa-briefcase"></i> <span>Services</span>
            </a>
            <a href="#contact" className="flex items-center justify-center gap-2">
              <i className="fas fa-envelope"></i> <span>Contact</span>
            </a>
            <Button
              className="w-full bg-black text-white hover:bg-gray-800"
              onClick={() => setCvModalOpen(true)}
            >
              <i className="fas fa-file-download"></i>
              <span>CV</span>
            </Button>
          </div>
        )}
      </header>

      {cvModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
      <button
        onClick={() => setCvModalOpen(false)}
        className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
      >
        ✕
      </button>

      {/* Header with icon */}
      <div className="flex flex-col items-center mb-4">
        <i className="fas fa-paper-plane text-black text-3xl mb-2"></i>
        <h2 className="text-xl font-bold text-black">Receive the CV by email</h2>
        <p className="text-sm text-gray-600 text-center">
          The CV will be sent directly to your inbox.
        </p>
      </div>

      {/* Input fields with icons */}
      <div className="flex items-center border px-3 py-2 rounded mb-4">
        <i className="fas fa-user text-gray-500 mr-2"></i>
        <input
          type="text"
          placeholder="Your name"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          className="flex-1 outline-none"
        />
      </div>

      <div className="flex items-center border px-3 py-2 rounded mb-4">
        <i className="fas fa-envelope text-gray-500 mr-2"></i>
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 outline-none"
        />
      </div>

      {/* Send button */}
      <Button
        className={`w-full ${canSend ? "bg-black text-white hover:bg-gray-800" : "bg-gray-400 text-gray-200 cursor-not-allowed"}`}
        onClick={handleSendCv}
        disabled={!canSend}
      >
        Send
      </Button>

      {/* Error message */}
      {errorMessage && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative mt-3 text-center">
          <strong className="font-bold">Error:</strong>
          <span className="ml-2">{errorMessage}</span>
        </div>
      )}
    </div>
  </div>
)}


    </>
  )
}
