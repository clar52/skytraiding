import { motion } from 'framer-motion';

const team = [
  {
    name: "Jean Trader",
    role: "Expert Crypto",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80",
    delay: 0.1
  },
  {
    name: "Marie Analyste",
    role: "Spécialiste Forex",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=800&q=80",
    delay: 0.3
  },
  {
    name: "Pierre Expert",
    role: "Analyste Technique",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=800&q=80",
    delay: 0.5
  }
];

export default function Team() {
  return (
    <section id="equipe" className="py-20 bg-blue-deep">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Notre <span className="text-neon-cyan">Équipe</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: member.delay }}
              viewport={{ once: true }}
              className="group relative"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 10 }}
                transition={{ duration: 0.5 }}
                className="bg-blue-electric/10 p-6 rounded-xl border border-neon-cyan/20 group-hover:border-neon-cyan/50"
              >
                <div className="relative h-64 overflow-hidden rounded-lg mb-4">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-neon-cyan/10 group-hover:bg-transparent transition-all" />
                </div>
                <h3 className="text-xl font-bold text-neon-cyan">{member.name}</h3>
                <p className="text-gray-300">{member.role}</p>
              </motion.div>

              <div className="absolute -inset-1 bg-neon-cyan/30 blur-2xl opacity-0 group-hover:opacity-50 transition-all z-[-1]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}