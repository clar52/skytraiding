import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contactez-nous</h2>
        <form className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Votre email"
              className="w-full px-4 py-3 rounded-lg bg-blue-deep border border-blue-electric focus:outline-none focus:border-neon-cyan transition-colors"
            />
          </div>
          <div>
            <textarea
              placeholder="Votre message"
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-blue-deep border border-blue-electric focus:outline-none focus:border-neon-cyan transition-colors"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-turquoise-cta hover:bg-opacity-90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_15px_#2dd4bf] flex items-center justify-center mx-auto gap-2"
          >
            Envoyer <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </div>
    </section>
  );
}