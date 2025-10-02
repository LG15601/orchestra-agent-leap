# 🚀 Configuration Supabase + Resend

## 📊 Étape 1 : Configuration Supabase

### 1. Créer un compte Supabase

1. Allez sur https://supabase.com
2. Créez un compte gratuit
3. Créez un nouveau projet "orchestra-leads"

### 2. Créer la table `leads`

1. Dans votre projet Supabase, allez dans **SQL Editor**
2. Copiez-collez le contenu du fichier `supabase-setup.sql`
3. Cliquez sur **Run** pour exécuter le script

Cela va créer :
- ✅ Table `leads` avec tous les champs nécessaires
- ✅ Index pour optimiser les performances
- ✅ Row Level Security activé
- ✅ Politiques pour permettre les insertions publiques

### 3. Récupérer vos clés API

1. Allez dans **Settings** → **API**
2. Copiez :
   - **Project URL** → `VITE_SUPABASE_URL`
   - **anon public** key → `VITE_SUPABASE_ANON_KEY`

### 4. Configurer les variables d'environnement

1. Créez un fichier `.env` à la racine du projet
2. Ajoutez vos clés :

```env
VITE_SUPABASE_URL=https://votre-projet.supabase.co
VITE_SUPABASE_ANON_KEY=votre-cle-anon
```

---

## 📧 Étape 2 : Configuration Resend

### 1. Créer un compte Resend

1. Allez sur https://resend.com
2. Créez un compte gratuit
3. Vérifiez votre domaine (ou utilisez leur domaine test)

### 2. Créer une clé API

1. Dans le dashboard Resend, allez dans **API Keys**
2. Cliquez sur **Create API Key**
3. Copiez la clé générée

### 3. Ajouter la clé à `.env`

```env
RESEND_API_KEY=re_votre_cle_api
```

### 4. Créer un endpoint API pour l'envoi d'emails

Créez le fichier `api/send-confirmation.ts` :

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, firstName, profile } = req.body;

  try {
    await resend.emails.send({
      from: 'Orchestra <onboarding@votre-domaine.com>',
      to: email,
      subject: '🎉 Bienvenue dans l\'ère des agents IA',
      html: `
        <h1>Bienvenue ${firstName} !</h1>
        <p>Vous êtes maintenant sur notre liste d'attente prioritaire pour un <strong>Employé IA ${profile}</strong>.</p>
        <p>Un expert Orchestra vous contactera dans les 2 prochaines heures.</p>
        <p>À très bientôt,<br>L'équipe Orchestra</p>
      `
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
```

---

## 📊 Étape 3 : Installer les dépendances

```bash
npm install @supabase/supabase-js resend
```

---

## 🎯 Étape 4 : Tester

1. Lancez le serveur : `npm run dev`
2. Remplissez le formulaire
3. Vérifiez :
   - ✅ Dans Supabase → **Table Editor** → `leads` : votre lead apparaît
   - ✅ Dans votre boîte mail : email de confirmation reçu

---

## 📋 Structure de la table `leads`

| Champ | Type | Description |
|-------|------|-------------|
| `id` | UUID | ID unique auto-généré |
| `created_at` | Timestamp | Date de création |
| `profile` | Text | Type d'agent IA (admin, commercial, etc.) |
| `first_name` | Text | Prénom |
| `last_name` | Text | Nom |
| `email` | Text | Email professionnel |
| `phone` | Text | Téléphone |
| `company` | Text | Nom de l'entreprise |
| `employees_count` | Text | Nombre d'employés (1-5, 6-20, etc.) |
| `sector` | Text | Secteur d'activité |
| `main_problems` | Text[] | Liste des problèmes principaux |
| `tasks` | Text[] | Liste des tâches à automatiser |
| `budget` | Text | Budget mensuel |
| `status` | Text | Statut du lead (new, contacted, etc.) |
| `notes` | Text | Notes internes |

---

## 🔐 Sécurité

La Row Level Security (RLS) est activée avec :
- ✅ **Insertions publiques** : Permet au formulaire d'ajouter des leads
- ✅ **Lectures authentifiées** : Seuls les admins peuvent lire les leads

---

## 📈 Accéder aux leads

### Via l'interface Supabase

1. Allez dans **Table Editor**
2. Sélectionnez la table `leads`
3. Vous voyez tous les leads avec toutes les infos

### Via API

```typescript
// Récupérer tous les leads
const { data: leads } = await supabase
  .from('leads')
  .select('*')
  .order('created_at', { ascending: false });

// Filtrer par profil
const { data: marketingLeads } = await supabase
  .from('leads')
  .select('*')
  .eq('profile', 'marketing');

// Rechercher par email
const { data: lead } = await supabase
  .from('leads')
  .select('*')
  .eq('email', 'contact@example.com')
  .single();
```

---

## 📊 Dashboard Supabase recommandé

Créez des vues dans Supabase :

1. **Leads par profil** : Graphique en camembert
2. **Leads par jour** : Graphique en ligne
3. **Budget moyen** : Métrique
4. **Taux de conversion** : Métrique

---

## ✅ Checklist finale

- [ ] Compte Supabase créé
- [ ] Table `leads` créée avec le SQL
- [ ] Variables d'environnement configurées
- [ ] Compte Resend créé
- [ ] API Key Resend ajoutée
- [ ] Endpoint API créé pour les emails
- [ ] Dépendances installées
- [ ] Test de soumission de formulaire OK
- [ ] Email de confirmation reçu

---

## 🎉 C'est terminé !

Votre système de capture de leads est opérationnel avec :
- ✅ Formulaire multi-étapes fluide
- ✅ Sauvegarde automatique dans Supabase
- ✅ Email de confirmation via Resend
- ✅ Données enrichies (profil, besoins, budget)
- ✅ Interface d'administration via Supabase

**ROI attendu** : Conversion optimale avec qualification maximale des leads !

