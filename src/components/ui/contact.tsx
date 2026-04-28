import { useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "",});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const isValidEmail =formData.email.endsWith("@gmail.com") || formData.email.endsWith(".fr");

  const canSend = formData.name.trim() !== "" && formData.subject.trim() !== "" && formData.message.trim() !== "" &&isValidEmail;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSend) {
      toast.error("Please fill in all fields correctly.");
      return;
    }

    emailjs
      .send(
        "service_y6e35rp",
        "template_rmazss5",
        { from_name: formData.name, from_email: formData.email, subject: formData.subject, message: formData.message, to_email: "angotyrabarijaona@gmail.com",
        },
        "nyCuHCn8P7986n21j" 
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Failed to send message. Please try again.");
      });
  };
  

  return (
    <section id="contact" className="py-16 px-6 md:px-12 bg-gray-50">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Let's work together </h2>
      <p className="text-sm sm:text-base text-gray-600 mb-10">Feel free to reach out for collaborations, projects, or just to connect.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
              <i className="fas fa-envelope text-gray-800"></i>
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-900">Email</p>
              <p className="text-sm text-gray-600">angotyrabarijaona@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
              <i className="fas fa-phone text-gray-800"></i>
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-900">Phone</p>
              <p className="text-sm text-gray-600">+261 37 58 098 27</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
              <i className="fas fa-map-marker-alt text-gray-800"></i>
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-900">Location</p>
              <p className="text-sm text-gray-600">Itaosy, Antananarivo, Madagascar</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-4 mb-3">
              <p className="font-semibold text-gray-900">Let’s connect</p>
            </div>
            <div className="flex gap-4">
              <a href="mailto:angotyrabarijaona@gmail.com" className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition"><i className="fas fa-envelope"></i></a>
              <a href="https://linkedin.com/in/angoty-rabarijaona" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/angotyfitia" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition"><i className="fab fa-github"></i></a>
              <a href="https://github.com/angoty" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition"><i className="fab fa-github"></i></a>
              <a href="https://wa.me/267375809827" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 bg-white text-gray-900"/>
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 bg-white text-gray-900"/>
          <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 bg-white text-gray-900"/>
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 bg-white text-gray-900"></textarea>
          <button type="submit" disabled={!canSend} className={`w-full px-6 py-3 rounded-lg shadow-md transition ${ canSend ? "bg-black text-white hover:bg-gray-800" : "bg-gray-400 text-gray-200 cursor-not-allowed"}`}>Send Message</button>
        </form>
      </div>
    </section>
  );
}
