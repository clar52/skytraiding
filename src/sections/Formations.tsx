import { motion } from "framer-motion";

const steps = [
  {
    title: "Module 1 : Bases du Trading",
    duration: "2 semaines",
  },
  {
    title: "Module 2 : Stratégies Avancées",
    duration: "4 semaines",
  },
  {
    title: "Module 3 : Algorithmes",
    duration: "6 semaines",
  },
];

export default function Formations() {
  return (
    <section id="formations" className="py-20 bg-blue-deep">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-neon-cyan mb-12">
          Parcours de <span className="text-white">Formation</span>
        </h2>
        
        <div className="relative">
          <div className="absolute left-1/2 h-full w-1 bg-neon-cyan/30 transform -translate-x-1/2" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`mb-12 flex ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
            >
              <div className="w-1/2 px-8">
                <div className="bg-blue-deep p-6 rounded-lg border border-neon-cyan/20">
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <p className="text-neon-cyan mt-2">{step.duration}</p>
                </div>
              </div>
              <div className="w-1/2 flex justify-center">
                <div className="h-8 w-8 rounded-full bg-neon-cyan flex items-center justify-center">
                  <span className="text-blue-deep font-bold">{index + 1}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}