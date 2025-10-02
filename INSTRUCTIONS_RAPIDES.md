# ⚡ Instructions Rapides - Configuration Supabase

## 🎯 Ce qui a été fait

✅ **Formulaire amélioré** : 6 étapes au lieu de 5
- Étape 1 : Contact (prénom, nom, email, tél)
- Étape 2 : Entreprise (nom, effectifs, secteur)
- Étape 3 : Problèmes (sélection multiple)
- Étape 4 : Tâches (sélection multiple)
- Étape 5 : Budget (select)
- Étape 6 : **Besoins supplémentaires** (question ouverte) ✨ NOUVEAU

✅ **Code Supabase activé** : Le formulaire enregistre dans Supabase

✅ **Fichiers SQL prêts** : `supabase-setup.sql` avec le champ `additional_needs`

---

## 🚀 Ce qu'il vous reste à faire (5 minutes)

### 1. Créer un compte Supabase

1. Allez sur https://supabase.com
2. Créez un compte (gratuit)
3. Créez un projet "orchestra-leads"

### 2. Exécuter le SQL

1. Dans Supabase → **SQL Editor**
2. Copiez tout le contenu de `supabase-setup.sql`
3. Collez et cliquez **Run**

### 3. Récupérer vos clés

1. Dans Supabase → **Settings** → **API**
2. Copiez :
   - **Project URL**
   - **anon public key**

### 4. Créer le fichier .env.local

Créez un fichier `.env.local` à la racine avec :

```env
VITE_SUPABASE_URL=https://votre-projet.supabase.co
VITE_SUPABASE_ANON_KEY=eyJvotre_cle...
```

### 5. Redémarrer

```bash
npm run dev
```

---

## ✅ Test

1. Remplissez le formulaire (6 étapes)
2. Allez dans Supabase → **Table Editor** → **leads**
3. Votre lead apparaît avec TOUTES les infos ! 🎉

---

## 📁 Fichiers importants

| Fichier | Description |
|---------|-------------|
| `supabase-setup.sql` | Script SQL pour créer la table |
| `env.example` | Exemple de configuration |
| `GUIDE_RAPIDE_SUPABASE.md` | Guide détaillé étape par étape |
| `CONFIGURATION_SUPABASE_RESEND.md` | Guide complet avec Resend |

---

## 🎨 Nouveautés Design

✅ Navigation supprimée (page ultra-épurée)
✅ Pain point + titre harmonieux  
✅ CTA "Rejoindre la liste d'attente" en blanc  
✅ Message "Bienvenue dans l'ère des agents IA"  
✅ Formulaire 6 étapes avec question ouverte finale  

---

## 📊 Données capturées

Le formulaire capture maintenant :
- ✅ Profil (admin, commercial, gestion, support, marketing)
- ✅ Identité (prénom, nom, email, téléphone)
- ✅ Entreprise (nom, effectifs, secteur)
- ✅ Problèmes (liste multi-sélection)
- ✅ Tâches à automatiser (liste multi-sélection)
- ✅ Budget mensuel
- ✅ **Besoins additionnels** (texte libre) 🆕

**= Lead ultra-qualifié** pour votre équipe commerciale ! 🚀

---

## 🆘 Aide rapide

**Site ne charge pas** ?
→ Vérifiez que `.env.local` existe et contient vos vraies clés Supabase

**Erreur "Invalid API key"** ?
→ Vérifiez que vous avez copié la bonne clé (anon public, pas service_role)

**Lead ne s'enregistre pas** ?
→ Ouvrez la console du navigateur (F12) et regardez les erreurs

---

**Consultez `GUIDE_RAPIDE_SUPABASE.md` pour le guide complet ! 📖**

