import { motion } from "framer-motion";
import { Sparkles, Users, Zap, Crown } from "lucide-react";
import { Link } from "react-router-dom";

const EarlyAccessSection = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background avec effet de profondeur */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-full blur-[150px]"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="glass-strong rounded-[3rem] p-12 md:p-16 depth-4 border-2 border-primary/20">
          {/* Badge premium */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-3 glass-subtle px-6 py-3 rounded-full border border-primary/30">
              <Crown className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm font-semibold gradient-text">ACCÈS PRIVILÉGIÉ</span>
            </div>
          </motion.div>

          {/* Titre principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center space-y-6 mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Soyez les premiers à obtenir{" "}
              <span className="gradient-text">
                des Agents IA qui agissent
              </span>
              <br />
              <span className="gradient-text">comme vos employés</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Rejoignez l'élite des PME françaises qui transforment leur business avec l'IA de nouvelle génération
            </p>
          </motion.div>

          {/* Bénéfices exclusifs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Installation 48h",
                description: "Opérationnel cette semaine"
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Places limitées",
                description: "Seulement 20 PME/mois"
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "Remise Early Bird",
                description: "-30% à vie garanti"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 rounded-2xl text-center space-y-3 hover:scale-105 transition-transform"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Urgence et social proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Compteur dynamique */}
            <div className="glass-subtle rounded-2xl p-6 border border-primary/20">
              <div className="flex items-center justify-center gap-8">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-3xl font-bold gradient-text">127</span>
                  </div>
                  <p className="text-xs text-muted-foreground">PME déjà inscrites</p>
                </div>
                
                <div className="w-px h-12 bg-border" />
                
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                    <span className="text-3xl font-bold gradient-text">13</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Places restantes ce mois</p>
                </div>
              </div>
            </div>

            {/* CTA principal */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              <a
                href="#contact"
                className="block w-full py-6 rounded-2xl bg-gradient-to-r from-primary via-accent to-secondary text-center font-bold text-lg text-background hover:opacity-90 transition-opacity shadow-2xl glow-strong"
              >
                <span className="flex items-center justify-center gap-3">
                  <Sparkles className="w-6 h-6" />
                  Rejoindre l'élite des PME IA
                  <Sparkles className="w-6 h-6" />
                </span>
              </a>
              {/* Effet de brillance au hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer pointer-events-none" />
            </motion.div>

            {/* Reassurance finale */}
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Réponse sous 2h</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Sans engagement</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>100% France</span>
              </div>
            </div>
          </motion.div>

          {/* Témoignage puissant */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 pt-12 border-t border-white/5"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold shrink-0">
                M
              </div>
              <div className="flex-1">
                <p className="text-foreground italic mb-3 leading-relaxed">
                  "En 3 mois, mon agent IA a traité plus de 500 demandes clients et récupéré 15h par semaine. 
                  Le ROI a été immédiat. Je regrette juste de ne pas avoir commencé plus tôt."
                </p>
                <div className="flex items-center gap-3">
                  <div>
                    <p className="font-semibold text-foreground">Marc Durand</p>
                    <p className="text-sm text-muted-foreground">CEO, TechConsult • 22 employés</p>
                  </div>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(i => (
                      <span key={i} className="text-yellow-500">⭐</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessSection;

