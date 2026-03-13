import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-16 px-6 md:px-12 bg-gray-50">
      {/* Titre */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
        Let's work together
      </h2>
      <p className="text-sm sm:text-base text-gray-600 mb-10">
        Feel free to reach out for collaborations, projects, or just to connect.
      </p>

      {/* Deux colonnes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Colonne gauche : infos */}
{/* Colonne gauche : infos */}
<div className="space-y-4">
  {/* Email */}
  <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
      <i className="fas fa-envelope text-gray-800"></i>
    </div>
    <div className="text-left">
      <p className="font-semibold text-gray-900">Email</p>
      <p className="text-sm text-gray-600">angotyrabarijaona@gmail.com</p>
    </div>
  </div>

  {/* Phone */}
  <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
      <i className="fas fa-phone text-gray-800"></i>
    </div>
    <div className="text-left">
      <p className="font-semibold text-gray-900">Phone</p>
      <p className="text-sm text-gray-600">+261 37 58 098 27</p>
    </div>
  </div>

  {/* Location */}
  <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
      <i className="fas fa-map-marker-alt text-gray-800"></i>
    </div>
    <div className="text-left">
      <p className="font-semibold text-gray-900">Location</p>
      <p className="text-sm text-gray-600">Itaosy, Antananarivo, Madagascar</p>
    </div>
  </div>

  {/* Follow me */}
  <div className="bg-white p-4 rounded-lg shadow-sm">
    <div className="flex items-center gap-4 mb-3">
      {/* <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
        <i className="fas fa-share-alt text-gray-800"></i>
      </div> */}
      <p className="font-semibold text-gray-900">Let’s connect</p>
      </div>

    <div className="flex gap-4">
    <a
    href="mailto:angotyrabarijaona@gmail.com"
    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition"
  >
    <i className="fas fa-envelope"></i>
  </a>
      <a
        href="https://linkedin.com/in/angoty-rabarijaona"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a
            href="https://github.com/angotyfitia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition"
        >
            <i className="fab fa-github"></i>
        </a>

        {/* Deuxième dépôt */}
        <a
            href="https://github.com/angoty"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition"
        >
            <i className="fab fa-github"></i>
        </a>
      <a
        href="https://wa.me/267375809827"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
      
    </div>
  </div>
</div>



        {/* Colonne droite : formulaire */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 bg-white text-gray-900"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 bg-white text-gray-900"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 bg-white text-gray-900"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 bg-white text-gray-900"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
