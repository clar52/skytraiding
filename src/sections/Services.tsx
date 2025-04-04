import { motion } from 'framer-motion';
import { TrendingUp, Brain, LineChart } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <TrendingUp className="w-8 h-8 text-neon-cyan" />,
      title: "Trading Algorithmique",
      description: "Automatisez vos stratégies avec nos algorithmes avancés"
    },
    {
      icon: <Brain className="w-8 h-8 text-neon-cyan" />,
      title: "Formations Certifiantes",
      description: "Apprenez avec nos experts certifiés du trading"
    },
    {
      icon: <LineChart className="w-8 h-8 text-neon-cyan" />,
      title: "Analyse de Marché",
      description: "Accédez à des analyses détaillées en temps réel"
    }
  ];

  return (
    <section id="services" className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-16">Nos Services</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotateY: 10 }}
            className="bg-gradient-to-br from-blue-deep to-blue-electric p-6 rounded-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}