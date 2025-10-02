# 🎨 Orchestra Design System - Guide Complet

## 📋 Table des matières
1. [Philosophie Design](#philosophie-design)
2. [Palette de couleurs](#palette-de-couleurs)
3. [Typographie](#typographie)
4. [Espacements](#espacements)
5. [Composants](#composants)
6. [Animations](#animations)
7. [Glassmorphisme](#glassmorphisme)
8. [Exemples de code](#exemples-de-code)

---

## 🎯 Philosophie Design

### Vision
Design Apple 2026 - Glassmorphique Ultra-Moderne avec une esthétique premium, minimaliste et futuriste.

### Principes clés
- **Clarté** : Information hiérarchisée, facilement scannable
- **Profondeur** : Utilisation du glassmorphisme pour créer de la profondeur
- **Fluidité** : Animations douces et transitions élégantes
- **Performance** : Optimisation pour un rendu ultra-rapide
- **Accessibilité** : Contrastes élevés, textes lisibles

---

## 🎨 Palette de couleurs

### Couleurs principales (HSL)

```css
/* Background - Noir profond avec nuances */
--background: 240 15% 6%;        /* #0f0f14 */
--foreground: 240 10% 98%;       /* #f9f9fb */

/* Cards & Surfaces */
--card: 240 15% 8%;              /* #131318 */
--card-foreground: 240 10% 98%;  /* #f9f9fb */

/* Primary - Violet électrique */
--primary: 262 83% 58%;          /* #7c3aed */
--primary-foreground: 240 10% 98%;
--primary-glow: 280 90% 70%;     /* Pour les effets glow */

/* Secondary - Cyan brillant */
--secondary: 200 98% 60%;        /* #06b6d4 */
--secondary-foreground: 240 15% 6%;

/* Muted - Gris subtil */
--muted: 240 10% 15%;            /* #24242b */
--muted-foreground: 240 5% 65%;  /* #a1a1aa */

/* Accent - Rose vif */
--accent: 320 85% 60%;           /* #ec4899 */
--accent-foreground: 240 10% 98%;

/* States */
--destructive: 0 84.2% 60.2%;    /* Rouge */
--border: 240 10% 18%;           /* #2a2a33 */
--input: 240 10% 18%;
--ring: 262 83% 58%;             /* Focus ring */
```

### Gradients Premium

```css
/* Hero gradient - Violet vers Cyan */
--gradient-hero: linear-gradient(135deg, hsl(262 83% 58%), hsl(200 98% 60%));

/* Accent gradient - Violet clair vers Rose */
--gradient-accent: linear-gradient(135deg, hsl(280 90% 70%), hsl(320 85% 60%));

/* Background subtle */
--gradient-subtle: linear-gradient(180deg, hsl(240 15% 6%), hsl(240 15% 10%));
```

### Gradients par catégorie

```css
/* Admin - Bleu */
.admin-gradient { from-blue-500 to-cyan-500 }

/* Commercial - Vert */
.commercial-gradient { from-green-500 to-emerald-500 }

/* Gestion - Violet/Rose */
.gestion-gradient { from-purple-500 to-pink-500 }

/* Support - Orange/Rouge */
.support-gradient { from-orange-500 to-red-500 }

/* Marketing - Jaune/Orange */
.marketing-gradient { from-yellow-500 to-orange-500 }
```

---

## ✍️ Typographie

### Font Stack
```css
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 
               'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 
               'Helvetica Neue', sans-serif;
  font-feature-settings: 'cv11', 'ss01';
  font-optical-sizing: auto;
}
```

### Échelle typographique

| Élément | Taille | Poids | Line Height | Usage |
|---------|--------|-------|-------------|-------|
| **Hero Title** | 4xl-7xl (36-72px) | 700 (Bold) | 1.1 | Titres principaux |
| **Section Title** | 3xl-5xl (30-48px) | 700 (Bold) | 1.2 | Titres de section |
| **Subtitle** | xl-2xl (20-24px) | 400 (Normal) | 1.5 | Sous-titres |
| **Body Large** | lg-xl (18-20px) | 400 (Normal) | 1.6 | Texte important |
| **Body** | base (16px) | 400 (Normal) | 1.7 | Texte courant |
| **Small** | sm (14px) | 400 (Normal) | 1.5 | Texte secondaire |
| **Tiny** | xs (12px) | 400 (Normal) | 1.4 | Labels, tags |

### Styles spéciaux

```css
/* Texte ultra-léger */
.text-ultra-light {
  font-weight: 200;
  letter-spacing: -0.02em;
}

/* Texte espacé */
.text-spacious {
  letter-spacing: 0.05em;
}

/* Gradient text */
.gradient-text {
  background: var(--gradient-hero);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## 📏 Espacements

### Système d'espacement (4px base)

```css
/* Tailwind spacing scale */
1  = 4px   (0.25rem)
2  = 8px   (0.5rem)
3  = 12px  (0.75rem)
4  = 16px  (1rem)
6  = 24px  (1.5rem)
8  = 32px  (2rem)
12 = 48px  (3rem)
16 = 64px  (4rem)
24 = 96px  (6rem)
32 = 128px (8rem)
```

### Espacements par contexte

| Contexte | Padding/Margin | Usage |
|----------|---------------|-------|
| **Section verticale** | py-24 (96px) | Entre les grandes sections |
| **Container horizontal** | px-4 md:px-6 (16-24px) | Marges latérales |
| **Card padding** | p-6 à p-8 (24-32px) | Intérieur des cartes |
| **Espacement interne** | gap-4 à gap-8 (16-32px) | Entre éléments d'un groupe |
| **Espacement texte** | space-y-4 à space-y-6 | Entre paragraphes |

### Conteneurs

```css
/* Container principal */
max-w-7xl mx-auto px-6  /* 1280px max, centré, padding latéral */

/* Container moyen */
max-w-5xl mx-auto       /* 1024px max, pour hero */

/* Container étroit */
max-w-3xl mx-auto       /* 768px max, pour texte */

/* Container formulaire */
max-w-2xl mx-auto       /* 672px max, pour formulaires */
```

---

## 🧩 Composants

### 1. Glass Card (Effet verre)

```jsx
<div className="glass-card p-8 rounded-3xl">
  {/* Contenu */}
</div>
```

**Variantes :**
```css
/* Ultra (standard) */
.glass-ultra {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(40px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 
    0 8px 32px 0 rgba(0, 0, 0, 0.37),
    inset 0 1px 0 0 rgba(255, 255, 255, 0.05);
}

/* Strong (plus visible) */
.glass-strong {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(60px) saturate(200%);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Subtle (discret) */
.glass-subtle {
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(20px) saturate(150%);
  border: 1px solid rgba(255, 255, 255, 0.05);
}
```

### 2. Buttons

```jsx
/* Button Primary - Gradient */
<button className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-background font-semibold hover:scale-105 transition-transform shadow-lg">
  Démarrer maintenant
</button>

/* Button Secondary - Glass */
<button className="glass-card px-6 py-3 rounded-xl hover:border-primary/50 transition-all">
  En savoir plus
</button>

/* Button avec icône */
<button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl">
  <Zap className="w-5 h-5" />
  <span>Action</span>
</button>
```

### 3. Navigation

```jsx
<nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/40">
  <div className="max-w-7xl mx-auto px-6 py-3">
    {/* Logo + Nav items + CTA */}
  </div>
</nav>
```

**Hauteur fixe :** ~52-60px
**Z-index :** 50 (toujours au-dessus)

### 4. Input Fields

```jsx
<Input
  type="email"
  placeholder="vous@entreprise.fr"
  className="bg-background/50 h-14 text-base rounded-xl border-2 focus:border-primary"
/>
```

**Specs :**
- Hauteur : 56px (h-14)
- Border radius : 12px (rounded-xl)
- Focus state : border-primary avec ring

### 5. Badges

```jsx
/* Badge avec icône */
<div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm">
  <Sparkles className="w-4 h-4 text-primary" />
  <span>Nouveau</span>
</div>
```

### 6. Cards avec hover

```jsx
<div className="glass-card p-8 rounded-3xl hover:border-primary/40 transition-all duration-300 group hover:scale-105">
  {/* Contenu avec effets de groupe */}
  <div className="group-hover:scale-110 transition-transform">
    {/* Icône ou élément animé */}
  </div>
</div>
```

---

## ✨ Animations

### 1. Entrées de page (Framer Motion)

```jsx
/* Fade in from top */
<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>

/* Fade in from bottom */
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
>

/* Scale in */
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
>
```

### 2. Scroll animations

```jsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
>
```

### 3. Hover animations

```jsx
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
>
```

### 4. Animations CSS natives

```css
/* Float animation */
.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

/* Pulse lent */
.animate-pulse-slow {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Bounce */
.animate-bounce {
  animation: bounce 1s infinite;
}
```

### 5. Transitions

```css
/* Standard smooth */
.transition-all-smooth {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Transform avec bounce */
.transition-transform-smooth {
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Hover lift effect */
.hover-lift {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-lift:hover {
  transform: translateY(-4px) scale(1.01);
  box-shadow: 0 20px 60px 0 rgba(0, 0, 0, 0.6);
}
```

---

## 🔮 Glassmorphisme

### Implémentation

```css
.glass-card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(20px) saturate(180%);
}
```

### Variables CSS

```css
--glass-bg: hsla(240, 15%, 12%, 0.7);
--glass-border: hsla(240, 10%, 30%, 0.3);
```

### Effets de profondeur

```css
/* Depth 1 - Subtil */
.depth-1 {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
}

/* Depth 2 - Standard */
.depth-2 {
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.4);
}

/* Depth 3 - Élevé */
.depth-3 {
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.5);
}

/* Depth 4 - Maximum */
.depth-4 {
  box-shadow: 0 16px 48px 0 rgba(0, 0, 0, 0.6);
}
```

### Effets Glow

```css
/* Glow soft */
.glow-soft {
  box-shadow: 
    0 0 20px rgba(255, 255, 255, 0.05),
    0 0 40px rgba(255, 255, 255, 0.03);
}

/* Glow medium */
.glow-medium {
  box-shadow: 
    0 0 30px rgba(255, 255, 255, 0.08),
    0 0 60px rgba(255, 255, 255, 0.05);
}

/* Glow strong */
.glow-strong {
  box-shadow: 
    0 0 40px rgba(255, 255, 255, 0.12),
    0 0 80px rgba(255, 255, 255, 0.08);
}

/* Glow avec hover */
.hover-glow:hover {
  box-shadow: 
    0 0 40px rgba(255, 255, 255, 0.15),
    0 0 80px rgba(255, 255, 255, 0.1);
}
```

---

## 💡 Effets spéciaux

### 1. Gradient Mesh (Background animé)

```css
.gradient-mesh {
  background: 
    radial-gradient(at 0% 0%, rgba(99, 102, 241, 0.08) 0px, transparent 50%),
    radial-gradient(at 50% 0%, rgba(139, 92, 246, 0.08) 0px, transparent 50%),
    radial-gradient(at 100% 0%, rgba(236, 72, 153, 0.08) 0px, transparent 50%);
}
```

### 2. Orb gradient (Effets lumineux)

```jsx
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-[120px] animate-pulse" />
```

### 3. Gradient text

```jsx
<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
  Texte dégradé
</span>
```

---

## 📱 Responsive Design

### Breakpoints Tailwind

```javascript
{
  'sm': '640px',   // Mobile large
  'md': '768px',   // Tablette
  'lg': '1024px',  // Desktop
  'xl': '1280px',  // Large desktop
  '2xl': '1400px'  // Extra large
}
```

### Patterns responsive

```jsx
/* Texte responsive */
<h1 className="text-4xl md:text-6xl lg:text-7xl">

/* Grid responsive */
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

/* Padding responsive */
<div className="px-4 md:px-6 lg:px-8">

/* Espacement responsive */
<div className="space-y-4 md:space-y-6 lg:space-y-8">
```

---

## 🎯 Patterns de conversion

### 1. Hero Section

```jsx
<section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-32 px-4">
  {/* Background avec gradients animés */}
  <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
  
  {/* Orbs lumineux */}
  <motion.div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-[120px] animate-pulse" />
  
  {/* Contenu centré */}
  <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
    {/* Badge */}
    <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full">
      {/* ... */}
    </div>
    
    {/* Titre principal */}
    <h1 className="text-5xl md:text-7xl font-bold">
      {/* ... */}
    </h1>
    
    {/* Sous-titre */}
    <p className="text-xl md:text-2xl text-muted-foreground">
      {/* ... */}
    </p>
    
    {/* CTA */}
    <button className="bg-gradient-to-r from-primary to-secondary">
      {/* ... */}
    </button>
  </div>
</section>
```

### 2. Features Grid

```jsx
<div className="grid md:grid-cols-3 gap-6">
  {features.map((feature, index) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass-card p-8 rounded-3xl group hover:scale-105"
    >
      {/* Contenu */}
    </motion.div>
  ))}
</div>
```

### 3. Social Proof

```jsx
<div className="glass-card inline-flex items-center gap-8 px-8 py-4 rounded-full">
  <div className="text-center">
    <p className="text-2xl font-bold gradient-text">100+</p>
    <p className="text-xs text-muted-foreground">PME équipées</p>
  </div>
  <div className="w-px h-8 bg-border"></div>
  {/* Répéter */}
</div>
```

---

## 🔧 Utilitaires CSS personnalisés

### Scrollbar personnalisée

```css
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.15);
}
```

---

## 📋 Checklist d'implémentation

Lors de la création d'une nouvelle page/composant :

- [ ] Utiliser le fond `bg-background` ou `bg-[#0a0a0a]`
- [ ] Ajouter des animations d'entrée avec Framer Motion
- [ ] Utiliser `.glass-card` pour les surfaces
- [ ] Ajouter des effets de hover (scale, glow)
- [ ] Respecter l'espacement vertical `py-24` entre sections
- [ ] Utiliser les gradients de catégorie appropriés
- [ ] Ajouter des orbs lumineux pour la profondeur
- [ ] Optimiser pour mobile avec classes responsive
- [ ] Tester les transitions et animations
- [ ] Vérifier les contrastes pour l'accessibilité

---

## 🎨 Exemples complets

### Card de bénéfice

```jsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="glass-card p-8 rounded-3xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 space-y-6 group hover:scale-105"
>
  <div className="space-y-3">
    <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 w-fit group-hover:scale-110 transition-transform">
      <Zap className="w-8 h-8 text-background" />
    </div>
    <h3 className="text-2xl font-bold text-foreground">
      Titre du bénéfice
    </h3>
  </div>
  
  <p className="text-muted-foreground leading-relaxed">
    Description détaillée du bénéfice...
  </p>
  
  <div className="pt-4 border-t-2">
    <p className="text-base font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
      💡 Résultat concret
    </p>
  </div>
</motion.div>
```

### Formulaire de conversion

```jsx
<form className="glass-card p-8 rounded-3xl space-y-6 border-2 border-primary/20">
  {/* Pain point selection */}
  <div className="space-y-3">
    <label className="text-base font-medium">
      Votre principal défi ?
    </label>
    <div className="grid grid-cols-1 gap-2">
      {painPoints.map((point) => (
        <button
          type="button"
          className="glass-card p-4 rounded-xl hover:border-primary/50 transition-all"
        >
          {point}
        </button>
      ))}
    </div>
  </div>
  
  {/* Email input */}
  <Input
    type="email"
    placeholder="vous@entreprise.fr"
    className="bg-background/50 h-14 rounded-xl border-2"
  />
  
  {/* Submit button */}
  <Button className="w-full h-14 bg-gradient-to-r from-primary to-secondary">
    Recevoir ma démo gratuite
  </Button>
</form>
```

---

## 📚 Ressources

### Outils recommandés
- **Framer Motion** : Animations React
- **Tailwind CSS** : Framework CSS utility-first
- **shadcn/ui** : Composants React réutilisables
- **Lucide React** : Icônes

### Documentation
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [HSL Colors](https://www.w3schools.com/colors/colors_hsl.asp)

---

**Version 1.0** - Janvier 2025  
**Auteur** : Orchestra Design Team  
**Dernière mise à jour** : 02/10/2025

