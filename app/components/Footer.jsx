import { Instagram, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            <div className="md:max-w-sm">
              <h3 className="text-2xl font-bold mb-4 text-white">Aptcode.</h3>
              <p className="text-white/80 mb-6">
                Solutions engineered with precision. We transform ideas into powerful, user-centric digital experiences.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com/aptcode.sol" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="https://linkedin.com/company/aptcode" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                  aria-label="Connect with us on LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="https://github.com/AptcodeSol" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                  aria-label="Connect with us on LinkedIn"
                >
                  <Github className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 text-white">Contact</h4>
              <div className="space-y-3">
                <p className="text-white/90">contact@aptcode.in</p>
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