import { Sparkles } from "lucide-react";
import { useScenario, scenarioConfig } from "@/hooks/useScenario";
import { motion } from "framer-motion";

const Hero = () => {
  const { scenario } = useScenario();
  const config = scenarioConfig[scenario];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-32 px-4">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      
      {/* Glow effects dynamiques basés sur le scénario */}
      <motion.div 
        key={`glow-1-${scenario}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className={`absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r ${config.color} opacity-20 rounded-full blur-[120px] animate-pulse`} 
      />
      <motion.div 
        key={`glow-2-${scenario}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l ${config.color} opacity-20 rounded-full blur-[120px] animate-pulse delay-1000`} 
      />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Badge */}
        <motion.div
          key={`badge-${scenario}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm text-muted-foreground"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span>{config.icon} {config.tagline}</span>
        </motion.div>
        
        {/* Main title */}
        <motion.h1
          key={`title-${scenario}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold leading-tight tracking-tight"
        >
          {config.headline}<br />
          <span className={`gradient-text bg-gradient-to-r ${config.color} bg-clip-text text-transparent`}>
            {config.subheadline}
          </span>
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p
          key={`subtitle-${scenario}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          {config.description}
        </motion.p>
        
        {/* Value prop */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Aucune compétence technique requise. Résultats visibles dès la première semaine.
        </motion.p>
        
        {/* CTA scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-8"
        >
          <div className="inline-flex flex-col items-center gap-2">
            <p className="text-sm text-muted-foreground">Découvrez comment récupérer 10h par semaine</p>
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
