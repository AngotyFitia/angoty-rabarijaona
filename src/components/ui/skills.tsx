import { useState } from "react";
import { hardSkills, softSkills, languages } from "@/data/skillsData";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("Backend Development");
  const [activeSoftTab, setActiveSoftTab] = useState("Soft Skills");

  return (
    <section id="skills" className="p-6 sm:p-8 bg-gray-50 rounded-xl shadow-md">
      {/* Section Title */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-gray-900">
        Skills
      </h2>

      {/* Introductive Text */}
      <p className="mb-8 sm:mb-12 text-base sm:text-lg md:text-xl text-[#555] max-w-2xl mx-auto text-center">
        This section highlights both my technical expertise and interpersonal abilities. 
        You’ll find my core strengths in backend, frontend, and database development, 
        as well as soft skills and language proficiency that support effective teamwork 
        and communication.
      </p>

      {/* Hard Skills */}
      <div className="mb-12 sm:mb-16">
        <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-800">
          Technical Skills
        </h3>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center">
          {["Backend Development", "Frontend Development", "Mobile", "Databases", "DevOps", "AI", "Tools & Platforms"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition ${
                activeTab === tab
                  ? "bg-gray-900 text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Cards always centered */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {hardSkills
            .find((group) => group.category === activeTab)
            ?.skills.map((skill) => (
                <div
                key={skill.name}
                className="flex flex-col items-center gap-3 p-4 bg-white rounded-md shadow-sm hover:shadow-md transition w-32 sm:w-36"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-gray-900 text-center truncate">
                  {skill.name}
                </p>
                <div className="w-full bg-gray-300 h-1.5 rounded-full">
                  <div
                    className="bg-gray-800 h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
                <span className="text-sm font-bold text-gray-800">
                  {skill.percentage}%
                </span>
              </div>
              
            ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div>
        <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-800">
          Professional & Personal Skills
        </h3>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center">
          {["Soft Skills", "Languages"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveSoftTab(tab)}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition ${
                activeSoftTab === tab
                  ? "bg-gray-900 text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* General Soft Skills */}
        {activeSoftTab === "Soft Skills" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {softSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition"
              >
                <i className={`${skill.icon} text-gray-800 text-xl sm:text-2xl`}></i>
                <div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">
                    {skill.name}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Languages */}
        {activeSoftTab === "Languages" && (
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="flex flex-col items-center gap-2 p-4 sm:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition w-28 sm:w-36"
              >
                {lang.icon && (
                  <img
                    src={lang.icon}
                    alt={lang.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  />
                )}
                <p className="font-medium text-gray-900 text-xs sm:text-sm">
                  {lang.name}
                </p>
                <span className="text-[11px] sm:text-xs text-gray-600">
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
