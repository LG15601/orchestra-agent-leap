import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Sparkles } from "lucide-react";

const NavigationFuture = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Admin", path: "/admin", emoji: "📋", color: "from-blue-500/20 to-cyan-500/20" },
    { name: "Commercial", path: "/commercial", emoji: "💼", color: "from-green-500/20 to-emerald-500/20" },
    { name: "Gestion", path: "/gestion", emoji: "📊", color: "from-purple-500/20 to-pink-500/20" },
    { name: "Support", path: "/support", emoji: "🎧", color: "from-orange-500/20 to-red-500/20" },
    { name: "Marketing", path: "/marketing", emoji: "🎯", color: "from-yellow-500/20 to-orange-500/20" },
  ];

  // Trouver l'item actif pour la couleur dynamique
  const activeItem = navItems.find(item => item.path === location.pathname);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4 md:px-6"
    >
      <div className="glass-ultra rounded-full px-4 md:px-6 py-3 depth-3 hover-glow border border-white/5">
        <div className="flex items-center justify-between gap-4">
          {/* Logo - Design futuriste */}
          <Link to="/" className="group flex items-center gap-3 shrink-0">
            <motion.div 
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-8 h-8 rounded-full glass-subtle border border-white/10 flex items-center justify-center"
            >
              <Sparkles className="w-4 h-4 text-white/80" />
            </motion.div>
            <span className="text-xs font-light text-white/90 tracking-widest hidden sm:inline">
              ORCHESTRA
            </span>
          </Link>

          {/* Navigation avec transitions fluides */}
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative px-3 py-2 group"
                >
                  {/* Background actif avec couleur de catégorie */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav2026"
                      className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-full border border-white/10`}
                      transition={{ 
                        type: "spring", 
                        bounce: 0.2, 
                        duration: 0.8 
                      }}
                    />
                  )}
                  
                  <span 
                    className={`
                      relative z-10 flex items-center gap-1.5 text-xs font-light tracking-wide 
                      transition-all duration-500
                      ${isActive 
                        ? 'text-white' 
                        : 'text-white/50 group-hover:text-white/80 group-hover:scale-105'
                      }
                    `}
                  >
                    <span className="text-sm">{item.emoji}</span>
                    <span className="hidden md:inline whitespace-nowrap">{item.name}</span>
                  </span>
                </Link>
              );
            })}
          </div>

          {/* CTA avec scroll-to */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="shrink-0 glass-subtle px-4 md:px-5 py-2 rounded-full text-xs font-light text-white/90 tracking-wide hover-lift glow-soft border border-white/10"
          >
            <span className="hidden sm:inline">Démarrer</span>
            <span className="sm:hidden">▶</span>
          </motion.a>
        </div>
      </div>
      
      {/* Barre de progression subtile */}
      <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden rounded-full">
        <motion.div
          className={`h-full bg-gradient-to-r ${activeItem?.color.replace('/20', '') || 'from-white/20 to-white/10'}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'left' }}
        />
      </div>
    </motion.nav>
  );
};

export default NavigationFuture;
