# Portfolio

<!-- ## Introduction  -->

## Prérequis
Avant de commencer, assurez-vous d'avoir installé :

-  [Node.js](https://nodejs.org/) (version recommandée : LTS)
- [PostgreSQL](https://www.postgresql.org/) (si vous utilisez une base de données locale)
- [Git](https://git-scm.com/)

## Installation

Clonez le projet :

```bash
git clone https://github.com/Liilice/Portfolio-v2.git
```

### Installation du Frontend (React + Vite)
À partir de la racine du projet : 

```bash
cd Portfolio-v2
npm install
```

### Installation du Backend (NestJS)
À partir de la racine du projet : 

```bash
cd server
npm install
```

## Configuration des Variables d'Environnement

### Frontend (`Portfolio/.env`)

Créez un fichier `.env` à la racine du dossier `Portfolio` et ajoutez :

```env
VITE_API_URL=PORT_BACKEND
```

### Backend (`server/.env`)

Créez un fichier `.env` à la racine du dossier `server` et ajoutez :

```env
DB_HOST='localhost'
DB_PORT=5432
DB_USERNAME=DB_USERNAME
DB_PASSWORD=DB_PASSWORD
DB_DATABASE=DB_DATABASE

EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password

PORT=3333
```

## Démarrage du Projet

### Lancer le Backend

Assurez-vous que PostgreSQL est en cours d'exécution, puis lancez le serveur NestJS :

```bash
cd server
npm run start:dev
```

### Lancer le Frontend

Dans un autre terminal, lancez le projet React :

```bash
cd portfolio
npm run dev
```

Le frontend sera accessible via `http://localhost:5173` (par défaut avec Vite).

## Déploiement

<!-- ### Backend

1. Construire le projet NestJS :

```bash
npm run build
```

2. Déployer sur un serveur (Heroku, Vercel, etc.). -->

### Frontend

1. Construire le projet React :

```bash
npm run build
```

2. Héberger le contenu du dossier `dist` sur Vercel, Netlify ou GitHub Pages.

## Structure du Projet

```
/votre-repo
│── Portfolio/   # Frontend (React + Vite)
│── server/      # Backend (NestJS)
│── README.md    # Documentation
```

## Technologies Utilisées

- **Frontend** : React, Vite
- **Backend** : NestJS, PostgreSQL
- **Email** : Nodemailer
- **Hébergement** : Vercel

## Contribution

1. Fork le projet
2. Créer une branche `nouvelle-feature`
3. Commit et push vos modifications
4. Ouvrir une Pull Request

<!-- http://localhost:3000/api : lancer l'api -->
