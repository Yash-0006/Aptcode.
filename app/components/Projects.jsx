"use client";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Aaranal",
      description: "A full-stack eCommerce website for a tote bag business, featuring a responsive storefront, secure payment integration, and admin dashboard for managing products and orders.",
      image: "/assets/aaranal.png",
      tags: ["Next.js", "Razorpay API", "AWS"],
      link: "https://aaranaltales.shop",
    },
    {
      id: 2,
      title: "ChipSphere",
      description: "An ECE-centric educational platform providing curated resources, interactive quizzes, and tools to support students in electronics and communication engineering.",
      image: "/assets/chipsphere.png",
      tags: ["Next.js", "Node.js", "Tailwind CSS"],
      link: "https://www.chipsphere.in",
    }
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
            Our Projects
          </h2>
          <p className="text-xl text-white/90 mb-16 max-w-3xl mx-auto font-medium leading-relaxed">
            Explore our portfolio of innovative solutions tailored to meet diverse business needs.
          </p>

          {/* Projects Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-2 ${projects.length === 2 ? 'lg:grid-cols-2 lg:max-w-4xl lg:mx-auto' : 'lg:grid-cols-3'} gap-12`}>
            {projects.map((project) => (
              <div key={project.id} className="group">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white/80 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/80 mb-5 group-hover:text-white transition-colors text-justify">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-4 py-1.5 bg-white/10 text-white/90 text-sm rounded-full transition-colors group-hover:bg-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
