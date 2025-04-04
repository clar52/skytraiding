import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Pour tenir compte de la navbar fixe
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMenuOpen(false); // Fermer le menu après le clic
    }
  };

  const menuItems = [
    { label: 'Services', id: 'services' },
    { label: 'Formations', id: 'formations' },
    { label: 'Équipe', id: 'equipe' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-0 w-full bg-blue-deep/80 backdrop-blur z-50"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="text-neon-cyan text-2xl font-bold cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsMenuOpen(false);
          }}
        >
          SkyTrading
        </motion.div>
        
        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.1, color: "#00F2FE" }}
              className="text-white cursor-pointer"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </motion.div>
          ))}
        </div>
        
        {/* Bouton Burger (mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Menu Mobile */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-blue-deep/95 backdrop-blur-lg pb-4"
        >
          {menuItems.map((item) => (
            <motion.div
              key={item.id}
              whileTap={{ scale: 0.95 }}
              className="block px-6 py-3 text-white cursor-pointer hover:bg-blue-800/30"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}