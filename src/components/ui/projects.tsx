import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DEFAULT_IMAGE, projects, type ProjectType } from "@/data/projectsData"

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
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-gray-900">Selected Projects</h2>
        <p className="mb-8 text-sm sm:text-base text-gray-600 text-center max-w-xl mx-auto">Explore a selection of my work across web, mobile, full‑stack, and data‑driven solutions.</p>
      </div>

      <div className="flex flex-col gap-6 items-center mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {["All","Mobile Application","Web Application","Desktop Application", "Data-science", "BlockChain", "Cloud / DevOps", "Cybersecurity"].map((filter) => (
            <Button key={filter} onClick={() => setSelectedCategory(filter)} className={`px-4 py-2 rounded-full border ${ selectedCategory === filter ? "bg-black text-white" : "bg-transparent text-black"}`}>{filter}</Button>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          <span className="text-sm md:text-base font-semibold text-[#1a1a1a]">By:</span>
          {["All Organizations","DGI Madagascar","Personal","IT University", "Université Côte d'Azur"].map((filter) => (
            <Button key={filter} onClick={() => setSelectedOrg(filter)} className={`px-4 py-2 rounded-full border ${ selectedOrg === filter ? "bg-black text-white" : "bg-transparent text-black" }`}>{filter}</Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
            <div key={project.id} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition flex flex-col justify-between">
              <div className="relative w-full h-40 mb-4 rounded-md overflow-hidden group">
                <img src={project.isPrivate ? DEFAULT_IMAGE : project.image}  alt={project.title}  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
                <button  onClick={() => {  if (!project.isPrivate) {  setActiveProject(project);  setCurrentIndex(0);  }  }}  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <i className={`fas ${project.isPrivate ? "fa-lock" : "fa-eye"} text-white text-2xl`}></i>
                </button>
              </div>

              <div className="flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 min-h-[48px]"> {project.title} </h3>
                <p className="text-sm text-gray-600 mb-4 min-h-[60px]"> {project.description} </p>

                <div className="mt-auto">
                  <span className="block text-xs font-semibold text-gray-700 mb-2"> Technologies</span>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full shadow-sm">{tech}</span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs mt-2">
                    <a href={project.orgLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium transition">
                      <i className="fas fa-building"></i>
                      <span>{project.organization}</span>
                      <i className="fas fa-arrow-up-right-from-square text-xs text-gray-500"></i>
                    </a>

                    <div className="flex items-center gap-2 text-gray-600">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6">
          <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-xl">
            <button onClick={() => setActiveProject(null)} className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition">
              <i className="fas fa-times text-gray-700"></i>
            </button>
            <div className="px-6 md:px-10 py-6 border-b border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900"> {activeProject.title}</h2>
              <div className="flex flex-wrap items-center gap-3 mt-3 text-sm text-gray-600">
                <span className="px-3 py-1 bg-gray-100 rounded-lg text-gray-700">{activeProject.category}</span>
                <a href={activeProject.orgLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gray-900 transition">
                  <i className="fas fa-building"></i>
                  {activeProject.organization}
                  <i className="fas fa-arrow-up-right-from-square text-xs text-gray-400"></i>
                </a>
              </div>
              {activeProject.projectRole && (
                <div className="mt-3 text-sm">
                  <span className="text-gray-500">My role:</span>{" "}
                  <span className="font-semibold text-gray-800">{activeProject.projectRole}</span>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 md:px-10 py-8">
              <div className="space-y-4">

                <div className="relative rounded-lg overflow-hidden shadow-sm border border-gray-100">
                  <img src={activeProject.gallery[currentIndex]} className="w-full h-[260px] md:h-[420px] object-cover" alt={activeProject.title}/>
                  {activeProject.gallery.length > 1 && (
                    <>
                      <button onClick={() => setCurrentIndex((prev) => prev === 0 ? activeProject.gallery.length - 1 : prev - 1 )} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/60 text-white rounded-full hover:bg-black transition">‹</button>
                      <button onClick={() => setCurrentIndex((prev) => prev === activeProject.gallery.length - 1 ? 0 : prev + 1 )} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/60 text-white rounded-full hover:bg-black transition">›</button>
                    </>
                  )}
                </div>

                {activeProject.gallery.length > 1 && (
                  <div className="flex justify-center gap-2">
                    {activeProject.gallery.map((_, i) => (
                      <span key={i} onClick={() => setCurrentIndex(i)} className={`w-2 h-2 rounded-full cursor-pointer transition ${ currentIndex === i ? "bg-black" : "bg-gray-300"}`}/>
                    ))}
                  </div>
                )}

              </div>
              
              <div className="flex flex-col gap-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                  <p className="text-gray-700 leading-relaxed">{activeProject.objectives}</p>
                  <p className="text-gray-500 mt-3 text-sm leading-relaxed"> {activeProject.description}</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3"> Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-lg">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                    {(activeProject.collaborators ?? []).map((c) => (
                      <a key={c.name} href={c.link} target="_blank" rel="noopener noreferrer" className="grid grid-cols-[1fr_180px_24px] items-center px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
                        <div className="min-w-0">
                          <span className="text-sm font-medium text-gray-700 truncate block">
                            {c.name}
                          </span>
                        </div>
                        <div className="text-xs text-gray-500">
                          <span className="text-gray-400">Role: </span>
                          <span className="text-gray-600">{c.role}</span>
                        </div>
                        <div className="flex justify-end">
                          <i className="fas fa-arrow-up-right-from-square text-xs text-gray-400" />
                        </div>
                      </a>
                    ))}
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3"> Links</h3>
                  <div className="flex flex-wrap gap-3">
                  
                    {activeProject.repositories?.frontend && (
                      <a href={activeProject.repositories.frontend} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition">Frontend</a>
                    )}
                    {activeProject.repositories?.source && (
                      <a href={activeProject.repositories.source} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition">Git source</a>
                    )}

                    {activeProject.repositories?.backend && (
                      <a href={activeProject.repositories.backend} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition"> Backend </a>
                    )}

                    {activeProject.repositories?.mobile && (
                      <a href={activeProject.repositories.mobile} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition">Mobile</a>
                    )}

                    {activeProject.liveUrl && (
                      <a href={activeProject.liveUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800 transition">Live demo</a>
                    )}

                    {activeProject.videoUrl && (
                      <a href={activeProject.videoUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm hover:bg-black transition">Video</a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
