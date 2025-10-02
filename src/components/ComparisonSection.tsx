import { Zap, MessageSquare } from "lucide-react";
import { useScenario, scenarioConfig } from "@/hooks/useScenario";
import { motion } from "framer-motion";

const ComparisonSection = () => {
  const { scenario } = useScenario();
  const config = scenarioConfig[scenario];
  
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            key={`comparison-title-${scenario}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold"
          >
            Votre quotidien <span className={`bg-gradient-to-r ${config.color} bg-clip-text text-transparent`}>AVANT vs APRÈS</span> votre agent IA
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            La transformation concrète de votre PME au quotidien
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* AVANT - Left side */}
          <div className="glass-card p-8 rounded-2xl border border-destructive/30 space-y-6 opacity-80">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/20">
                <MessageSquare className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold text-muted-foreground">😰 AVANT Orchestra</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="text-destructive text-xl">⏰</span>
                <div>
                  <p className="font-semibold text-muted-foreground">2h/jour perdues en administratif</p>
                  <p className="text-sm text-muted-foreground">Emails, relances, saisies manuelles...</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <span className="text-destructive text-xl">📧</span>
                <div>
                  <p className="font-semibold text-muted-foreground">Oublis de relances clients</p>
                  <p className="text-sm text-muted-foreground">Opportunités perdues, clients mécontents</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <span className="text-destructive text-xl">📊</span>
                <div>
                  <p className="font-semibold text-muted-foreground">CRM jamais à jour</p>
                  <p className="text-sm text-muted-foreground">Perte d'infos, manque de visibilité</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <span className="text-destructive text-xl">📈</span>
                <div>
                  <p className="font-semibold text-muted-foreground">Reporting fait le dimanche</p>
                  <p className="text-sm text-muted-foreground">Week-end sacrifié, épuisement</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* APRÈS - Right side */}
          <div className={`glass-card p-8 rounded-2xl border-2 glow-effect space-y-6`} style={{ borderColor: `rgb(var(--primary) / 0.5)` }}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${config.color}`}>
                <Zap className="w-6 h-6 text-background" />
              </div>
              <h3 className={`text-2xl font-bold bg-gradient-to-r ${config.color} bg-clip-text text-transparent`}>
                😎 APRÈS votre {config.title}
              </h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="text-primary text-xl">✅</span>
                <div>
                  <p className="font-semibold text-foreground">2h récupérées chaque jour</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <span className="text-primary text-xl">✅</span>
                <div>
                  <p className="font-semibold text-foreground">Zéro oubli, tout automatisé</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <span className="text-primary text-xl">✅</span>
                <div>
                  <p className="font-semibold text-foreground">Données à jour en temps réel</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <span className="text-primary text-xl">✅</span>
                <div>
                  <p className="font-semibold text-foreground">Résultats dès la semaine 1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
