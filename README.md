# 🎨 Orchestra Agent Leap - Landing Page

> Landing page ultra-moderne pour capture de leads qualifiés | Design glassmorphique Apple 2026 | Intégration Supabase

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://github.com/LG15601/orchestra-agent-leap)
[![React](https://img.shields.io/badge/React-18.3-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)

---

## ✨ Aperçu

Landing page épurée et performante pour **Orchestra**, plateforme d'agents IA pour PME françaises. Design inspiré d'Apple 2026 avec effet glassmorphique et animations fluides.

### 🎯 Features Principales

- **🎨 Design Premium** : Glassmorphisme, animations Framer Motion, style Apple 2026
- **📝 Formulaire Multi-Étapes** : 6 étapes optimisées pour la conversion
- **🎭 5 Profils Dynamiques** : Admin, Commercial, Gestion, Support, Marketing
- **📊 Intégration Supabase** : Capture et stockage automatique des leads
- **📱 100% Responsive** : Mobile-first avec design adaptatif
- **⚡ Performance** : Vite + React + TypeScript pour une rapidité optimale

---

## 🚀 Quick Start

### Prérequis

- Node.js 18+
- npm ou yarn
- Compte Supabase (gratuit)

### Installation

```bash
# Cloner le repo
git clone https://github.com/LG15601/orchestra-agent-leap.git
cd orchestra-agent-leap

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp env.example .env.local
# Remplissez vos clés Supabase dans .env.local

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:8080`

---

## ⚙️ Configuration Supabase

### 1. Créer un projet Supabase

1. Allez sur [supabase.com](https://supabase.com)
2. Créez un compte gratuit
3. Créez un nouveau projet

### 2. Exécuter le script SQL

Dans **SQL Editor**, exécutez le contenu de `supabase-setup.sql`

### 3. Récupérer les clés API

Dans **Settings → API**, copiez :
- Project URL
- anon public key

### 4. Configurer `.env.local`

```env
VITE_SUPABASE_URL=https://votre-projet.supabase.co
VITE_SUPABASE_ANON_KEY=votre_cle_anon
```

📖 **Guide complet** : Consultez `GUIDE_RAPIDE_SUPABASE.md`

---

## 📋 Structure du Formulaire

Le formulaire capture des leads ultra-qualifiés en 6 étapes :

| Étape | Données capturées |
|-------|-------------------|
| **1. Contact** | Prénom, nom, email, téléphone |
| **2. Entreprise** | Nom, secteur, nombre d'employés |
| **3. Problèmes** | Liste des défis (multi-select) |
| **4. Tâches** | Tâches à automatiser (multi-select) |
| **5. Budget** | Budget mensuel envisagé |
| **6. Besoins** | Description libre des besoins |

**Résultat** : Lead hyper-qualifié avec contexte complet pour votre équipe commerciale 🎯

---

## 🎨 Design System

### Palette de Couleurs

```css
/* Profils */
Admin:      from-blue-500 to-cyan-500
Commercial: from-green-500 to-emerald-500
Gestion:    from-purple-500 to-pink-500
Support:    from-orange-500 to-red-500
Marketing:  from-yellow-500 to-orange-500

/* Base */
Background: #0a0a0a (noir profond)
Text:       rgba(255, 255, 255, 0.9)
Glass:      rgba(255, 255, 255, 0.02) + blur(40px)
```

### Composants Clés

- **Glassmorphisme** : `.glass-ultra`, `.glass-strong`, `.glass-subtle`
- **Animations** : Framer Motion avec easing personnalisé
- **Typography** : Font-weight 200-300 (extralight/light)
- **Spacing** : Système basé sur 4px

📚 **Documentation complète** : `DESIGN_SYSTEM.md`

---

## 📊 Données des Leads

### Structure de la table Supabase

```sql
CREATE TABLE leads (
  id UUID PRIMARY KEY,
  created_at TIMESTAMP,
  
  -- Profil
  profile TEXT,
  
  -- Contact
  first_name TEXT,
  last_name TEXT,
  email TEXT,
  phone TEXT,
  
  -- Entreprise
  company TEXT,
  employees_count TEXT,
  sector TEXT,
  
  -- Besoins
  main_problems TEXT[],
  tasks TEXT[],
  budget TEXT,
  additional_needs TEXT,
  
  -- Meta
  status TEXT DEFAULT 'new',
  notes TEXT
);
```

### Accéder aux leads

Dans Supabase :
1. **Table Editor** → table `leads`
2. Tous les leads avec filtres et recherche
3. Export CSV/JSON disponible

---

## 🛠️ Stack Technique

| Technologie | Usage |
|-------------|-------|
| **React 18** | Framework UI |
| **TypeScript** | Type safety |
| **Vite** | Build tool ultra-rapide |
| **Tailwind CSS** | Styling utility-first |
| **Framer Motion** | Animations fluides |
| **Supabase** | Backend & Database |
| **Shadcn/ui** | Composants React |
| **React Hook Form** | Gestion formulaire |
| **Zod** | Validation schema |

---

## 📁 Structure du Projet

```
orchestra-agent-leap/
├── src/
│   ├── components/       # Composants réutilisables
│   ├── pages/           # Pages (Home, NotFound)
│   ├── hooks/           # Custom hooks
│   ├── lib/             # Utilitaires
│   └── integrations/    # Supabase client
├── public/              # Assets statiques
├── supabase-setup.sql   # Script création table
├── DESIGN_SYSTEM.md     # Guide de style complet
├── GUIDE_RAPIDE_SUPABASE.md  # Setup Supabase
└── INSTRUCTIONS_RAPIDES.md   # Quick start
```

---

## 📈 Optimisations Conversion

### Parcours Utilisateur

```
Pain Point → Solution → Preuves → Action
     ↓          ↓          ↓        ↓
  Hero    Bénéfices    Stats   Formulaire
```

### Éléments de Conversion

- ✅ **Pain point** en premier (identification immédiate)
- ✅ **Sélection profil** intuitive (5 boutons)
- ✅ **Mosaïque capabilities** (12 cas d'usage)
- ✅ **Social proof** (100+ PME, 4.8★)
- ✅ **Formulaire progressif** (barre de progression)
- ✅ **CTA blanc** optimisé ("Rejoindre la liste d'attente")

**ROI attendu** : +200-300% de conversion vs formulaire classique

📊 **Détails complets** : `OPTIMISATIONS_CONVERSION.md`

---

## 🎯 Roadmap

- [ ] Intégration Resend pour emails automatiques
- [ ] Dashboard admin pour gérer les leads
- [ ] A/B testing des titres et CTA
- [ ] Analytics et tracking événements
- [ ] Dark/Light mode toggle
- [ ] Multilingue (EN, ES, DE)

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créez une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

---

## 📝 License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

## 🙏 Remerciements

- Design inspiré par Apple 2026
- Composants UI par [Shadcn](https://ui.shadcn.com/)
- Icons par [Lucide](https://lucide.dev/)
- Hébergement backend par [Supabase](https://supabase.com/)

---

## 📞 Contact

**Orchestra** - Agents IA pour PME françaises

- Website: [À venir]
- Email: contact@orchestra.fr
- GitHub: [@LG15601](https://github.com/LG15601)

---

<div align="center">

**Fait avec ❤️ pour les PME françaises**

⭐ Star ce repo si vous le trouvez utile !

</div>
