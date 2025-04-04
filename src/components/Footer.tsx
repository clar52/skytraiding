import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#" },
    { icon: <Twitter className="w-5 h-5" />, href: "#" },
    { icon: <Instagram className="w-5 h-5" />, href: "#" },
    { icon: <Youtube className="w-5 h-5" />, href: "#" }
  ];

  return (
    <footer className="bg-white text-blue-deep py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-electric to-neon-cyan bg-clip-text text-transparent">
              SkyTrading
            </h3>
            <p className="text-gray-600 max-w-md">
              Votre partenaire de confiance pour une formation trading d'excellence. 
              Rejoignez notre communauté de traders professionnels.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {['Accueil', 'Services', 'Formations', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-blue-electric transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  className="bg-blue-deep/5 p-2 rounded-full hover:bg-blue-deep/10 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} SkyTrading. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}