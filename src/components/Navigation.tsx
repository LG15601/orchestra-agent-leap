import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Admin", path: "/admin" },
    { name: "Commercial", path: "/commercial" },
    { name: "Gestion", path: "/gestion" },
    { name: "Support", path: "/support" },
    { name: "Marketing", path: "/marketing" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/40"
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-1.5 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
            <span className="font-bold text-sm text-foreground">Orchestra</span>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    relative px-3 py-1.5 text-xs font-medium rounded-lg transition-all
                    ${isActive 
                      ? 'text-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                    }
                  `}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-primary/10 rounded-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <Link
            to="/liste-attente"
            className="px-4 py-1.5 text-xs font-semibold bg-gradient-to-r from-primary to-secondary text-background rounded-lg hover:opacity-90 transition-opacity"
          >
            Liste d'attente
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;

