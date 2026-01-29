# Carambar Project - API

Ce projet est le test technique réalisé dans le cadre de la formation en alternance de Concepteur Développeur d'Application (CDA) à la Wild Code School.

## Description

API REST pour l'application Carambar Project, permettant de gérer et servir des blagues Carambar. L'API fournit des endpoints pour récupérer des blagues aléatoires, lister toutes les blagues, et consulter des blagues individuelles.

## Fonctionnalités

- Ajout d'une blague (via POSTMAN) (`POST /`)
- Récupération d'une blague aléatoire (`GET /random`)
- Liste de toutes les blagues (`GET /`)
- Consultation d'une blague par ID (`GET /:id`)
- Modification d'une blague par ID (via POSTMAN) (`PUT /:id`)
- Base de données SQLite avec migrations et seeders
- Gestion des erreurs et CORS activé (.env pour autoriser l'URL du front)

## Technologies utilisées

- **Backend :** Node.js, Express.js
- **Base de données :** SQLite avec Sequelize ORM
- **Outils :** Nodemon, ESLint, Prettier
- **Déploiement :** Render.com

## Installation

1. Clonez le repository :

   ```bash
   git clone https://github.com/tibononox/carambar-project.git
   cd carambar-project/api
   ```

2. Installez les dépendances :

   ```bash
   pnpm install
   ```

3. Configurez la base de données :

   ```bash
   pnpm run migrate
   pnpm run seed
   ```

4. Lancez le serveur de développement :
   ```bash
   pnpm run dev
   ```

## Utilisation

L'API écoute sur le port 8000 par défaut.

### Endpoints

- `POST /` : Ajoute une nouvelle blague dans la BDD
- `GET /random` : Retourne une blague aléatoire
- `GET /` : Retourne toutes les blagues
- `GET /:id` : Retourne une blague spécifique par ID
- `PUT /:id` : Mets à jour une blague spécifique (voir la [doc](https://carambar-project-api-1.onrender.com/api-docs) pour les data à fournir)

### Exemple de réponse

```json
{
  "id": 1,
  "question": "Quelle est la différence entre un poulet et une feuille ?",
  "answer": "Aucune, les deux sont des feuilles de poulet !"
}
```

## Liens

- **Repository Frontend :** [https://github.com/tibononox/carambar-project-front](https://github.com/tibononox/carambar-project-front)
- **Site déployé :** [https://tibononox.github.io/carambar-project-front/](https://tibononox.github.io/carambar-project-front/)
- **API Déployée :** [https://carambar-project-api-1.onrender.com/api/v1](https://carambar-project-api-1.onrender.com/api/v1)
- **API Doc (Swagger) :** [https://carambar-project-api-1.onrender.com/api-docs](https://carambar-project-api-1.onrender.com/api-docs)

## Scripts disponibles

- `pnpm run dev` : Lance le serveur avec nodemon
- `pnpm run start` : Lance le serveur en production
- `pnpm run migrate` : Exécute les migrations de base de données
- `pnpm run seed` : Alimente la base de données avec des données de test
- `pnpm run lint` : Vérifie et corrige le code avec ESLint et Prettier

## Auteur

- **tibononox** - [GitHub](https://github.com/tibononox)

## Licence

Ce projet est réalisé dans le cadre d'un test technique et n'est pas destiné à une utilisation commerciale.
