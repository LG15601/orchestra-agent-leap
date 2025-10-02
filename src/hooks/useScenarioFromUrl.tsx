import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useScenario, ScenarioType } from './useScenario';

/**
 * Hook pour initialiser le scénario depuis l'URL
 * Supporte les formats suivants :
 * - ?scenario=admin
 * - ?scenario=commercial
 * - ?scenario=gestion
 * - ?scenario=support
 * - ?scenario=marketing
 * 
 * Exemple d'URLs Google Ads :
 * - https://votresite.com/?scenario=commercial
 * - https://votresite.com/?scenario=support
 */
export const useScenarioFromUrl = () => {
  const [searchParams] = useSearchParams();
  const { setScenario } = useScenario();

  useEffect(() => {
    const scenarioParam = searchParams.get('scenario');
    
    if (scenarioParam) {
      const validScenarios: ScenarioType[] = ['admin', 'commercial', 'gestion', 'support', 'marketing'];
      
      if (validScenarios.includes(scenarioParam as ScenarioType)) {
        setScenario(scenarioParam as ScenarioType);
      }
    }
  }, [searchParams, setScenario]);
};

