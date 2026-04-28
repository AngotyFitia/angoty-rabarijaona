import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <section id="home" className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center gap-y-8 bg-[#ffffff] px-6 md:px-12 pt-10 md:pt-20">
      <div className="mt-2 md:mt-0 flex justify-center order-1 md:order-2 md:flex-1 slideIn">
        <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-64 md:h-64 bg-[#f9f9f9] rounded-full md:rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition-transform duration-500">
          <img src="/images/Profile.png" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="mt-4 md:mt-0 space-y-6 order-2 md:order-1">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#1a1a1a] text-center md:text-left typing">Welcome to my portfolio</h1>
        <p className="text-base sm:text-lg md:text-xl text-[#555555] max-w-lg mx-auto md:mx-0 text-center md:text-left animate-slideUp delay-400">
          Full‑stack Developer & Data Analyst creating modern, elegant, and impactful digital solutions.
        </p>
        
        <div className="flex flex-row gap-4 justify-center md:justify-start animate-fadeIn delay-600">
          <a href="#contact">
            <Button className="w-auto bg-black text-white rounded-full px-6 py-3 shadow-md hover:bg-gray-800 transition-transform duration-300" style={{ animation: "glow 2s infinite" }}>Let’s talk</Button>
          </a>
          <a href="#projects">
            <Button className="w-auto bg-transparent text-[#1a1a1a] border border-[#000000] rounded-full px-6 py-3 shadow-md hover:bg-[#f0f0f0] hover:text-[#000000] hover:translate-y-[-2px] transition-transform duration-300">View projects</Button>
          </a>
        </div>
      </div>
    </section>
  )
}
