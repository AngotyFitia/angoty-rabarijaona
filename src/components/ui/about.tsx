import { useState } from "react"

import { Button } from "@/components/ui/button"
import toast from "react-hot-toast"
import emailjs from "emailjs-com";
import { useLanguage } from "@/context/LanguageContext";
import translations from "@/data/translations";

export default function About() {
  const [cvModalOpen, setCvModalOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [nom, setNom] = useState("")
  const { language } = useLanguage();
  const t = translations[language];
  const [errorMessage, setErrorMessage] = useState("");
  const handleSendCv = () => {
    if (!nom || !email) {
      setErrorMessage(t.header.cv.response.name);
      return;
    }
    if (!isValidEmail) {
      setErrorMessage(t.header.cv.response.email);
      return;
    }
  
    emailjs.send( "service_y6e35rp", "template_fenv5uw", { to_email: email, to_name: nom }, "nyCuHCn8P7986n21j")
    .then(() => {
      toast.success(t.header.cv.response.succes);
      setCvModalOpen(false);
      setEmail("");
      setNom("");
      setErrorMessage("");
    })
    .catch((error) => {
      console.error("Erreur:", error);
      setErrorMessage(t.header.cv.response.error);
    });
  };
  
  const isValidEmail = /^[^\s@]+@[^\s@]+\.(fr|com)$/.test(email) && (email.endsWith("@gmail.com") || email.endsWith(".fr"));
  const canSend = nom.trim() !== "" && isValidEmail;

  return (
    <>
      <section id="about" className="min-h-screen w-full bg-[#f9f9f9] px-6 md:px-12 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-gray-900">{t.about.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6 self-center">
            <p className="mb-8 text-sm sm:text-base text-gray-600 text-center text-center md:text-left"> {t.about.description1} <span className="font-semibold"> {t.about.name}</span>{t.about.description2}</p>
            <div className="flex flex-row gap-4 justify-center md:justify-start animate-fadeIn delay-600">
              <a href="#contact"><Button className="w-auto bg-black text-white rounded-full px-6 py-3 shadow-md hover:bg-gray-800 transition-transform duration-300" style={{ animation: "glow 2s infinite" }}>{t.about.contact}</Button></a>
              <Button className="w-auto bg-transparent text-[#1a1a1a] border border-[#000000] rounded-full px-6 py-3 shadow-md hover:bg-[#f0f0f0] hover:text-[#000000] hover:translate-y-[-2px] transition-transform duration-300" onClick={() => setCvModalOpen(true)}>{t.about.cv} </Button>
            </div>
          </div>

          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center">
                <i className="fas fa-code text-3xl text-[#000000] mb-3"></i>
                <h3 className="font-semibold mb-3 text-center">{t.about.website}</h3>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center">
                <i className="fas fa-mobile-alt text-3xl text-[#000000] mb-3"></i>
                <h3 className="font-semibold mb-3 text-center">{t.about.mobile}</h3>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center">
                <i className="fas fa-chart-line text-3xl text-[#000000] mb-3"></i>
                <h3 className="font-semibold mb-3 text-center">{t.about.data}</h3>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center mt-8">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#000000] text-white text-lg sm:text-2xl font-bold shadow-md">{t.about.msc}</div>
                <p className="mt-2 text-sm text-[#555555]">{t.about.education}</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#000000] text-white text-lg sm:text-2xl font-bold shadow-md">2+</div>
                <p className="mt-2 text-sm text-[#555555]">{t.about.yearsPractice}</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#000000] text-white text-lg sm:text-2xl font-bold shadow-md">15+</div>
                <p className="mt-2 text-sm text-[#555555]">{t.about.projects}</p>
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
              <h2 className="text-xl font-bold text-black">{t.header.cv.title}</h2>
              <p className="text-sm text-gray-600 text-center">{t.header.cv.description}</p>
            </div>
            <div className="flex items-center border px-3 py-2 rounded mb-4">
              <i className="fas fa-user text-gray-500 mr-2"></i>
              <input type="text" placeholder={t.header.cv.name} value={nom} onChange={(e) => setNom(e.target.value)} className="flex-1 outline-none"/>
            </div>
            <div className="flex items-center border px-3 py-2 rounded mb-4">
              <i className="fas fa-envelope text-gray-500 mr-2"></i>
              <input type="email" placeholder={t.header.cv.email} value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 outline-none"/>
            </div>
            <Button className={`w-full ${canSend ? "bg-black text-white hover:bg-gray-800" : "bg-gray-400 text-gray-200 cursor-not-allowed"}`}onClick={handleSendCv} disabled={!canSend}>{t.header.cv.button}</Button>
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
