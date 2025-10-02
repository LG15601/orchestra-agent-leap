import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ScenarioType = 'admin' | 'commercial' | 'gestion' | 'support' | 'marketing';

interface ScenarioStore {
  scenario: ScenarioType;
  setScenario: (scenario: ScenarioType) => void;
}

export const useScenario = create<ScenarioStore>()(
  persist(
    (set) => ({
      scenario: 'admin',
      setScenario: (scenario) => set({ scenario }),
    }),
    {
      name: 'orchestra-scenario',
    }
  )
);

export const scenarioConfig = {
  admin: {
    title: "Employé IA Admin",
    color: "from-blue-500 to-cyan-500",
    icon: "📋",
    tagline: "Déjà adopté par 100+ PME françaises",
    headline: "Vous perdez 2h par jour en tâches administratives ?",
    subheadline: "Votre entreprise a besoin d'un employé IA",
    description: "Un agent IA ultra-performant qui gère vos emails, votre CRM, votre compta... pendant que vous développez votre business.",
    painPoints: [
      "Trop d'emails à traiter",
      "CRM pas à jour",
      "Facturation en retard",
      "Planning désorganisé",
      "Autre"
    ],
    benefits: [
      { title: "Emails triés & répondus", description: "Votre agent IA traite les emails courants instantanément", result: "2h/jour récupérées" },
      { title: "CRM toujours à jour", description: "Mise à jour automatique après chaque interaction client", result: "-80% d'erreurs" },
      { title: "Facturation automatisée", description: "De la commande à l'encaissement, zéro friction", result: "15% de cash-flow" }
    ]
  },
  commercial: {
    title: "Employé IA Commercial",
    color: "from-green-500 to-emerald-500",
    icon: "💼",
    tagline: "Les équipes commerciales augmentent leur CA de 40%",
    headline: "Vos commerciaux passent 60% de leur temps sur de l'admin ?",
    subheadline: "Libérez-les avec un agent IA dédié",
    description: "Un employé IA qui qualifie vos leads, prépare vos devis, relance vos prospects... Vos commerciaux se concentrent sur la vente.",
    painPoints: [
      "Leads pas suivis",
      "Devis trop longs à faire",
      "Relances oubliées",
      "Pipeline désorganisé",
      "Autre"
    ],
    benefits: [
      { title: "Qualification automatique", description: "Votre agent IA identifie et qualifie les meilleurs leads", result: "+40% de conversions" },
      { title: "Devis en 5 minutes", description: "Génération automatique de devis personnalisés", result: "3x plus de devis" },
      { title: "Relances intelligentes", description: "Suivi automatique de chaque prospect au bon moment", result: "+25% de closing" }
    ]
  },
  gestion: {
    title: "Employé IA Gestion",
    color: "from-purple-500 to-pink-500",
    icon: "📊",
    tagline: "Gestion simplifiée pour dirigeants occupés",
    headline: "Vous noyez sous la gestion administrative ?",
    subheadline: "Un agent IA pour piloter votre PME",
    description: "Un employé IA qui suit votre trésorerie, gère vos fournisseurs, prépare vos reportings... Reprenez le contrôle sans le stress.",
    painPoints: [
      "Trésorerie mal suivie",
      "Fournisseurs mal gérés",
      "Pas de visibilité",
      "Retards administratifs",
      "Autre"
    ],
    benefits: [
      { title: "Tableau de bord temps réel", description: "Visualisez votre activité en un coup d'œil", result: "Décisions 5x plus rapides" },
      { title: "Gestion fournisseurs", description: "Commandes, factures, paiements automatisés", result: "-30% de coûts admin" },
      { title: "Reporting automatique", description: "Rapports financiers et opérationnels générés", result: "10h/mois économisées" }
    ]
  },
  support: {
    title: "Employé IA Support",
    color: "from-orange-500 to-red-500",
    icon: "🎧",
    tagline: "Support client disponible 24/7",
    headline: "Vos clients attendent des heures avant une réponse ?",
    subheadline: "Déployez un agent IA support",
    description: "Un employé IA qui répond aux questions courantes, crée des tickets, escalade les urgences... Satisfaction client garantie.",
    painPoints: [
      "Temps de réponse trop long",
      "Questions répétitives",
      "Équipe débordée",
      "Clients insatisfaits",
      "Autre"
    ],
    benefits: [
      { title: "Réponses instantanées", description: "Votre agent IA répond en < 30 secondes, 24/7", result: "+60% satisfaction" },
      { title: "Résolution automatique", description: "80% des questions résolues sans intervention humaine", result: "-70% de tickets" },
      { title: "Escalade intelligente", description: "Les cas complexes arrivent directement aux experts", result: "+50% d'efficacité" }
    ]
  },
  marketing: {
    title: "Employé IA Marketing",
    color: "from-yellow-500 to-orange-500",
    icon: "🎯",
    tagline: "Marketing automation pour PME",
    headline: "Pas de temps pour votre marketing digital ?",
    subheadline: "Votre agent IA s'en occupe",
    description: "Un employé IA qui crée du contenu, gère vos réseaux sociaux, optimise vos campagnes... Visibilité maximale, effort minimal.",
    painPoints: [
      "Pas de contenu régulier",
      "Réseaux sociaux à l'abandon",
      "Campagnes pas optimisées",
      "Pas de temps",
      "Autre"
    ],
    benefits: [
      { title: "Contenu automatisé", description: "Articles, posts, newsletters générés et publiés", result: "10x plus de contenu" },
      { title: "Social media management", description: "Publication et engagement automatiques", result: "+200% d'audience" },
      { title: "Campagnes optimisées", description: "A/B testing et optimisation continue", result: "-40% coût/lead" }
    ]
  }
};

