import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Send, Sparkles, CheckCircle2, Zap } from "lucide-react";
import { useScenario, scenarioConfig } from "@/hooks/useScenario";
import { motion } from "framer-motion";

const formSchema = z.object({
  painPoint: z.string().min(1, "Sélectionnez votre principal problème"),
  email: z.string().trim().email("Email invalide").max(255),
});

type FormData = z.infer<typeof formSchema>;

const LeadForm = () => {
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
      // In production, this would send to your backend
      console.log("Form data:", data);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      toast.success("Demande envoyée avec succès!", {
        description: "Nos experts vous recontacteront sous 24h",
      });
    } catch (error) {
      toast.error("Une erreur est survenue", {
        description: "Veuillez réessayer",
      });
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 px-4 relative">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-12 rounded-3xl text-center space-y-6"
          >
            <div className="flex justify-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className={`p-6 bg-gradient-to-br ${config.color} rounded-full glow-effect`}
              >
                <CheckCircle2 className="w-16 h-16 text-background" />
              </motion.div>
            </div>
            <h3 className="text-4xl font-bold gradient-text">Parfait ! 🎉</h3>
            <p className="text-xl text-muted-foreground max-w-md mx-auto">
              Un expert Orchestra vous contacte <span className="text-foreground font-semibold">sous 2h</span> pour vous montrer comment votre {config.title} va transformer votre quotidien.
            </p>
            <div className="pt-4 space-y-2">
              <p className="text-sm text-muted-foreground">
                ⚡ Démo personnalisée de 15 minutes<br />
                💡 Plan d'action sur mesure<br />
                🎁 Audit gratuit de vos processus
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm"
          >
            <Zap className="w-4 h-4 text-primary" />
            <span>Réponse sous 2h • Sans engagement</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Découvrez votre {config.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            30 secondes pour démarrer • Démo personnalisée offerte
          </motion.p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          onSubmit={handleSubmit(onSubmit)}
          className="glass-card p-8 rounded-3xl space-y-6 border-2 border-primary/20"
        >
          {/* Pain point selection - Style 2026 ultra-rapide */}
          <div className="space-y-3">
            <label className="text-base font-medium text-foreground flex items-center gap-2">
              {config.icon} Votre principal défi ?
            </label>
            <div className="grid grid-cols-1 gap-2">
              {config.painPoints.map((painPoint) => (
                <motion.button
                  key={painPoint}
                  type="button"
                  onClick={() => handlePainPointSelect(painPoint)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`glass-card p-4 rounded-xl text-left transition-all ${
                    selectedPainPoint === painPoint
                      ? `border-2 bg-gradient-to-r ${config.color} text-background font-semibold`
                      : "border border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      selectedPainPoint === painPoint
                        ? "border-background bg-background"
                        : "border-muted-foreground"
                    }`}>
                      {selectedPainPoint === painPoint && (
                        <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${config.color}`} />
                      )}
                    </div>
                    <span className={selectedPainPoint === painPoint ? "text-background" : "text-foreground"}>
                      {painPoint}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
            {errors.painPoint && (
              <p className="text-sm text-destructive">{errors.painPoint.message}</p>
            )}
          </div>

          {/* Email - Design minimaliste */}
          <div className="space-y-2">
            <label className="text-base font-medium text-foreground">
              📧 Votre email pro
            </label>
            <Input
              {...register("email")}
              type="email"
              placeholder="vous@entreprise.fr"
              className="bg-background/50 h-14 text-base rounded-xl border-2 focus:border-primary"
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          {/* Submit button - CTA moderne */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="pt-2"
          >
            <Button
              type="submit"
              size="lg"
              className={`w-full h-14 text-lg font-semibold rounded-xl bg-gradient-to-r ${config.color} hover:opacity-90 transition-opacity shadow-lg`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-background" />
                  <span>Envoi...</span>
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5" />
                  <span>Recevoir ma démo gratuite</span>
                </>
              )}
            </Button>
          </motion.div>

          <p className="text-xs text-muted-foreground text-center">
            🔒 Données sécurisées • 🇫🇷 Hébergé en France • ⚡ Sans engagement
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default LeadForm;
