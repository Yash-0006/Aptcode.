export default function Footer() {
  return (
    <footer className="py-16 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Aptcode.</h3>
              <p className="text-white/80">
                Solutions engineered with precision. We transform ideas into powerful, user-centric digital experiences.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 text-white">Contact</h4>
              <div className="space-y-3">
                <p className="text-white/90">yaswanthgodavarthi0006@gmail.com</p>
                <p className="text-white/90">+91 7032960122</p>
                <p className="text-white/90">Worldwide Remote</p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 text-white">Services</h4>
              <div className="space-y-2">
                <p className="text-white/90">Web Development</p>
                <p className="text-white/90">Mobile Apps</p>
                <p className="text-white/90">Custom Software</p>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-white/60">© 2025 Aptcode. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
