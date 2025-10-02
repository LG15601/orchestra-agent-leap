import { useScenario, scenarioConfig } from "@/hooks/useScenario";
import { motion } from "framer-motion";

const HeroFuture = () => {
  const { scenario } = useScenario();
  const config = scenarioConfig[scenario];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background mesh gradient */}
      <div className="absolute inset-0 gradient-mesh" />
      
      {/* Orbes flottants */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
        style={{
          background: `radial-gradient(circle, ${config.color.includes('blue') ? 'rgba(99, 102, 241, 0.15)' : 
                                                config.color.includes('green') ? 'rgba(34, 197, 94, 0.15)' :
                                                config.color.includes('purple') ? 'rgba(168, 85, 247, 0.15)' :
                                                config.color.includes('orange') ? 'rgba(251, 146, 60, 0.15)' :
                                                'rgba(234, 179, 8, 0.15)'} 0%, transparent 70%)`
        }}
      />
      
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[140px]"
        style={{
          background: `radial-gradient(circle, ${config.color.includes('blue') ? 'rgba(147, 197, 253, 0.12)' : 
                                                config.color.includes('green') ? 'rgba(74, 222, 128, 0.12)' :
                                                config.color.includes('purple') ? 'rgba(216, 180, 254, 0.12)' :
                                                config.color.includes('orange') ? 'rgba(253, 186, 116, 0.12)' :
                                                'rgba(252, 211, 77, 0.12)'} 0%, transparent 70%)`
        }}
      />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
        {/* Badge minimaliste */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex"
        >
          <div className="glass-subtle px-6 py-2 rounded-full border border-white/5">
            <span className="text-xs font-light text-white/60 tracking-widest">{config.icon}</span>
            <span className="mx-3 text-white/20">·</span>
            <span className="text-xs font-light text-white/60 tracking-wide">{config.tagline}</span>
          </div>
        </motion.div>
        
        {/* Titre principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <h1 className="text-6xl md:text-8xl font-extralight text-white leading-[1.1] tracking-tight">
            {config.headline.split(' ').slice(0, -2).join(' ')}
            <br />
            <span className="text-ultra-light bg-gradient-to-r from-white via-white/80 to-white/60 bg-clip-text text-transparent">
              {config.headline.split(' ').slice(-2).join(' ')}
            </span>
          </h1>
        </motion.div>
        
        {/* Sous-titre glassmorphique */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-ultra rounded-3xl p-8 depth-2">
            <p className="text-lg md:text-xl font-light text-white/70 leading-relaxed">
              {config.description}
            </p>
          </div>
        </motion.div>
        
        {/* CTA minimaliste */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-6 pt-8"
        >
          <a
            href="#contact"
            className="glass-strong px-12 py-4 rounded-full hover-lift glow-medium group"
          >
            <span className="text-sm font-light text-white tracking-wide">
              Démarrer
            </span>
          </a>
          
          <div className="flex items-center gap-8 text-xs font-light text-white/40 tracking-wide">
            <span>Installation 48h</span>
            <span className="text-white/20">·</span>
            <span>Sans engagement</span>
            <span className="text-white/20">·</span>
            <span>Données en France</span>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroFuture;

