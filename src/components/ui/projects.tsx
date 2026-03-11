import { useState } from "react"
import { Button } from "@/components/ui/button"
import { projects, type ProjectType } from "@/data/projectsData"

export default function Project() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedOrg, setSelectedOrg] = useState("All Organizations")
  const [activeProject, setActiveProject] = useState<ProjectType | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const filteredProjects = projects.filter((p) => {
    const categoryMatch = selectedCategory === "All" || p.category === selectedCategory
    const orgMatch = selectedOrg === "All Organizations" || p.organization === selectedOrg
    return categoryMatch && orgMatch
  })

  return (
    <section id="projects" className="min-h-screen w-full bg-white px-6 md:px-12 py-16 md:py-20">
      {/* Titre */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a]">My Projects</h2>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-[#555] max-w-2xl mx-auto">
          Explore a selection of my work across web, mobile, full‑stack, and data‑driven solutions.
        </p>
      </div>

      {/* Filtres */}
      <div className="flex flex-col gap-6 items-center mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {["All","Mobile","Web development","Fullstack","Backend","Data-science"].map((filter) => (
            <Button
              key={filter}
              onClick={() => setSelectedCategory(filter)}
              className={`px-4 py-2 rounded-full border ${
                selectedCategory === filter ? "bg-black text-white" : "bg-transparent text-black"
              }`}
            >
              {filter}
            </Button>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          <span className="text-sm md:text-base font-semibold text-[#1a1a1a]">By:</span>
          {["All Organizations","DGI Madagascar","Personal","IT University"].map((filter) => (
            <Button
              key={filter}
              onClick={() => setSelectedOrg(filter)}
              className={`px-4 py-2 rounded-full border ${
                selectedOrg === filter ? "bg-black text-white" : "bg-transparent text-black"
              }`}
            >
              {filter}
            </Button>
          ))}
        </div>
      </div>

      {/* Cards projets */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {filteredProjects.map((project) => (
    <div
      key={project.id}
      className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition flex flex-col justify-between"
    >
      {/* Image */}
      <div className="relative w-full h-40 mb-4 rounded-md overflow-hidden group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <button
          onClick={() => {
            setActiveProject(project);
            setCurrentIndex(0);
          }}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <i className="fas fa-eye text-white text-2xl"></i>
        </button>
      </div>

      {/* Contenu texte */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 min-h-[48px]">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 mb-4 min-h-[60px]">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-auto">
          <span className="block text-xs font-semibold text-gray-700 mb-2">
            Technologies
          </span>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Organisation + Type */}
          {/* Organisation + Type */}
<div className="flex items-center justify-between text-xs mt-2">
  {/* Organisation avec icône cliquable */}
  <a
    href={project.orgLink}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition"
  >
    <i className="fas fa-building"></i>
    <span>{project.organization}</span>
  </a>

  {/* Type du projet */}
  <div className="flex items-center gap-2 text-gray-500">
    <i className="fas fa-tag"></i>
    <span className="font-medium">{project.category}</span>
  </div>
</div>

        </div>
      </div>
    </div>
  ))}
</div>



      {/* Modal */}
{activeProject && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
    <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-10 max-w-6xl w-full relative overflow-y-auto max-h-[90vh]">
      {/* Close button */}
      <button
        onClick={() => setActiveProject(null)}
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-xl md:text-2xl transition"
      >
        <i className="fas fa-times"></i>
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        {/* Left column */}
        <div className="flex flex-col space-y-6">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
            {activeProject.title}
          </h2>

          {/* Objectives & description */}
          <div className="space-y-2">
            <p className="text-base text-gray-700 leading-relaxed">
              {activeProject.objectives}
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              {activeProject.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="space-y-2">
            <span className="text-sm font-semibold text-gray-800">Technologies</span>
            <div className="flex flex-wrap gap-2">
              {activeProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Collaborators */}
          {activeProject.collaborators && activeProject.collaborators.length > 0 && (
            <div className="space-y-2">
              <span className="text-sm font-semibold text-gray-800">Collaborators</span>
              <div className="flex flex-wrap gap-3">
                {activeProject.collaborators.map((collab) => (
                  <div
                    key={collab.name}
                    className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full shadow-sm"
                  >
                    <span className="text-sm text-gray-600">{collab.name}</span>
                    <a
                      href={collab.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition"
                    >
                      {collab.type === "linkedin" ? (
                        <i className="fab fa-linkedin text-lg"></i>
                      ) : (
                        <i className="fas fa-globe text-lg"></i>
                      )}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
            <a
              href={activeProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 text-sm font-medium transition shadow-md w-full sm:w-auto justify-center"
            >
              <i className="fas fa-code-branch"></i>
              Source code
            </a>

            <a
              href={activeProject.orgLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 underline font-medium transition w-full sm:w-auto justify-center"
            >
              <i className="fas fa-building"></i>
              {activeProject.organization}
            </a>
          </div>
        </div>

        {/* Right column: carousel */}
        <div className="relative">
          <img
            src={activeProject.gallery[currentIndex]}
            alt="Gallery"
            className="w-full h-48 md:h-80 object-cover rounded-xl shadow-lg"
          />
          {activeProject.gallery.length > 1 && (
            <>
              <button
                onClick={() =>
                  setCurrentIndex((prev) =>
                    prev === 0 ? activeProject.gallery.length - 1 : prev - 1
                  )
                }
                className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white px-3 py-2 rounded-full hover:bg-opacity-70 transition"
              >
                ‹
              </button>
              <button
                onClick={() =>
                  setCurrentIndex((prev) =>
                    prev === activeProject.gallery.length - 1 ? 0 : prev + 1
                  )
                }
                className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white px-3 py-2 rounded-full hover:bg-opacity-70 transition"
              >
                ›
              </button>
            </>
          )}

          {/* Carousel indicators */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
            {activeProject.gallery.map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)}



    </section>
  )
}
