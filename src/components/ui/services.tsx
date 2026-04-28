import { useEffect, useState } from "react";
import { services } from "@/data/servicesData";
import { motion, AnimatePresence } from "framer-motion";

export default function Services() {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 3) % services.length);
    }, 4000); // toutes les 4 secondes
    return () => clearInterval(interval);
  }, []);

  // Toujours 3 services consécutifs avec modulo
  const visibleServices = Array.from({ length: 3 }, (_, i) => {
    return services[(startIndex + i) % services.length];
  });

  return (
    <section id="services" className="py-16 px-6 md:px-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-900"> Services</h2>
      <p className="mb-8 text-sm sm:text-base text-gray-600 text-center max-w-xl mx-auto">Discover the areas where I bring expertise and impactful solutions.</p>

      <AnimatePresence mode="sync">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {visibleServices.map((service, idx) => (
            <motion.div key={`${service.title}-${startIndex}-${idx}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.7 }} className="p-6 bg-white rounded-xl shadow-sm flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <i className={`${service.icon} text-2xl text-gray-800`}></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </section>
  );
}
