import { Link } from "react-router";
import logo from "figma:asset/e5168fe02a41a56fdcdd6743929bb237315164ad.png";

export function Footer() {
  return (
    <footer className="bg-[#121212] text-[#FAF7F3] py-24">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          <div>
            <img src={logo} alt="DISRUPT" className="h-12 w-auto mb-6" />
            <p className="text-[#E5E5E5] text-sm leading-relaxed max-w-xs">
              Attention Rewired. Strategy-first media agency built for brands that refuse to grow the traditional way.
            </p>
          </div>

          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6 opacity-50">Navigate</h4>
            <div className="space-y-3">
              <Link to="/" className="block text-sm hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-sm hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/services" className="block text-sm hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/philosophy" className="block text-sm hover:text-primary transition-colors">
                Philosophy
              </Link>
              <Link to="/contact" className="block text-sm hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6 opacity-50">Connect</h4>
            <div className="space-y-3 text-sm text-[#E5E5E5]">
              <p>work.disrupt@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#E5E5E5]">
            © 2026 DISRUPT Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}