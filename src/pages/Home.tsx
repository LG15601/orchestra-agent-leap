import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

type ProfileType = 'admin' | 'commercial' | 'gestion' | 'support' | 'marketing';

const profiles = {
  admin: {
      emoji: "📋",
    title: "un Employé IA Admin",
    painPoint: "Trop d'emails, CRM en retard, factures oubliées...",
      color: "from-blue-500 to-cyan-500",
    capabilities: [
      "Trier et répondre aux emails",
      "Mettre à jour le CRM",
      "Générer les factures",
      "Préparer les devis",
      "Gérer les relances clients",
      "Organiser l'agenda",
      "Suivre les paiements",
      "Archiver les documents",
      "Créer des rapports",
      "Synchroniser les outils",
      "Rappeler les échéances",
      "Classer les contacts"
    ],
    commonTasks: [
      "Répondre aux emails clients",
      "Mettre à jour les fiches CRM",
      "Envoyer les factures",
      "Faire les relances de paiement",
      "Organiser les rendez-vous",
      "Préparer les devis",
      "Gérer les documents administratifs"
    ]
  },
  commercial: {
      emoji: "💼",
    title: "un Employé IA Commercial",
    painPoint: "Leads pas suivis, devis trop longs, relances oubliées...",
      color: "from-green-500 to-emerald-500",
    capabilities: [
      "Qualifier les leads",
      "Générer des devis",
      "Relancer les prospects",
      "Mettre à jour le pipeline",
      "Préparer les propositions",
      "Suivre les opportunités",
      "Enrichir les contacts",
      "Planifier les RDV",
      "Créer des présentations",
      "Analyser la concurrence",
      "Calculer les marges",
      "Négocier les conditions"
    ],
    commonTasks: [
      "Qualifier les nouveaux leads",
      "Générer et envoyer des devis",
      "Relancer les prospects",
      "Mettre à jour le pipeline de vente",
      "Préparer les propositions commerciales",
      "Planifier les rendez-vous clients",
      "Suivre les opportunités commerciales"
    ]
  },
  gestion: {
      emoji: "📊",
    title: "un Employé IA Gestion",
    painPoint: "Trésorerie mal suivie, fournisseurs mal gérés...",
      color: "from-purple-500 to-pink-500",
    capabilities: [
      "Suivre la trésorerie",
      "Gérer les fournisseurs",
      "Préparer les reportings",
      "Analyser les dépenses",
      "Optimiser les coûts",
      "Créer des tableaux de bord",
      "Anticiper les besoins",
      "Négocier les tarifs",
      "Suivre les budgets",
      "Contrôler les factures",
      "Préparer les prévisionnels",
      "Automatiser les paiements"
    ],
    commonTasks: [
      "Suivre la trésorerie quotidienne",
      "Gérer les relations fournisseurs",
      "Préparer les reportings financiers",
      "Analyser les dépenses",
      "Créer les tableaux de bord",
      "Contrôler les factures",
      "Faire les prévisionnels"
    ]
  },
  support: {
      emoji: "🎧",
    title: "un Employé IA Support",
    painPoint: "Clients qui attendent, questions répétitives...",
      color: "from-orange-500 to-red-500",
    capabilities: [
      "Répondre instantanément",
      "Créer des tickets",
      "Escalader les urgences",
      "Suivre les demandes",
      "Envoyer des solutions",
      "Former les clients",
      "Mettre à jour la FAQ",
      "Analyser la satisfaction",
      "Gérer les retours",
      "Programmer les rappels",
      "Documenter les cas",
      "Améliorer les processus"
    ],
    commonTasks: [
      "Répondre aux demandes clients",
      "Créer et gérer les tickets",
      "Escalader les urgences",
      "Suivre la satisfaction client",
      "Mettre à jour la base de connaissances",
      "Former les nouveaux clients",
      "Gérer les retours produits"
    ]
  },
  marketing: {
      emoji: "🎯",
    title: "un Employé IA Marketing",
    painPoint: "Pas de contenu, réseaux sociaux à l'abandon...",
      color: "from-yellow-500 to-orange-500",
    capabilities: [
      "Créer du contenu",
      "Gérer les réseaux sociaux",
      "Planifier les publications",
      "Optimiser les campagnes",
      "Analyser les performances",
      "Générer des visuels",
      "Rédiger les newsletters",
      "Faire du A/B testing",
      "Suivre les tendances",
      "Engager la communauté",
      "Créer des landing pages",
      "Optimiser le SEO"
    ],
    commonTasks: [
      "Créer du contenu pour les réseaux",
      "Planifier les publications",
      "Gérer les campagnes publicitaires",
      "Rédiger les newsletters",
      "Analyser les performances",
      "Optimiser le SEO",
      "Créer des visuels"
    ]
  }
};

const formSchema = z.object({
  profile: z.string().min(1),
  firstName: z.string().min(2, "Prénom requis"),
  lastName: z.string().min(2, "Nom requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(10, "Téléphone requis"),
  company: z.string().min(2, "Entreprise requise"),
  employeesCount: z.string().min(1, "Nombre d'employés requis"),
  sector: z.string().min(2, "Secteur requis"),
  mainProblems: z.array(z.string()).min(1, "Sélectionnez au moins un problème"),
  tasks: z.array(z.string()).min(1, "Sélectionnez au moins une tâche"),
  budget: z.string().min(1, "Budget requis"),
  additionalNeeds: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const Home = () => {
  const [selectedProfile, setSelectedProfile] = useState<ProfileType>('marketing');
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedProblems, setSelectedProblems] = useState<string[]>([]);
  const [selectedTasks, setSelectedTasks] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const totalSteps = 6;
  
  const profile = profiles[selectedProfile];

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { 
      profile: selectedProfile,
      mainProblems: [],
      tasks: []
    }
  });

  const handleProfileChange = (newProfile: ProfileType) => {
    setSelectedProfile(newProfile);
    setValue("profile", newProfile);
    setSelectedProblems([]);
    setSelectedTasks([]);
  };

  const toggleProblem = (problem: string) => {
    const newProblems = selectedProblems.includes(problem)
      ? selectedProblems.filter(p => p !== problem)
      : [...selectedProblems, problem];
    setSelectedProblems(newProblems);
    setValue("mainProblems", newProblems);
  };

  const toggleTask = (task: string) => {
    const newTasks = selectedTasks.includes(task)
      ? selectedTasks.filter(t => t !== task)
      : [...selectedTasks, task];
    setSelectedTasks(newTasks);
    setValue("tasks", newTasks);
  };

  const nextStep = async () => {
    let fieldsToValidate: any[] = [];
    
    if (currentStep === 1) fieldsToValidate = ["firstName", "lastName", "email", "phone"];
    if (currentStep === 2) fieldsToValidate = ["company", "employeesCount", "sector"];
    if (currentStep === 3) fieldsToValidate = ["mainProblems"];
    if (currentStep === 4) fieldsToValidate = ["tasks"];
    if (currentStep === 5) fieldsToValidate = ["budget"];
    
    const isValid = await trigger(fieldsToValidate as any);
    
    if (isValid && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const scrollToForm = () => {
    document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const onSubmit = async (data: FormData) => {
    try {
      // Sauvegarder dans Supabase
      const { error } = await supabase
        .from('leads')
        .insert([{
          profile: data.profile,
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          phone: data.phone,
          company: data.company,
          employees_count: data.employeesCount,
          sector: data.sector,
          main_problems: data.mainProblems,
          tasks: data.tasks,
          budget: data.budget,
          additional_needs: data.additionalNeeds || '',
        }]);

      if (error) {
        console.error("Supabase error:", error);
        throw error;
      }

      // Envoyer email de confirmation via Resend (optionnel)
      try {
        await fetch('/api/send-confirmation', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: data.email,
            firstName: data.firstName,
            profile: data.profile
          })
        });
      } catch (emailError) {
        console.log("Email non envoyé (normal si Resend pas configuré):", emailError);
      }

      setIsSubmitted(true);
      toast.success("🎉 Vous êtes sur la liste !");
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors de l'inscription. Veuillez réessayer.");
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="glass-strong rounded-[2rem] p-12 depth-4 text-center space-y-6 max-w-2xl"
        >
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <div className="w-3 h-6 border-r-2 border-b-2 border-white rotate-45 -translate-y-0.5" />
            </div>
          </div>
          
          <h3 className="text-4xl font-extralight text-white">
            Bienvenue dans l'ère des agents IA
          </h3>
          <p className="text-lg text-white/60 font-light leading-relaxed">
            Vous êtes maintenant sur la liste d'attente prioritaire.<br />
            Un expert vous contacte <span className="text-white font-normal">sous 2h</span>.
          </p>
          <p className="text-sm text-white/40 font-light">
            Vérifiez votre boîte mail pour la confirmation.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* Orbe animé */}
        <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r ${profile.color} rounded-full blur-[120px] opacity-20`}
      />

      {/* Contenu principal */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* Hero - Pain point + Titre harmonieux */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-8"
          >
            {/* Phrase complète harmonieuse */}
            <div className="space-y-4">
              <AnimatePresence mode="wait">
                <motion.p
                  key={`painpoint-${selectedProfile}`}
                  initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl font-light text-white/70 leading-relaxed"
                >
                  {profile.painPoint}
                </motion.p>
              </AnimatePresence>

              <h1 className="text-5xl md:text-7xl font-extralight text-white leading-[1.15] tracking-tight">
                Votre entreprise mérite
                <br />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={selectedProfile}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className={`bg-gradient-to-r ${profile.color} bg-clip-text text-transparent`}
                  >
                    {profile.title}
                  </motion.span>
                </AnimatePresence>
              </h1>
            </div>

            {/* Sélecteur de profil */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {(Object.keys(profiles) as ProfileType[]).map((key) => (
                <motion.button
                  key={key}
                  onClick={() => handleProfileChange(key)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    glass-subtle px-5 py-2.5 rounded-full text-sm font-light tracking-wide
                    transition-all duration-500 border
                    ${selectedProfile === key 
                      ? `border-white/20 bg-gradient-to-r ${profiles[key].color} bg-opacity-20` 
                      : 'border-white/5 hover:border-white/10'
                    }
                  `}
                >
                  <span className="text-base mr-1.5">{profiles[key].emoji}</span>
                  <span className={selectedProfile === key ? "text-white" : "text-white/60"}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* CTA rapide - En blanc */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.button
              onClick={scrollToForm}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glass-strong px-10 py-4 rounded-full font-light text-base text-white border border-white/20 hover:bg-white/5 transition-all glow-soft"
            >
              Rejoindre la liste d'attente
            </motion.button>
            <p className="text-xs text-white/40 font-light mt-3 tracking-wide">
              Faites partie des premiers à adopter les agents IA employés en France
            </p>
          </motion.div>

          {/* Mosaïque de capabilities */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`capabilities-${selectedProfile}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
            >
              {profile.capabilities.map((capability, index) => (
                <motion.div
                  key={capability}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.03 }}
                  className="glass-subtle rounded-xl p-4 depth-1 hover-lift text-center"
                >
                  <p className="text-sm font-light text-white/90">{capability}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Stats */}
              <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-subtle rounded-2xl p-6"
          >
            <div className="flex items-center justify-center gap-8 text-center">
              {[
                { value: "100+", label: "PME" },
                { value: "48h", label: "Installation" },
                { value: "4.8★", label: "Satisfaction" }
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-2xl font-extralight text-white">{stat.value}</p>
                  <p className="text-xs font-light text-white/40">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Formulaire multi-étapes */}
          <motion.form
            id="form"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            onSubmit={handleSubmit(onSubmit)}
            className="glass-strong rounded-[2rem] p-8 md:p-10 depth-3 space-y-8 max-w-2xl mx-auto"
          >
            {/* Header */}
            <div className="text-center space-y-3">
              <div className="glass-subtle inline-block px-4 py-1.5 rounded-full">
                <span className="text-xs font-light text-white/60 tracking-widest">
                  ÉTAPE {currentStep}/{totalSteps}
                </span>
              </div>
              <h3 className="text-2xl font-extralight text-white">Rejoignez la liste</h3>
            </div>

            {/* Progress bar */}
            <div className="h-px bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className={`h-full bg-gradient-to-r ${profile.color}`}
                initial={{ width: 0 }}
                animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                transition={{ duration: 0.6 }}
              />
            </div>

            <AnimatePresence mode="wait">
              {/* Étape 1 : Contact */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <h4 className="text-lg font-light text-white/90">Vos coordonnées</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Input
                        {...register("firstName")}
                        placeholder="Prénom"
                        className="bg-white/5 h-12 text-white rounded-xl border border-white/10 focus:border-white/20 placeholder:text-white/30"
                      />
                      {errors.firstName && <p className="text-xs text-red-400/80 mt-1">{errors.firstName.message}</p>}
                    </div>
                    <div>
                      <Input
                        {...register("lastName")}
                        placeholder="Nom"
                        className="bg-white/5 h-12 text-white rounded-xl border border-white/10 focus:border-white/20 placeholder:text-white/30"
                      />
                      {errors.lastName && <p className="text-xs text-red-400/80 mt-1">{errors.lastName.message}</p>}
                    </div>
                  </div>
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder="Email professionnel"
                    className="bg-white/5 h-12 text-white rounded-xl border border-white/10 focus:border-white/20 placeholder:text-white/30"
                  />
                  {errors.email && <p className="text-xs text-red-400/80">{errors.email.message}</p>}
                  <Input
                    {...register("phone")}
                    type="tel"
                    placeholder="Téléphone"
                    className="bg-white/5 h-12 text-white rounded-xl border border-white/10 focus:border-white/20 placeholder:text-white/30"
                  />
                  {errors.phone && <p className="text-xs text-red-400/80">{errors.phone.message}</p>}
              </motion.div>
              )}

              {/* Étape 2 : Entreprise */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <h4 className="text-lg font-light text-white/90">Votre entreprise</h4>
                  <Input
                    {...register("company")}
                    placeholder="Nom de l'entreprise"
                    className="bg-white/5 h-12 text-white rounded-xl border border-white/10 focus:border-white/20 placeholder:text-white/30"
                  />
                  {errors.company && <p className="text-xs text-red-400/80">{errors.company.message}</p>}
                  
                  <select
                    {...register("employeesCount")}
                    className="w-full bg-white/5 h-12 text-white rounded-xl border border-white/10 focus:border-white/20 px-4"
                  >
                    <option value="" className="bg-[#0a0a0a]">Nombre d'employés</option>
                    <option value="1-5" className="bg-[#0a0a0a]">1-5 personnes</option>
                    <option value="6-20" className="bg-[#0a0a0a]">6-20 personnes</option>
                    <option value="21-50" className="bg-[#0a0a0a]">21-50 personnes</option>
                    <option value="51+" className="bg-[#0a0a0a]">51+ personnes</option>
                  </select>
                  {errors.employeesCount && <p className="text-xs text-red-400/80">{errors.employeesCount.message}</p>}
                  
                  <Input
                    {...register("sector")}
                    placeholder="Secteur d'activité (ex: E-commerce, Consulting...)"
                    className="bg-white/5 h-12 text-white rounded-xl border border-white/10 focus:border-white/20 placeholder:text-white/30"
                  />
                  {errors.sector && <p className="text-xs text-red-400/80">{errors.sector.message}</p>}
                </motion.div>
              )}

              {/* Étape 3 : Problèmes */}
              {currentStep === 3 && (
            <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <h4 className="text-lg font-light text-white/90">Vos principaux défis</h4>
                  <p className="text-sm text-white/60 font-light">Sélectionnez tous les problèmes que vous rencontrez</p>
                  <div className="grid gap-2">
                    {['Manque de temps', 'Tâches répétitives', 'Erreurs humaines', 'Coûts trop élevés', 'Manque de suivi', 'Croissance bloquée'].map((problem) => (
                      <button
                        key={problem}
                        type="button"
                        onClick={() => toggleProblem(problem)}
                        className={`
                          glass-subtle p-3.5 rounded-xl text-left text-sm font-light transition-all
                          ${selectedProblems.includes(problem)
                            ? `border border-white/20 bg-gradient-to-r ${profile.color} bg-opacity-10 text-white`
                            : 'border border-white/5 text-white/60 hover:border-white/10'
                          }
                        `}
                      >
                        {problem}
                      </button>
                    ))}
                  </div>
                  {errors.mainProblems && <p className="text-xs text-red-400/80">{errors.mainProblems.message}</p>}
                </motion.div>
              )}

              {/* Étape 4 : Tâches */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <h4 className="text-lg font-light text-white/90">Tâches à automatiser</h4>
                  <p className="text-sm text-white/60 font-light">Que souhaitez-vous déléguer à votre agent IA ?</p>
                  <div className="grid gap-2 max-h-96 overflow-y-auto">
                    {profile.commonTasks.map((task) => (
                      <button
                        key={task}
                        type="button"
                        onClick={() => toggleTask(task)}
                        className={`
                          glass-subtle p-3.5 rounded-xl text-left text-sm font-light transition-all
                          ${selectedTasks.includes(task)
                            ? `border border-white/20 bg-gradient-to-r ${profile.color} bg-opacity-10 text-white`
                            : 'border border-white/5 text-white/60 hover:border-white/10'
                          }
                        `}
                      >
                        {task}
                      </button>
                    ))}
                  </div>
                  {errors.tasks && <p className="text-xs text-red-400/80">{errors.tasks.message}</p>}
                </motion.div>
              )}

              {/* Étape 5 : Budget */}
              {currentStep === 5 && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <h4 className="text-lg font-light text-white/90">Budget mensuel</h4>
                  <select
                    {...register("budget")}
                    className="w-full bg-white/5 h-12 text-white rounded-xl border border-white/10 focus:border-white/20 px-4"
                  >
                    <option value="" className="bg-[#0a0a0a]">Sélectionnez votre budget</option>
                    <option value="500-1000" className="bg-[#0a0a0a]">500-1000€/mois</option>
                    <option value="1000-2500" className="bg-[#0a0a0a]">1000-2500€/mois</option>
                    <option value="2500-5000" className="bg-[#0a0a0a]">2500-5000€/mois</option>
                    <option value="5000+" className="bg-[#0a0a0a]">5000€+/mois</option>
                  </select>
                  {errors.budget && <p className="text-xs text-red-400/80">{errors.budget.message}</p>}
                </motion.div>
              )}

              {/* Étape 6 : Besoins supplémentaires */}
              {currentStep === 6 && (
                <motion.div
                  key="step6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <h4 className="text-lg font-light text-white/90">Décrivez vos besoins</h4>
                  <p className="text-sm text-white/60 font-light">
                    Partagez-nous en quelques mots ce qui vous amène et vos attentes (optionnel)
                  </p>
                  <textarea
                    {...register("additionalNeeds")}
                    placeholder="Ex: Je cherche à automatiser mon service client car nous recevons plus de 50 demandes par jour et notre équipe est débordée..."
                    rows={6}
                    className="w-full bg-white/5 text-white rounded-xl border border-white/10 focus:border-white/20 placeholder:text-white/30 px-4 py-3 text-sm font-light resize-none"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex gap-3 pt-4">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex-1 glass-subtle py-3 rounded-xl text-sm font-light text-white/60 hover:text-white/80 transition-all"
                >
                  Retour
                </button>
              )}
              
              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex-1 glass-strong py-3 rounded-xl text-sm font-light text-white hover:bg-white/5 transition-all glow-soft border border-white/10"
                >
                  Suivant
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex-1 py-3 rounded-xl text-sm font-light bg-gradient-to-r ${profile.color} text-background hover:opacity-90 transition-opacity`}
                >
                  {isSubmitting ? "Envoi..." : "Rejoindre la liste"}
                </button>
              )}
          </div>
          </motion.form>

        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-light text-white/30 tracking-wide">
            Orchestra · 2026 · Agents IA pour PME françaises
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
