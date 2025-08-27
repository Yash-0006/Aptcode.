export default function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-16 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="pl-8 border-l-4 border-white/30">
              <h3 className="text-3xl font-bold mb-6 text-white">Web Development</h3>
              <p className="text-white/85 text-lg">
                Powerful, responsive websites built with cutting-edge technologies.
                From corporate sites to complex web applications, we create digital experiences that drive results.
              </p>
            </div>
            <div className="pl-8 border-l-4 border-white/30">
              <h3 className="text-3xl font-bold mb-6 text-white">Mobile Apps</h3>
              <p className="text-white/85 text-lg">
                Native and cross-platform mobile applications that deliver exceptional user experiences across all devices and operating systems.
              </p>
            </div>
            <div className="pl-8 border-l-4 border-white/30">
              <h3 className="text-3xl font-bold mb-6 text-white">Custom Software</h3>
              <p className="text-white/85 text-lg">
                Robust, scalable software solutions designed to streamline your operations and give you a competitive edge through innovative technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
