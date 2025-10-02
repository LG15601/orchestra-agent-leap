# 🚀 Guide Rapide Supabase - 5 Minutes

## ✅ Étape 1 : Créer un compte Supabase (2 min)

1. Allez sur **https://supabase.com**
2. Cliquez sur **"Start your project"**
3. Connectez-vous avec GitHub (recommandé) ou email
4. Créez un nouveau projet :
   - **Name**: `orchestra-leads`
   - **Database Password**: Générez un mot de passe fort (sauvegardez-le !)
   - **Region**: `Europe (Frankfurt)` ou le plus proche de vous
5. Attendez ~2 minutes que le projet soit créé

---

## ✅ Étape 2 : Créer la table `leads` (1 min)

1. Dans votre projet Supabase, cliquez sur **"SQL Editor"** dans le menu de gauche
2. Cliquez sur **"+ New query"**
3. Copiez-collez **tout le contenu** du fichier `supabase-setup.sql`
4. Cliquez sur **"Run"** (ou appuyez sur Cmd+Enter)
5. ✅ Vous devriez voir "Success. No rows returned"

---

## ✅ Étape 3 : Récupérer vos clés API (1 min)

1. Cliquez sur **"Settings"** (⚙️ en bas du menu)
2. Cliquez sur **"API"**
3. Vous voyez 2 informations importantes :

### Project URL
```
https://xxxxxxxxxxxx.supabase.co
```
☝️ **Copiez cette URL**

### anon public key
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFz...
```
☝️ **Copiez cette clé** (c'est un long texte qui commence par `eyJ`)

---

## ✅ Étape 4 : Configurer le projet (1 min)

1. Ouvrez le fichier **`.env.local`** à la racine du projet
2. Collez vos valeurs :

```env
VITE_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

3. **Sauvegardez le fichier**

---

## ✅ Étape 5 : Redémarrer le serveur

```bash
# Arrêtez le serveur (Ctrl+C dans le terminal)
# Puis relancez :
npm run dev
```

---

## 🎉 C'est terminé !

Testez le formulaire :
1. Allez sur http://localhost:8082
2. Remplissez les 6 étapes du formulaire
3. Cliquez sur "Rejoindre la liste"

### Vérifiez que ça fonctionne :

1. Retournez sur Supabase
2. Cliquez sur **"Table Editor"**
3. Sélectionnez la table **"leads"**
4. ✅ **Votre lead apparaît !** Avec toutes les infos :
   - Nom, prénom, email, téléphone
   - Entreprise, secteur, nombre d'employés
   - Problèmes sélectionnés
   - Tâches choisies
   - Budget
   - Besoins additionnels (texte libre)

---

## 📊 Bonus : Visualiser vos leads

Dans Supabase, vous pouvez :

### Voir tous les leads
```sql
SELECT * FROM leads ORDER BY created_at DESC;
```

### Filtrer par profil
```sql
SELECT * FROM leads WHERE profile = 'marketing';
```

### Statistiques
```sql
-- Nombre de leads par profil
SELECT profile, COUNT(*) as total 
FROM leads 
GROUP BY profile;

-- Leads par budget
SELECT budget, COUNT(*) as total 
FROM leads 
GROUP BY budget 
ORDER BY total DESC;
```

---

## 🔐 Sécurité

✅ **Row Level Security activé** : Les insertions publiques sont autorisées (pour le formulaire), mais seuls les admins authentifiés peuvent lire les données.

✅ **Données en Europe** : Si vous avez choisi Frankfurt, toutes les données restent en UE (RGPD compliant).

---

## 🆘 Problèmes courants

### "Invalid API key"
→ Vérifiez que vous avez bien copié la **anon public** key (pas la service_role)

### "relation does not exist"  
→ La table n'a pas été créée. Relancez le script SQL dans SQL Editor

### Le site ne charge pas
→ Vérifiez que le fichier `.env.local` est bien à la racine (même niveau que `package.json`)

### Les données n'arrivent pas
→ Ouvrez la console du navigateur (F12) et regardez les erreurs

---

## 📧 Emails (Optionnel)

Pour activer les emails de confirmation :
1. Créez un compte sur https://resend.com
2. Ajoutez votre clé API dans `.env.local`
3. Créez un endpoint API (voir `CONFIGURATION_SUPABASE_RESEND.md`)

**Mais ce n'est pas nécessaire** pour que les leads soient sauvegardés !

---

## ✅ Résultat

Vous avez maintenant :
- ✅ Un formulaire fluide en 6 étapes
- ✅ Une base de données Supabase
- ✅ Capture automatique des leads
- ✅ Toutes les informations qualifiées
- ✅ Interface d'admin via Supabase

**Temps total : 5-10 minutes** ⚡

---

**Besoin d'aide ?** Consultez la documentation complète dans `CONFIGURATION_SUPABASE_RESEND.md`

