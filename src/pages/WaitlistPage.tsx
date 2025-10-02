import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Sparkles, CheckCircle2, Zap, TrendingUp, Users, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const formSchema = z.object({
  firstName: z.string().min(2, "Prénom requis"),
  lastName: z.string().min(2, "Nom requis"),
  email: z.string().email("Email invalide"),
  company: z.string().min(2, "Entreprise requise"),
  role: z.string().min(2, "Fonction requise"),
});

type FormData = z.infer<typeof formSchema>;

const WaitlistPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [queuePosition] = useState(Math.floor(Math.random() * 50) + 150);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      console.log("Waitlist signup:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      toast.success("Bienvenue sur la liste !", {
        description: "Vous êtes prioritaire pour le lancement",
      });
    } catch (error) {
      toast.error("Erreur", { description: "Réessayez" });
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-24 px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="glass-card p-12 rounded-3xl text-center space-y-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="mx-auto w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center"
              >
                <CheckCircle2 className="w-16 h-16 text-background" />
              </motion.div>

              <div>
                <h1 className="text-4xl font-bold mb-4">
                  Vous êtes sur la liste ! 🎉
                </h1>
                <p className="text-xl text-muted-foreground">
                  Vous êtes la <span className="text-foreground font-bold">#{queuePosition}ème</span> entreprise sur la liste
                </p>
              </div>

              <div className="glass-card p-6 rounded-2xl space-y-4">
                <h3 className="font-bold text-lg">Ce que vous recevrez :</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold">Accès prioritaire</p>
                      <p className="text-sm text-muted-foreground">Vous serez parmi les premiers équipés</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold">Tarif early adopter</p>
                      <p className="text-sm text-muted-foreground">-50% pendant 6 mois</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold">Support VIP</p>
                      <p className="text-sm text-muted-foreground">Assistance dédiée 24/7</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold">Formation personnalisée</p>
                      <p className="text-sm text-muted-foreground">Onboarding sur mesure</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                Nous vous contactons <span className="text-foreground font-semibold">sous 48h</span> pour préparer votre déploiement.
              </p>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span>🚀 Lancement : Janvier 2026</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Rejoignez les premières PME<br />
            <span className="gradient-text">équipées d'agents IA</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
          >
            Inscrivez-vous dès maintenant pour bénéficier d'un accès prioritaire et de <span className="text-foreground font-semibold">tarifs exclusifs early adopter</span>.
          </motion.p>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl text-center space-y-4"
            >
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Accès Prioritaire</h3>
              <p className="text-muted-foreground">
                Soyez parmi les 100 premières entreprises équipées
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 rounded-2xl text-center space-y-4"
            >
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">-50% Pendant 6 Mois</h3>
              <p className="text-muted-foreground">
                Tarif early adopter exceptionnel garanti
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 rounded-2xl text-center space-y-4"
            >
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Support VIP</h3>
              <p className="text-muted-foreground">
                Accompagnement personnalisé pour réussir
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section className="py-16 px-4">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold mb-4">Rejoignez la liste d'attente</h2>
            <p className="text-muted-foreground">
              ⏱️ 30 secondes • Sans engagement
            </p>
          </motion.div>

          <form onSubmit={handleSubmit(onSubmit)} className="glass-card p-8 rounded-3xl space-y-4">
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
              <Input {...register("company")} placeholder="Entreprise" className="h-12" />
              {errors.company && <p className="text-xs text-destructive mt-1">{errors.company.message}</p>}
            </div>

            <div>
              <Input {...register("role")} placeholder="Fonction" className="h-12" />
              {errors.role && <p className="text-xs text-destructive mt-1">{errors.role.message}</p>}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-background mr-2" />
                  Inscription...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  Rejoindre la liste
                </>
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              🔒 Données sécurisées • 🇫🇷 Hébergé en France • ⚡ Aucun engagement
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WaitlistPage;

