"use client";
import { useEffect, useState } from "react";

export default function Contact() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Ready to transform your vision into reality? We're here to make your digital future a success story with innovative solutions and exceptional craftsmanship.
          </p>
          <a
            href="mailto:yaswanthgodavarthi0006@gmail.com"
            className={`inline-block px-10 py-6 border-2 border-white/80 text-white font-bold text-lg rounded-full transition-all hover:scale-105 ${
              isMobile
                ? "shadow-[0_0_40px_rgba(255,255,255,0.6)]"
                : "hover:bg-white/10 hover:shadow-[0_0_40px_rgba(255,255,255,0.6)]"
            }`}
          >
            Get In Touch
          </a>
          <div className="contact-info flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start mt-20 max-w-3xl mx-auto">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <h4 className="text-2xl font-bold mb-4 text-white">Email</h4>
              <p className="text-white/90 text-lg">yaswanthgodavarthi0006@gmail.com</p>
            </div>
            <div className="text-center md:text-left mb-8 md:mb-0">
              <h4 className="text-2xl font-bold mb-4 text-white">Phone</h4>
              <p className="text-white/90 text-lg">+91 7032960122</p>
            </div>
            <div className="text-center md:text-left mb-8 md:mb-0">
              <h4 className="text-2xl font-bold mb-4 text-white">Serving</h4>
              <p className="text-white/90 text-lg">Worldwide Remote</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
