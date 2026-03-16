import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import logo from "figma:asset/e5168fe02a41a56fdcdd6743929bb237315164ad.png";

export function Navigation() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Philosophy", path: "/philosophy" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-[1800px] mx-auto px-8 lg:px-16 py-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="DISRUPT" className="h-10 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="relative text-sm tracking-wide transition-colors hover:text-primary"
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden md:block px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:scale-105"
        >
          Get Started
        </Link>
      </div>
    </motion.nav>
  );
}
