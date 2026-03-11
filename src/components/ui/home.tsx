import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <section
  id="home"
  className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center bg-[#ffffff] px-6 md:px-12 pt-20"
>

  {/* Image d'abord en mobile, ronde et compacte */}
  {/* Image d'abord en mobile */}
<div className="mt-6 md:mt-0 flex justify-center animate-zoomIn order-1 md:order-2 md:flex-1">
  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-64 md:h-64 bg-[#f9f9f9] rounded-full md:rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
    <img src="/images/Profile.png" alt="Profile" className="w-full h-full object-cover" />
  </div>
</div>



  {/* Texte ensuite en mobile */}
  <div className="mt-4 md:mt-0 space-y-6 order-2 md:order-1">
    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#1a1a1a] text-center md:text-left animate-fadeIn">
      Welcome to my portfolio
    </h1>
    <p className="text-base sm:text-lg md:text-xl text-[#555555] max-w-lg mx-auto md:mx-0 text-center md:text-left animate-slideUp">
    Full‑stack Developer & Data Analyst creating modern, elegant, and impactful digital solutions.
    </p>
    {/* Boutons côte à côte en mobile */}
    <div className="flex flex-row gap-4 justify-center md:justify-start animate-fadeIn">
      <Button className="w-auto bg-[#000000] text-[#ffffff] rounded-full px-6 py-3 shadow-md hover:bg-[#333333] transition-transform duration-300">
        Let’s talk
      </Button>
      <Button className="w-auto bg-transparent text-[#1a1a1a] border border-[#000000] rounded-full px-6 py-3 shadow-md hover:bg-[#f0f0f0] hover:text-[#000000] transition-transform duration-300">
        View projects
      </Button>
    </div>
  </div>
</section>





  



  )
}
