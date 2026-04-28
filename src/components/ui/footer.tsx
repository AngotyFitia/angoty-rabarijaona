export default function Footer() {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
      <footer className="bg-white text-black py-12 px-6 md:px-12 border-t border-gray-200 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3">Angoty</h3>
            <p className="text-sm mb-2">Crafting elegant digital experiences with a focus on performance and design.</p>
            <p className="text-sm">Currently pursuing Master II at IT University, Antananarivo.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Connect</h3>
            <div className="flex gap-4">
              <a href="https://linkedin.com/in/angoty-rabarijaona" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-black hover:bg-black hover:text-white transition"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/angotyfitia" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-black hover:bg-black hover:text-white transition"><i className="fab fa-github"></i></a>
              <a href="https://github.com/angoty" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-black hover:bg-black hover:text-white transition"><i className="fab fa-github"></i></a>
              <a href="https://wa.me/261375809827" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-black hover:bg-black hover:text-white transition"><i className="fab fa-whatsapp"></i></a>
              <a href="mailto:angotyrabarijaona@gmail.com" className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-black hover:bg-black hover:text-white transition"> <i className="fas fa-envelope"></i></a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-gray-600 transition">Home</a></li>
              <li><a href="#about" className="hover:text-gray-600 transition">About</a></li>
              <li><a href="#projects" className="hover:text-gray-600 transition">Projects</a></li>
              <li><a href="#skills" className="hover:text-gray-600 transition">Skills</a></li>
              <li><a href="#services" className="hover:text-gray-600 transition">Services</a></li>
              <li><a href="#contact" className="hover:text-gray-600 transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Get in touch</h3>
            <p className="text-sm">angotyrabarijaona@gmail.com</p>
            <p className="text-sm">+261 37 58 098 27</p>
            <p className="text-sm">Itaosy, Antananarivo, Madagascar</p>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <span className="text-center md:text-left"> © 2025 — Designed & built by Angoty RABARIJAONA </span>
          <button onClick={scrollToTop} className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
            <i className="fas fa-arrow-up"></i>
            <span>Back to Top</span>
          </button>
        </div>
      </footer>
    )
  }
  