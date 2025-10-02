import { Target, Workflow, Users2, TrendingUp } from "lucide-react";
import { useScenario, scenarioConfig } from "@/hooks/useScenario";
import { motion } from "framer-motion";

const ReassuranceSection = () => {
  const { scenario } = useScenario();
  const config = scenarioConfig[scenario];
  
  const features = [
    {
      icon: Target,
      title: "Agent IA spécialisé",
      description: "Employé IA formé spécifiquement pour votre secteur et vos processus métier",
    },
    {
      icon: Workflow,
      title: "Intégration à vos outils",
      description: "Connexion native à +500 applications (CRM, email, comptabilité...)",
    },
    {
      icon: Users2,
      title: "Vous gardez le contrôle",
      description: "Pas de boîte noire. Vous supervisez votre agent IA en toute transparence",
    },
    {
      icon: TrendingUp,
      title: "ROI immédiat",
      description: "Des résultats visibles dès les premiers jours, pas dans 6 mois",
    },
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full"
          >
            <span className="text-2xl">⭐⭐⭐⭐⭐</span>
            <span className="font-semibold">4.8/5 par 100+ dirigeants PME</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold"
          >
            Ce que disent nos clients
          </motion.h2>
        </div>
        
        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="glass-card p-6 rounded-2xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-lg font-bold">
                J
              </div>
              <div>
                <p className="font-semibold">Jean M.</p>
                <p className="text-sm text-muted-foreground">Dirigeant PME BTP</p>
              </div>
            </div>
            <p className="text-muted-foreground italic">
              "Mon employé IA gère tout l'administratif. J'ai récupéré 15h par semaine que je passe maintenant sur mes chantiers et avec mes clients."
            </p>
          </div>
          
          <div className="glass-card p-6 rounded-2xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-lg font-bold">
                S
              </div>
              <div>
                <p className="font-semibold">Sophie L.</p>
                <p className="text-sm text-muted-foreground">Gérante commerce</p>
              </div>
            </div>
            <p className="text-muted-foreground italic">
              "Mon agent IA commercial a transformé mon activité : +20% de CA en 3 mois grâce aux relances automatiques et au suivi des leads."
            </p>
          </div>
          
          <div className="glass-card p-6 rounded-2xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-lg font-bold">
                M
              </div>
              <div>
                <p className="font-semibold">Marc D.</p>
                <p className="text-sm text-muted-foreground">Consultant</p>
              </div>
            </div>
            <p className="text-muted-foreground italic">
              "Grâce à mon agent IA, je passe 2x plus de temps avec mes clients. L'administratif se fait tout seul en arrière-plan."
            </p>
          </div>
        </div>
        
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold"
          >
            Pourquoi les agents IA Orchestra ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Des employés IA pensés pour les PME françaises
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional trust elements */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="glass-card p-6 rounded-2xl text-center space-y-2">
            <span className="text-4xl">🔒</span>
            <p className="font-semibold text-foreground">Vos données restent en France</p>
            <p className="text-sm text-muted-foreground">Conformité RGPD totale</p>
          </div>
          
          <div className="glass-card p-6 rounded-2xl text-center space-y-2">
            <span className="text-4xl">⚡</span>
            <p className="font-semibold text-foreground">Installation sans IT, en 48h</p>
            <p className="text-sm text-muted-foreground">Opérationnel dès cette semaine</p>
          </div>
          
          <div className="glass-card p-6 rounded-2xl text-center space-y-2">
            <span className="text-4xl">🎯</span>
            <p className="font-semibold text-foreground">Support humain 7j/7 en français</p>
            <p className="text-sm text-muted-foreground">Une vraie équipe à votre écoute</p>
          </div>
          
          <div className="glass-card p-6 rounded-2xl text-center space-y-2">
            <span className="text-4xl">💰</span>
            <p className="font-semibold text-foreground">Sans engagement</p>
            <p className="text-sm text-muted-foreground">Arrêt à tout moment</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReassuranceSection;
