import { useState } from "react"

import { Button } from "@/components/ui/button"
import toast from "react-hot-toast"
import emailjs from "emailjs-com";

export default function About() {
  const [cvModalOpen, setCvModalOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [nom, setNom] = useState("")
  const [errorMessage, setErrorMessage] = useState("");
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
      setErrorMessage("");
    })
    .catch((error) => {
      console.error("Erreur:", error);
      setErrorMessage("Échec de l'envoi du CV. Vérifiez votre adresse email.");
    });
  };
  
  const isValidEmail = /^[^\s@]+@[^\s@]+\.(fr|com)$/.test(email) && (email.endsWith("@gmail.com") || email.endsWith(".fr"));
  const canSend = nom.trim() !== "" && isValidEmail;

  return (
    <>
      <section id="about" className="min-h-screen w-full bg-[#f9f9f9] px-6 md:px-12 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-gray-900">About me</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Colonne gauche : présentation */}
          <div className="space-y-6 self-center">
            <p className="mb-8 text-sm sm:text-base text-gray-600 text-center text-center md:text-left">
              My name is <span className="font-semibold">Angoty</span>, a passionate Full‑stack Developer and Data Analyst. 
              I specialize in crafting modern web and mobile applications, while also leveraging data to uncover insights and drive smarter decisions. 
              With a strong focus on building responsive, user‑friendly digital experiences and applying analytical thinking to solve complex problems, 
              I bring together creativity and technical expertise to deliver impactful solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#contact">
                <Button className="w-auto bg-black text-white rounded-full px-6 py-3 shadow-md hover:bg-gray-800 transition-transform duration-300 animate-bounce"> Let’s talk</Button>
              </a>
              <Button className="bg-transparent text-[#1a1a1a] border border-[#000000] rounded-full px-6 py-3 shadow-md hover:bg-[#f0f0f0] hover:text-[#000000] transition-transform duration-300" onClick={() => setCvModalOpen(true)}>Download CV </Button>
            </div>
          </div>

          {/* Colonne droite : services + stats */}
          <div className="space-y-12">
            {/* Services : passent en 1 colonne sur mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center">
                <i className="fas fa-code text-3xl text-[#000000] mb-3"></i>
                <h3 className="font-semibold mb-3 text-center">Website Development</h3>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center">
                <i className="fas fa-mobile-alt text-3xl text-[#000000] mb-3"></i>
                <h3 className="font-semibold mb-3 text-center">Mobile Application</h3>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center">
                <i className="fas fa-chart-line text-3xl text-[#000000] mb-3"></i>
                <h3 className="font-semibold mb-3 text-center">Data Insights</h3>
              </div>
            </div>

            {/* Stats : adaptatives */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center mt-8">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#000000] text-white text-lg sm:text-2xl font-bold shadow-md">Msc</div>
                <p className="mt-2 text-sm text-[#555555]">Education</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#000000] text-white text-lg sm:text-2xl font-bold shadow-md">1</div>
                <p className="mt-2 text-sm text-[#555555]">Years Exp.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#000000] text-white text-lg sm:text-2xl font-bold shadow-md">15+</div>
                <p className="mt-2 text-sm text-[#555555]">Projects</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#000000] text-white text-lg sm:text-2xl font-bold shadow-md">10+</div>
                <p className="mt-2 text-sm text-[#555555]">Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {cvModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
            <button onClick={() => setCvModalOpen(false)} className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"><i className="fas fa-times"></i></button>
            <div className="flex flex-col items-center mb-4">
              <i className="fas fa-paper-plane text-black text-3xl mb-2"></i>
              <h2 className="text-xl font-bold text-black">Receive the CV by email</h2>
              <p className="text-sm text-gray-600 text-center">The CV will be sent directly to your inbox.</p>
            </div>
            <div className="flex items-center border px-3 py-2 rounded mb-4">
              <i className="fas fa-user text-gray-500 mr-2"></i>
              <input type="text" placeholder="Your name" value={nom} onChange={(e) => setNom(e.target.value)} className="flex-1 outline-none"/>
            </div>
            <div className="flex items-center border px-3 py-2 rounded mb-4">
              <i className="fas fa-envelope text-gray-500 mr-2"></i>
              <input type="email" placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 outline-none"/>
            </div>
            <Button className={`w-full ${canSend ? "bg-black text-white hover:bg-gray-800" : "bg-gray-400 text-gray-200 cursor-not-allowed"}`}onClick={handleSendCv} disabled={!canSend}>Send</Button>
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
