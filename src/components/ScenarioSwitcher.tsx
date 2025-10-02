import { useScenario, scenarioConfig, ScenarioType } from "@/hooks/useScenario";
import { motion } from "framer-motion";

const ScenarioSwitcher = () => {
  const { scenario, setScenario } = useScenario();
  const scenarios: ScenarioType[] = ['admin', 'commercial', 'gestion', 'support', 'marketing'];

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="glass-card rounded-full p-2 shadow-2xl border-2 border-primary/20"
      >
        <div className="flex gap-2 justify-between">
          {scenarios.map((s) => {
            const config = scenarioConfig[s];
            const isActive = scenario === s;
            
            return (
              <button
                key={s}
                onClick={() => setScenario(s)}
                className={`
                  relative flex-1 px-4 py-3 rounded-full font-semibold text-sm transition-all duration-300
                  ${isActive 
                    ? 'text-background scale-105' 
                    : 'text-muted-foreground hover:text-foreground hover:scale-102'
                  }
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeScenario"
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${config.color} shadow-lg`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center justify-center gap-1.5">
                  <span className="text-base">{config.icon}</span>
                  <span className="hidden sm:inline">
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default ScenarioSwitcher;

