import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <section id="about" className="min-h-screen w-full bg-[#f9f9f9] px-6 md:px-12 py-16 md:py-20">
      <div className="text-center mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-gray-900">
        About me
      </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Colonne gauche : présentation */}
        <div className="space-y-6 self-center">
          {/* <p className="text-base sm:text-lg md:text-xl text-[#555555] leading-relaxed text-center md:text-left"> */}
          <p className="mb-8 text-sm sm:text-base text-gray-600 text-center text-center md:text-left">
            Hi! I'm <span className="font-semibold">Angoty RABARIJAONA</span>, a passionate Full‑stack Developer and Data Analyst. 
            I specialize in crafting modern web and mobile applications, while also leveraging data to uncover insights and drive smarter decisions. 
            With a strong focus on building responsive, user‑friendly digital experiences and applying analytical thinking to solve complex problems, 
            I bring together creativity and technical expertise to deliver impactful solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="bg-[#000000] text-[#ffffff] rounded-full px-6 py-3 shadow-md hover:bg-[#333333] transition-transform duration-300">
              Let’s work together
            </Button>
            <Button className="bg-transparent text-[#1a1a1a] border border-[#000000] rounded-full px-6 py-3 shadow-md hover:bg-[#f0f0f0] hover:text-[#000000] transition-transform duration-300">
              Download CV
            </Button>
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
  )
}
