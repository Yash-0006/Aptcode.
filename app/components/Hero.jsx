    "use client";

    import { useEffect } from "react";

    export default function Hero() {
    useEffect(() => {
        const createParticles = () => {
        const particlesContainer = document.getElementById("particles");
        if (!particlesContainer) return;

        const particleCount = 60;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement("div");
            particle.classList.add("particle");
            const size = Math.random();
            if (size > 0.8) {
            particle.classList.add("large");
            } else if (size < 0.3) {
            particle.classList.add("small");
            }

            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.animationDuration = `${Math.random() * 15 + 15}s`;
            particle.style.animationDelay = `${Math.random() * 25}s`;
            particlesContainer.appendChild(particle);
        }
        };

        createParticles();
    }, []);

    return (
        <section id="home" className="hero min-h-screen flex items-center justify-center text-center relative z-10">
        <div className="hero-content max-w-5xl px-4">
            <h1 className="text-[clamp(5rem,15vw,10rem)] font-black mb-8 leading-none bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-gradient-flow animate-text-glow">
            Aptcode.
            </h1>
            <p className="tagline text-xl text-white/90 mb-16 uppercase tracking-widest animate-fadeIn">
            Solutions engineered with precision
            </p>
            <a
            href="#contact"
            className="cta-button inline-block px-8 py-6 border-2 border-white/80 text-white font-semibold rounded-full transition-all hover:bg-white/90 hover:text-black hover:scale-105 hover:translate-y-[-5px] animate-fadeInUp shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)]"
            >
            Start Your Project
            </a>
        </div>
        <div className="scroll-indicator absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
            <div className="w-1 h-12 bg-gradient-to-b from-white/80 to-transparent rounded-full mx-auto"></div>
        </div>
        </section>
    );
    }
