import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sophie Martin",
    role: "Day Trader",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=800&q=80",
    text: "La formation SkyTrading a transformé ma vision du trading. Les stratégies apprises m'ont permis de devenir rentable en seulement 6 mois."
  },
  {
    name: "Thomas Dubois",
    role: "Trader Crypto",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80",
    text: "Une formation complète et professionnelle. L'accompagnement personnalisé fait vraiment la différence."
  },
  {
    name: "Julie Bernard",
    role: "Trader Forex",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=800&q=80",
    text: "Grâce à SkyTrading, j'ai pu quitter mon emploi et vivre du trading. La qualité des cours est exceptionnelle."
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) => (current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-blue-deep/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Ce que disent nos <span className="text-neon-cyan">traders</span>
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-blue-deep/50 rounded-2xl p-8 md:p-12"
          >
            <Quote className="text-neon-cyan w-12 h-12 mb-6" />
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              {testimonials[currentIndex].text}
            </p>
            <div className="flex items-center gap-4">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-white">{testimonials[currentIndex].name}</h4>
                <p className="text-neon-cyan">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-blue-electric/20 hover:bg-blue-electric/40 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-neon-cyan" />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full bg-blue-electric/20 hover:bg-blue-electric/40 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-neon-cyan" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}