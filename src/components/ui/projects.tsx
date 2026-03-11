import { useState } from "react"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/projectsData"

export default function Project() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedOrg, setSelectedOrg] = useState("All Organizations")
  const [activeProject, setActiveProject] = useState(null)
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
          <div key={project.id} className="p-6 bg-[#f9f9f9] rounded-lg shadow-md hover:shadow-lg transition flex flex-col">
            <div className="relative w-full h-40 mb-4 rounded-md overflow-hidden group">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <button
                onClick={() => {
                  setActiveProject(project)
                  setCurrentIndex(0)
                }}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <i className="fas fa-eye text-white text-2xl"></i>
              </button>
            </div>

            <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">{project.title}</h3>
            <p className="text-sm text-[#555] mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span key={tech} className="text-xs bg-[#e5e5e5] text-[#333] px-2 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>

            <a href={project.orgLink} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 underline">
              By: {project.organization}
            </a>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-5xl w-full relative">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Colonne gauche */}
              <div className="flex flex-col space-y-4">
                <h2 className="text-2xl font-bold text-[#1a1a1a]">{activeProject.title}</h2>
                <p className="text-sm text-[#555]">{activeProject.objectives}</p>
                <p className="text-sm text-[#555]">{activeProject.description}</p>

                <div className="flex flex-wrap gap-2">
                  {activeProject.technologies.map((tech) => (
                    <span key={tech} className="text-xs bg-[#e5e5e5] text-[#333] px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <a href={activeProject.orgLink} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 underline">
                  {activeProject.organization}
                </a>

                <a href={activeProject.github} target="_blank" rel="noopener noreferrer" className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 text-sm w-fit">
                  <i className="fas fa-code-branch"></i> Source code
                </a>

                {/* Collaborateurs */}
                {activeProject.collaborators && activeProject.collaborators.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {activeProject.collaborators.map((collab) => (
                      <div key={collab.name} className="flex items-center gap-2 bg-[#f5f5f5] px-3 py-1 rounded-full">
                        <span className="text-sm text-[#555]">{collab.name}</span>
                        <a href={collab.link} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                          {collab.type === "linkedin" ? (
                            <i className="fab fa-linkedin text-lg"></i>
                          ) : (
                            <i className="fas fa-globe text-lg"></i>
                          )}
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Colonne droite : carrousel */}
              <div className="relative">
                <img
                  src={activeProject.gallery[currentIndex]}
                  alt="Gallery"
                  className="w-full h-72 object-cover rounded-md"
                />
                {activeProject.gallery.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setCurrentIndex((prev) =>
                          prev === 0 ? activeProject.gallery.length - 1 : prev - 1
                        )
                      }
                      className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full"
                    >
                      ‹
                    </button>
                    <button
                      onClick={() =>
                        setCurrentIndex((prev) =>
                          prev === activeProject.gallery.length - 1 ? 0 : prev + 1
                        )
                      }
                      className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
