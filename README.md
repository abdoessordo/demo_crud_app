# Gestion des Produits (Demo App CRUD)

Bienvenue dans cette application CRUD dédiée à la gestion des produits sur un site de commerce électronique (application fictive). Cette application vous permettra de parcourir une liste de produits, de rechercher des produits par leur nom, de consulter leur page respective et même de les acheter. En outre, un tableau de bord administrateur est également disponible, vous permettant d'effectuer toutes les opérations CRUD : ajouter des produits, les mettre à jour et les supprimer. Profitez de cette expérience de gestion de produits simplifiée !

## Environment Variables

Pour exécuter ce projet, vous devrez ajouter les variables d'environnement suivantes à votre fichier .env dans le répertoire du serveur :

PORT: [Le numéro de port sur lequel le serveur sera en écoute]

DB_URL: [L'URL de votre base de données]

Assurez-vous de remplir ces valeurs appropriées avant de lancer le projet.

## Référence de l'API

#### Obtenir tous les produits

```http
  POST /api/produit/add
```

#### Obtenir tout les produits

```http
  GET /api/produit/all
```

#### Obtenir tout les produits qui ne sont pas en rupture de stock

```http
  GET /api/produit/all/available
```

#### Obtenir tout les produits

```http
  GET /api/produit/search?nom=${nom}
```

| Parameter | Type     | Description                                                                      |
| :-------- | :------- | :------------------------------------------------------------------------------- |
| `nom`     | `string` | **Obligatoire**. Nom du produit à récupérer. Si vide, renvoie tous les produits. |

#### Obtenir un produit par son identifiant

```http
  GET /api/produit/${id}
```

| Parameter | Type     | Description                                  |
| :-------- | :------- | :------------------------------------------- |
| `id`      | `string` | **Obligatoire**. ID du produit à récupérer.. |

#### Mettre à jour un produit

```http
  PUT /api/update/${id}
```

| Parameter | Type     | Description                                 |
| :-------- | :------- | :------------------------------------------ |
| `id`      | `string` | **Obligatoire**. ID du produit à modifier.. |

#### Supprimer un produit

```http
  DELETE /api/update/${id}
```

| Parameter | Type     | Description                                 |
| :-------- | :------- | :------------------------------------------ |
| `id`      | `string` | **Obligatoire**. ID du produit à supprimer. |

## Exécution en local

Clonez le projet

```bash
  git clone https://link-to-project
```

Accédez au répertoire du projet

```bash
  cd demo_crud_app
```

#### Serveur (Express API)

Accédez au répertoire du serveur

```bash
  cd server
```

Installez les dépendances

```bash
  npm install
```

Démarrez le serveur

```bash
  npm run serve
```

#### Server (React)

Accédez au répertoire du client

```bash
  cd client
```

Installez les dépendances

```bash
  npm install
```

Démarrez le serveur

```bash
  npm run dev
```

## Screenshots

## Screenshots

![Screenshot 1](https://abdoessordo.github.io/demo_crud_app/screenshots/1.png)

![Screenshot 2](https://abdoessordo.github.io/demo_crud_app/screenshots/2.png)

![Screenshot 3](https://abdoessordo.github.io/demo_crud_app/screenshots/3.png)

![Screenshot 4](https://abdoessordo.github.io/demo_crud_app/screenshots/4.png)

![Screenshot 5](https://abdoessordo.github.io/demo_crud_app/screenshots/5.png)

![Screenshot 6](https://abdoessordo.github.io/demo_crud_app/screenshots/6.png)

![Screenshot 7](https://abdoessordo.github.io/demo_crud_app/screenshots/7.png)

![Screenshot 8](https://abdoessordo.github.io/demo_crud_app/screenshots/8.png)

## Authors

- [@abdoessordo](https://www.github.com/abdoessordo)

## Badges

Ce projet est sous licence [MIT](https://github.com/abdoessordo/demo_crud_app/blob/main/LICENSE).

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/abdoessordo/demo_crud_app/blob/main/LICENSE)
