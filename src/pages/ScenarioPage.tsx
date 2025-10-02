import { useEffect } from "react";
import { useScenario, ScenarioType } from "@/hooks/useScenario";
import HeroFuture from "@/components/HeroFuture";
import BenefitsFuture from "@/components/BenefitsFuture";
import EarlyAccessSection from "@/components/EarlyAccessSection";
import SimpleConversionForm from "@/components/SimpleConversionForm";
import NavigationFuture from "@/components/NavigationFuture";
import { Sparkles } from "lucide-react";

interface ScenarioPageProps {
  scenarioType: ScenarioType;
}

const ScenarioPage = ({ scenarioType }: ScenarioPageProps) => {
  const { setScenario } = useScenario();

  useEffect(() => {
    setScenario(scenarioType);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [scenarioType, setScenario]);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <NavigationFuture />
      
      {/* Hero - Accroche principale */}
      <HeroFuture />
      
      {/* Bénéfices - Preuve de valeur */}
      <BenefitsFuture />
      
      {/* Early Access - Urgence et exclusivité */}
      <EarlyAccessSection />
      
      {/* Conversion - Action simple */}
      <SimpleConversionForm />
      
      {/* Footer premium */}
      <footer className="py-16 px-6 border-t border-white/5 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo & Baseline */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-base font-bold text-white">Orchestra</p>
                <p className="text-xs text-white/40">Agents IA pour PME françaises</p>
              </div>
            </div>
            
            {/* Trust badges */}
            <div className="flex items-center gap-6 text-xs text-white/40">
              <span>🔒 RGPD Compliant</span>
              <span>🇫🇷 Hébergé en France</span>
              <span>⚡ Support 7j/7</span>
            </div>
            
            {/* Copyright */}
            <p className="text-xs text-white/30">
              © 2026 Orchestra · Tous droits réservés
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ScenarioPage;

