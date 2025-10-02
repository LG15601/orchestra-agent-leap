import { Zap, TrendingUp, Clock } from "lucide-react";
import { useScenario, scenarioConfig } from "@/hooks/useScenario";
import { motion } from "framer-motion";

const UseCasesSection = () => {
  const { scenario } = useScenario();
  const config = scenarioConfig[scenario];

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            key={`use-cases-title-${scenario}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold"
          >
            Comment votre <span className={`bg-gradient-to-r ${config.color} bg-clip-text text-transparent`}>
              {config.title}
            </span> transforme votre quotidien
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Des résultats concrets dès la première semaine
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {config.benefits.map((benefit, index) => (
            <motion.div
              key={`${scenario}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 space-y-6 group hover:scale-105"
            >
              <div className="space-y-3">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${config.color} w-fit group-hover:scale-110 transition-transform`}>
                  {index === 0 && <Zap className="w-8 h-8 text-background" />}
                  {index === 1 && <TrendingUp className="w-8 h-8 text-background" />}
                  {index === 2 && <Clock className="w-8 h-8 text-background" />}
                </div>
                <h3 className="text-2xl font-bold text-foreground">{benefit.title}</h3>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>

              <div className={`pt-4 border-t-2 border-gradient-to-r ${config.color}`}>
                <p className={`text-base font-bold bg-gradient-to-r ${config.color} bg-clip-text text-transparent`}>
                  💡 {benefit.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof rapide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16 space-y-6"
        >
          <div className="glass-card inline-flex items-center gap-8 px-8 py-4 rounded-full">
            <div className="text-center">
              <p className="text-2xl font-bold gradient-text">100+</p>
              <p className="text-xs text-muted-foreground">PME équipées</p>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <p className="text-2xl font-bold gradient-text">48h</p>
              <p className="text-xs text-muted-foreground">installation</p>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <p className="text-2xl font-bold gradient-text">4.8/5</p>
              <p className="text-xs text-muted-foreground">satisfaction</p>
            </div>
          </div>
          
          <a
            href="#contact"
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r ${config.color} text-background font-semibold text-lg hover:scale-105 transition-transform shadow-lg`}
          >
            <Zap className="w-5 h-5" />
            Démarrer maintenant
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCasesSection;
