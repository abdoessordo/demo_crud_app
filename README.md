
# Gestion des Produits (Demo App CRUD)

Bienvenue dans cette application CRUD dédiée à la gestion des produits sur un site de commerce électronique (application fictive). Cette application vous permettra de parcourir une liste de produits, de rechercher des produits par leur nom, de consulter leur page respective et même de les acheter. En outre, un tableau de bord administrateur est également disponible, vous permettant d'effectuer toutes les opérations CRUD : ajouter des produits, les mettre à jour et les supprimer. Profitez de cette expérience de gestion de produits simplifiée !


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

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `nom`      | `string` | **Obligatoire**. Nom du produit à récupérer. Si vide, renvoie tous les produits. |


#### Obtenir un produit par son identifiant

```http
  GET /api/produit/${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Obligatoire**. ID du produit à récupérer.. |

#### Mettre à jour un produit

```http
  PUT /api/update/${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Obligatoire**. ID du produit à modifier.. |

#### Supprimer un produit
```http
  DELETE /api/update/${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Obligatoire**. ID du produit à supprimer. |