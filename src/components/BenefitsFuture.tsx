import { motion } from "framer-motion";
import { useScenario, scenarioConfig } from "@/hooks/useScenario";

const BenefitsFuture = () => {
  const { scenario } = useScenario();
  const config = scenarioConfig[scenario];

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Header minimaliste */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl md:text-6xl font-extralight text-white">
            Résultats mesurables
          </h2>
          <p className="text-white/50 font-light text-lg">
            Dès la première semaine
          </p>
        </motion.div>

        {/* Grille de bénéfices */}
        <div className="grid md:grid-cols-3 gap-6">
          {config.benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-ultra rounded-[2rem] p-8 depth-2 hover-lift group"
            >
              <div className="space-y-6">
                {/* Icône minimaliste */}
                <div className="w-12 h-12 rounded-2xl glass-subtle flex items-center justify-center group-hover:scale-110 transition-transform-smooth">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-white/20 to-white/5" />
                </div>

                {/* Contenu */}
                <div className="space-y-3">
                  <h3 className="text-xl font-light text-white">{benefit.title}</h3>
                  <p className="text-sm font-light text-white/50 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Résultat */}
                <div className="pt-4 border-t border-white/5">
                  <p className="text-xs font-light text-white/80 tracking-wide">
                    {benefit.result}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats minimalistes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-subtle rounded-[2rem] p-12"
        >
          <div className="grid grid-cols-4 gap-8">
            {[
              { value: "100+", label: "PME équipées" },
              { value: "48h", label: "Installation" },
              { value: "10h", label: "Gagnées/semaine" },
              { value: "4.8", label: "Satisfaction" }
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <p className="text-4xl font-extralight text-white">{stat.value}</p>
                <p className="text-xs font-light text-white/40 tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsFuture;

