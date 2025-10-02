import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useScenario, scenarioConfig } from "@/hooks/useScenario";
import { Zap, CheckCircle2, Sparkles } from "lucide-react";

const formSchema = z.object({
  painPoint: z.string().min(1, "Sélectionnez votre défi"),
  email: z.string().trim().email("Email invalide").max(255),
});

type FormData = z.infer<typeof formSchema>;

const SimpleConversionForm = () => {
  const { scenario } = useScenario();
  const config = scenarioConfig[scenario];
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedPainPoint, setSelectedPainPoint] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const handlePainPointSelect = (painPoint: string) => {
    setSelectedPainPoint(painPoint);
    setValue("painPoint", painPoint);
  };

  const onSubmit = async (data: FormData) => {
    try {
      console.log("Lead simplifié:", { ...data, scenario });
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      toast.success("🎉 Inscription réussie !", {
        description: "Nos experts vous contactent sous 2h",
      });
    } catch (error) {
      toast.error("Erreur", { description: "Veuillez réessayer" });
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-32 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-[2rem] p-12 depth-4 text-center space-y-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20"
            >
              <CheckCircle2 className="w-12 h-12 text-primary" />
            </motion.div>
            
            <div className="space-y-4">
              <h3 className="text-4xl md:text-5xl font-bold gradient-text">
                Vous êtes sur la liste ! 🎉
              </h3>
              <p className="text-xl text-muted-foreground max-w-lg mx-auto">
                Un expert Orchestra vous contacte <span className="text-foreground font-bold">sous 2h</span> pour vous montrer votre futur employé IA.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 space-y-3 text-left">
              <p className="text-sm text-muted-foreground font-medium">Ce que vous allez recevoir :</p>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm text-foreground">Démo personnalisée de 15 min</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm text-foreground">Audit gratuit de vos processus</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm text-foreground">Plan d'action sur mesure</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5">
              <p className="text-sm text-muted-foreground">
                Consultez votre boîte mail. Vous recevrez également un email de confirmation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-12"
        >
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full">
            <Zap className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium">30 secondes pour démarrer</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Obtenez votre <span className="gradient-text">{config.title}</span>
          </h2>
          
          <p className="text-xl text-muted-foreground">
            Démo personnalisée • Sans engagement • Réponse sous 2h
          </p>
        </motion.div>

        {/* Formulaire ultra-simplifié */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit(onSubmit)}
          className="glass-strong rounded-[2rem] p-8 md:p-10 depth-4 space-y-8"
        >
          {/* Pain point - Design ultra-clean */}
          <div className="space-y-4">
            <label className="text-base font-semibold text-foreground flex items-center gap-2">
              {config.icon} Votre principal défi ?
            </label>
            <div className="grid grid-cols-1 gap-3">
              {config.painPoints.map((painPoint) => (
                <motion.button
                  key={painPoint}
                  type="button"
                  onClick={() => handlePainPointSelect(painPoint)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className={`
                    glass-card p-5 rounded-2xl text-left transition-all duration-300
                    ${selectedPainPoint === painPoint
                      ? `border-2 bg-gradient-to-r ${config.color} shadow-xl`
                      : "border border-border hover:border-primary/30"
                    }
                  `}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className={`text-base ${selectedPainPoint === painPoint ? "text-background font-semibold" : "text-foreground"}`}>
                      {painPoint}
                    </span>
                    <div className={`
                      w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-all
                      ${selectedPainPoint === painPoint 
                        ? "border-background bg-background" 
                        : "border-muted-foreground"
                      }
                    `}>
                      {selectedPainPoint === painPoint && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className={`w-3 h-3 rounded-full bg-gradient-to-r ${config.color}`}
                        />
                      )}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
            {errors.painPoint && (
              <p className="text-sm text-destructive flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-destructive" />
                {errors.painPoint.message}
              </p>
            )}
          </div>

          {/* Email - Design épuré */}
          <div className="space-y-3">
            <label className="text-base font-semibold text-foreground">
              📧 Votre email professionnel
            </label>
            <Input
              {...register("email")}
              type="email"
              placeholder="vous@entreprise.fr"
              className="bg-background/50 h-16 text-lg rounded-2xl border-2 border-border focus:border-primary transition-all"
            />
            {errors.email && (
              <p className="text-sm text-destructive flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-destructive" />
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Submit - CTA puissant */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            className={`
              w-full h-16 rounded-2xl font-bold text-lg
              bg-gradient-to-r ${config.color}
              text-background shadow-2xl
              hover:opacity-90 transition-opacity
              disabled:opacity-50 disabled:cursor-not-allowed
              flex items-center justify-center gap-3
              glow-strong
            `}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-background" />
                <span>Envoi en cours...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-6 h-6" />
                <span>Obtenir ma démo gratuite</span>
                <Sparkles className="w-6 h-6" />
              </>
            )}
          </motion.button>

          {/* Reassurance */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground pt-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Réponse sous 2h</span>
            </div>
            <div className="w-px h-3 bg-border" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Données RGPD</span>
            </div>
            <div className="w-px h-3 bg-border" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Sans engagement</span>
            </div>
            <div className="w-px h-3 bg-border" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Hébergé en France</span>
            </div>
          </div>
        </motion.form>

        {/* Social proof sous le form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-full">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-background flex items-center justify-center text-xs font-bold"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              <span className="text-foreground font-semibold">127 PME</span> nous font déjà confiance
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SimpleConversionForm;

