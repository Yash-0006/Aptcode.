export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
            <div className="md:w-1/2">
              <h2 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
                Perfect Code<br />Perfect Solution
              </h2>
              <p className="text-xl text-white/90 mb-6 font-medium leading-relaxed">
                At Aptcode, we believe that exceptional digital solutions begin with a deep understanding of your unique challenges.
              </p>
              <p className="text-xl text-white/90 font-medium leading-relaxed">
                Our name reflects our core promise: to write the perfect code for the perfect solution.
              </p>
            </div>
            <div className="md:w-1/2 space-y-10">
              <div className="pl-8 border-l-4 border-white/30">
                <h3 className="text-2xl font-bold mb-4 text-white">Precision Engineering</h3>
                <p className="text-white/80 text-lg">
                  Every line of code is crafted to deliver seamless experiences and tangible returns on your investment.
                </p>
              </div>
              <div className="pl-8 border-l-4 border-white/30">
                <h3 className="text-2xl font-bold mb-4 text-white">User-Centric Design</h3>
                <p className="text-white/80 text-lg">
                  We create intuitive interfaces that put your users first, ensuring exceptional usability and engagement.
                </p>
              </div>
              <div className="pl-8 border-l-4 border-white/30">
                <h3 className="text-2xl font-bold mb-4 text-white">Custom Solutions</h3>
                <p className="text-white/80 text-lg">
                  Bespoke solutions tailored specifically to your business needs and goals, ensuring perfect alignment with your vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
