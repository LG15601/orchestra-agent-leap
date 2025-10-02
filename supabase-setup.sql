-- Créer la table leads pour stocker les informations des prospects

CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  
  -- Profil
  profile TEXT NOT NULL,
  
  -- Contact
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  
  -- Entreprise
  company TEXT NOT NULL,
  employees_count TEXT NOT NULL,
  sector TEXT NOT NULL,
  
  -- Besoins
  main_problems TEXT[] NOT NULL,
  tasks TEXT[] NOT NULL,
  budget TEXT NOT NULL,
  additional_needs TEXT,
  
  -- Métadonnées
  status TEXT DEFAULT 'new',
  notes TEXT
);

-- Créer un index sur l'email pour les recherches rapides
CREATE INDEX IF NOT EXISTS leads_email_idx ON leads(email);

-- Créer un index sur la date de création
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads(created_at DESC);

-- Créer un index sur le statut
CREATE INDEX IF NOT EXISTS leads_status_idx ON leads(status);

-- Activer Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Politique pour permettre les insertions anonymes (pour le formulaire public)
CREATE POLICY "Allow anonymous inserts" ON leads
  FOR INSERT
  WITH CHECK (true);

-- Politique pour permettre la lecture authentifiée (pour l'admin)
CREATE POLICY "Allow authenticated reads" ON leads
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Commenter la table
COMMENT ON TABLE leads IS 'Table pour stocker les leads générés par le formulaire de la landing page';

