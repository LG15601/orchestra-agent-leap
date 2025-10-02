import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useScenarioFromUrl } from "@/hooks/useScenarioFromUrl";

const Index = () => {
  const navigate = useNavigate();
  
  // Support pour les anciennes URLs avec ?scenario=
  useScenarioFromUrl();
  
  useEffect(() => {
    // Redirection vers la page d'accueil
    const params = new URLSearchParams(window.location.search);
    const scenario = params.get('scenario');
    
    if (scenario && ['admin', 'commercial', 'gestion', 'support', 'marketing'].includes(scenario)) {
      navigate(`/${scenario}`, { replace: true });
    } else {
      navigate('/admin', { replace: true });
    }
  }, [navigate]);

  return null;
};

export default Index;
