import { motion } from 'framer-motion';
import CountUp from 'react-countup';

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80; // Ajustez selon la hauteur de votre navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 lg:px-0">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover opacity-30"
          src="https://player.vimeo.com/external/499537240.sd.mp4?s=46a1c3250d494aef0cf7b8d2d4a09d5a1d5f3b1d&profile_id=164&oauth2_token_id=57447761"
        />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left lg:w-1/2"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-electric to-neon-cyan bg-clip-text text-transparent animate-gradient">
              Devenez un Trader d'Elite
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Transformez votre passion pour les marchés financiers en expertise professionnelle avec notre formation complète et personnalisée.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-8">
              <button 
                onClick={scrollToContact}
                className="bg-orange-cta hover:bg-opacity-90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_15px_#f97316] w-full sm:w-auto"
              >
                Démarrer la formation
              </button>
              <div className="flex items-center gap-2">
                <span className="text-4xl font-bold text-neon-cyan">
                  <CountUp end={1500} duration={2.5} />+
                </span>
                <span className="text-sm text-gray-300">Traders formés</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative w-full h-[400px] lg:h-[600px]">
              <img
                src="photo.jpg"
                alt="Trading Expert"
                className="rounded-2xl object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-deep via-transparent to-transparent rounded-2xl" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-deep via-transparent to-transparent rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}