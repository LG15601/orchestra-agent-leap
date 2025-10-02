import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { useScenario, scenarioConfig } from "@/hooks/useScenario";

const formSchema = z.object({
  painPoint: z.string().min(1, "Sélectionnez votre défi"),
  firstName: z.string().min(2, "Prénom requis"),
  lastName: z.string().min(2, "Nom requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(10, "Téléphone requis"),
  company: z.string().min(2, "Entreprise requise"),
  role: z.string().min(2, "Fonction requise"),
  teamSize: z.string().min(1, "Taille équipe requise"),
  urgency: z.string().min(1, "Urgence requise"),
  budget: z.string().min(1, "Budget requis"),
});

type FormData = z.infer<typeof formSchema>;

const FormFuture = () => {
  const { scenario } = useScenario();
  const config = scenarioConfig[scenario];
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedPainPoint, setSelectedPainPoint] = useState("");
  const totalSteps = 4;

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const handlePainPointSelect = (painPoint: string) => {
    setSelectedPainPoint(painPoint);
    setValue("painPoint", painPoint);
  };

  const nextStep = async () => {
    let fieldsToValidate: any[] = [];
    
    if (currentStep === 1) fieldsToValidate = ["painPoint"];
    if (currentStep === 2) fieldsToValidate = ["firstName", "lastName", "email", "phone"];
    if (currentStep === 3) fieldsToValidate = ["company", "role", "teamSize"];
    
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

  const onSubmit = async (data: FormData) => {
    try {
      console.log("Lead complet:", { ...data, scenario });
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      toast.success("Parfait !", {
        description: "Vous êtes sur la liste prioritaire",
      });
    } catch (error) {
      toast.error("Erreur", { description: "Réessayez" });
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-32 px-6">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="glass-strong rounded-[2rem] p-12 depth-3 text-center space-y-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mx-auto w-20 h-20 glass-subtle rounded-full flex items-center justify-center"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <div className="w-3 h-6 border-r-2 border-b-2 border-white rotate-45 -translate-y-0.5" />
              </div>
            </motion.div>
            <h3 className="text-3xl font-extralight text-white">Vous êtes sur la liste</h3>
            <p className="text-white/60 font-light leading-relaxed">
              Nos experts vous contactent <span className="text-white font-normal">sous 2h</span> pour une démo personnalisée.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-2xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <div className="glass-subtle inline-block px-4 py-1.5 rounded-full">
            <span className="text-xs font-light text-white/60 tracking-widest">
              ÉTAPE {currentStep}/{totalSteps}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extralight text-white">
            Démarrez maintenant
          </h2>
        </motion.div>

        {/* Progress bar glassmorphique */}
        <div className="h-px bg-white/5 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-white/20 to-white/40"
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="glass-strong rounded-[2rem] p-10 depth-3 space-y-8">
          <AnimatePresence mode="wait">
            {/* Étape 1 */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-light text-white/90">Votre principal défi ?</h3>
                <div className="grid gap-3">
                  {config.painPoints.map((point) => (
                    <button
                      key={point}
                      type="button"
                      onClick={() => handlePainPointSelect(point)}
                      className={`glass-subtle p-5 rounded-2xl text-left transition-all-smooth hover-lift ${
                        selectedPainPoint === point
                          ? "border border-white/20 bg-white/5"
                          : "border border-white/5"
                      }`}
                    >
                      <span className={`text-sm font-light ${selectedPainPoint === point ? "text-white" : "text-white/60"}`}>
                        {point}
                      </span>
                    </button>
                  ))}
                </div>
                {errors.painPoint && (
                  <p className="text-xs text-red-400/80">{errors.painPoint.message}</p>
                )}
              </motion.div>
            )}

            {/* Étape 2 */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-light text-white/90">Vos coordonnées</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      {...register("firstName")}
                      placeholder="Prénom"
                      className="w-full glass-subtle px-5 py-4 rounded-2xl text-sm text-white placeholder:text-white/30 border border-white/5 focus:border-white/20 outline-none transition-all-smooth"
                    />
                    {errors.firstName && <p className="text-xs text-red-400/80 mt-1">{errors.firstName.message}</p>}
                  </div>
                  <div>
                    <input
                      {...register("lastName")}
                      placeholder="Nom"
                      className="w-full glass-subtle px-5 py-4 rounded-2xl text-sm text-white placeholder:text-white/30 border border-white/5 focus:border-white/20 outline-none transition-all-smooth"
                    />
                    {errors.lastName && <p className="text-xs text-red-400/80 mt-1">{errors.lastName.message}</p>}
                  </div>
                </div>
                <div>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Email professionnel"
                    className="w-full glass-subtle px-5 py-4 rounded-2xl text-sm text-white placeholder:text-white/30 border border-white/5 focus:border-white/20 outline-none transition-all-smooth"
                  />
                  {errors.email && <p className="text-xs text-red-400/80 mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="Téléphone"
                    className="w-full glass-subtle px-5 py-4 rounded-2xl text-sm text-white placeholder:text-white/30 border border-white/5 focus:border-white/20 outline-none transition-all-smooth"
                  />
                  {errors.phone && <p className="text-xs text-red-400/80 mt-1">{errors.phone.message}</p>}
                </div>
              </motion.div>
            )}

            {/* Étape 3 */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-light text-white/90">Votre entreprise</h3>
                <div>
                  <input
                    {...register("company")}
                    placeholder="Nom de l'entreprise"
                    className="w-full glass-subtle px-5 py-4 rounded-2xl text-sm text-white placeholder:text-white/30 border border-white/5 focus:border-white/20 outline-none transition-all-smooth"
                  />
                  {errors.company && <p className="text-xs text-red-400/80 mt-1">{errors.company.message}</p>}
                </div>
                <div>
                  <input
                    {...register("role")}
                    placeholder="Votre fonction"
                    className="w-full glass-subtle px-5 py-4 rounded-2xl text-sm text-white placeholder:text-white/30 border border-white/5 focus:border-white/20 outline-none transition-all-smooth"
                  />
                  {errors.role && <p className="text-xs text-red-400/80 mt-1">{errors.role.message}</p>}
                </div>
                <div>
                  <select
                    {...register("teamSize")}
                    className="w-full glass-subtle px-5 py-4 rounded-2xl text-sm text-white border border-white/5 focus:border-white/20 outline-none transition-all-smooth appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-black">Taille de l'équipe</option>
                    <option value="1-5" className="bg-black">1-5 personnes</option>
                    <option value="6-20" className="bg-black">6-20 personnes</option>
                    <option value="21-50" className="bg-black">21-50 personnes</option>
                    <option value="51+" className="bg-black">51+ personnes</option>
                  </select>
                  {errors.teamSize && <p className="text-xs text-red-400/80 mt-1">{errors.teamSize.message}</p>}
                </div>
              </motion.div>
            )}

            {/* Étape 4 */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-light text-white/90">Votre projet</h3>
                <div>
                  <select
                    {...register("urgency")}
                    className="w-full glass-subtle px-5 py-4 rounded-2xl text-sm text-white border border-white/5 focus:border-white/20 outline-none transition-all-smooth appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-black">Quand souhaitez-vous démarrer ?</option>
                    <option value="immediate" className="bg-black">Immédiatement</option>
                    <option value="1month" className="bg-black">Dans le mois</option>
                    <option value="3months" className="bg-black">Dans 3 mois</option>
                    <option value="exploration" className="bg-black">En exploration</option>
                  </select>
                  {errors.urgency && <p className="text-xs text-red-400/80 mt-1">{errors.urgency.message}</p>}
                </div>
                <div>
                  <select
                    {...register("budget")}
                    className="w-full glass-subtle px-5 py-4 rounded-2xl text-sm text-white border border-white/5 focus:border-white/20 outline-none transition-all-smooth appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-black">Budget mensuel envisagé</option>
                    <option value="500-1000" className="bg-black">500-1000€</option>
                    <option value="1000-2500" className="bg-black">1000-2500€</option>
                    <option value="2500-5000" className="bg-black">2500-5000€</option>
                    <option value="5000+" className="bg-black">5000€+</option>
                  </select>
                  {errors.budget && <p className="text-xs text-red-400/80 mt-1">{errors.budget.message}</p>}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex gap-3 pt-4">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="flex-1 glass-subtle py-4 rounded-2xl text-sm font-light text-white/60 hover-lift"
              >
                Retour
              </button>
            )}
            
            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={nextStep}
                className="flex-1 glass-strong py-4 rounded-2xl text-sm font-light text-white hover-lift glow-soft"
              >
                Suivant
              </button>
            ) : (
              <button
                type="submit"
                className="flex-1 glass-strong py-4 rounded-2xl text-sm font-light text-white hover-lift glow-medium"
              >
                Rejoindre
              </button>
            )}
          </div>

          <p className="text-xs text-white/30 text-center font-light tracking-wide pt-2">
            Données sécurisées · France · Réponse sous 2h
          </p>
        </form>
      </div>
    </section>
  );
};

export default FormFuture;

