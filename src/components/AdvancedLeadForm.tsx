import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { ArrowRight, CheckCircle2, ArrowLeft, Zap } from "lucide-react";
import { useScenario, scenarioConfig } from "@/hooks/useScenario";
import { motion, AnimatePresence } from "framer-motion";

const formSchema = z.object({
  // Étape 1 - Pain Point
  painPoint: z.string().min(1, "Sélectionnez votre principal défi"),
  
  // Étape 2 - Contact
  firstName: z.string().min(2, "Prénom requis"),
  lastName: z.string().min(2, "Nom requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(10, "Téléphone requis"),
  
  // Étape 3 - Entreprise
  company: z.string().min(2, "Nom d'entreprise requis"),
  role: z.string().min(2, "Fonction requise"),
  teamSize: z.string().min(1, "Taille d'équipe requise"),
  
  // Étape 4 - Projet
  urgency: z.string().min(1, "Urgence requise"),
  budget: z.string().min(1, "Budget requis"),
});

type FormData = z.infer<typeof formSchema>;

const AdvancedLeadForm = () => {
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
      <section id="contact" className="py-24 px-4">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-card p-12 rounded-3xl text-center space-y-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className={`mx-auto w-20 h-20 bg-gradient-to-br ${config.color} rounded-full flex items-center justify-center`}
            >
              <CheckCircle2 className="w-12 h-12 text-background" />
            </motion.div>
            <h3 className="text-3xl font-bold">Vous êtes sur la liste ! 🎉</h3>
            <p className="text-muted-foreground">
              Nos experts vous contactent <span className="font-semibold text-foreground">sous 2h</span> pour une démo personnalisée de votre {config.title}.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-medium text-muted-foreground">
              Étape {currentStep} sur {totalSteps}
            </span>
            <span className="text-sm font-medium text-primary">
              {Math.round((currentStep / totalSteps) * 100)}%
            </span>
          </div>
          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${config.color}`}
              initial={{ width: 0 }}
              animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="glass-card p-8 rounded-3xl space-y-6">
          <AnimatePresence mode="wait">
            {/* Étape 1 - Pain Point */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold">
                  {config.icon} Quel est votre principal défi ?
                </h3>
                <div className="grid gap-2">
                  {config.painPoints.map((point) => (
                    <button
                      key={point}
                      type="button"
                      onClick={() => handlePainPointSelect(point)}
                      className={`p-4 rounded-xl text-left transition-all ${
                        selectedPainPoint === point
                          ? `bg-gradient-to-r ${config.color} text-background font-semibold`
                          : "glass-card hover:border-primary/50"
                      }`}
                    >
                      {point}
                    </button>
                  ))}
                </div>
                {errors.painPoint && (
                  <p className="text-sm text-destructive">{errors.painPoint.message}</p>
                )}
              </motion.div>
            )}

            {/* Étape 2 - Contact */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold">Vos coordonnées</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Input {...register("firstName")} placeholder="Prénom" className="h-12" />
                    {errors.firstName && <p className="text-xs text-destructive mt-1">{errors.firstName.message}</p>}
                  </div>
                  <div>
                    <Input {...register("lastName")} placeholder="Nom" className="h-12" />
                    {errors.lastName && <p className="text-xs text-destructive mt-1">{errors.lastName.message}</p>}
                  </div>
                </div>
                <div>
                  <Input {...register("email")} type="email" placeholder="Email professionnel" className="h-12" />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <Input {...register("phone")} type="tel" placeholder="Téléphone" className="h-12" />
                  {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone.message}</p>}
                </div>
              </motion.div>
            )}

            {/* Étape 3 - Entreprise */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold">Votre entreprise</h3>
                <div>
                  <Input {...register("company")} placeholder="Nom de l'entreprise" className="h-12" />
                  {errors.company && <p className="text-xs text-destructive mt-1">{errors.company.message}</p>}
                </div>
                <div>
                  <Input {...register("role")} placeholder="Votre fonction" className="h-12" />
                  {errors.role && <p className="text-xs text-destructive mt-1">{errors.role.message}</p>}
                </div>
                <div>
                  <select
                    {...register("teamSize")}
                    className="w-full h-12 px-3 rounded-xl border border-border bg-background"
                  >
                    <option value="">Taille de l'équipe</option>
                    <option value="1-5">1-5 personnes</option>
                    <option value="6-20">6-20 personnes</option>
                    <option value="21-50">21-50 personnes</option>
                    <option value="51+">51+ personnes</option>
                  </select>
                  {errors.teamSize && <p className="text-xs text-destructive mt-1">{errors.teamSize.message}</p>}
                </div>
              </motion.div>
            )}

            {/* Étape 4 - Projet */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold">Votre projet</h3>
                <div>
                  <select
                    {...register("urgency")}
                    className="w-full h-12 px-3 rounded-xl border border-border bg-background"
                  >
                    <option value="">Quand souhaitez-vous démarrer ?</option>
                    <option value="immediate">Immédiatement</option>
                    <option value="1month">Dans le mois</option>
                    <option value="3months">Dans 3 mois</option>
                    <option value="exploration">En exploration</option>
                  </select>
                  {errors.urgency && <p className="text-xs text-destructive mt-1">{errors.urgency.message}</p>}
                </div>
                <div>
                  <select
                    {...register("budget")}
                    className="w-full h-12 px-3 rounded-xl border border-border bg-background"
                  >
                    <option value="">Budget mensuel envisagé</option>
                    <option value="500-1000">500-1000€</option>
                    <option value="1000-2500">1000-2500€</option>
                    <option value="2500-5000">2500-5000€</option>
                    <option value="5000+">5000€+</option>
                  </select>
                  {errors.budget && <p className="text-xs text-destructive mt-1">{errors.budget.message}</p>}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex gap-3 pt-4">
            {currentStep > 1 && (
              <Button
                type="button"
                onClick={prevStep}
                variant="outline"
                className="flex-1 h-12"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour
              </Button>
            )}
            
            {currentStep < totalSteps ? (
              <Button
                type="button"
                onClick={nextStep}
                className={`flex-1 h-12 bg-gradient-to-r ${config.color} hover:opacity-90`}
              >
                Suivant
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                type="submit"
                className={`flex-1 h-12 bg-gradient-to-r ${config.color} hover:opacity-90`}
              >
                <Zap className="w-4 h-4 mr-2" />
                Rejoindre la liste
              </Button>
            )}
          </div>

          <p className="text-xs text-muted-foreground text-center pt-2">
            🔒 Données sécurisées • 🇫🇷 France • ⚡ Réponse sous 2h
          </p>
        </form>
      </div>
    </section>
  );
};

export default AdvancedLeadForm;

