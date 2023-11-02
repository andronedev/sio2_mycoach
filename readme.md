# MyCoach

Permet de centraliser les informations des activités d'un coach sportif et de permettre aux utilisateurs de s'informer et dans un autre temps de pouvoir s'inscrire à une activité.

# Sommaire

- [MyCoach](#mycoach)
- [Sommaire](#sommaire)
  - [Environnement de développement](#environnement-de-développement)
      - [Pour le back-end](#pour-le-back-end)
      - [Pour le front-end](#pour-le-front-end)
      - [Logiciels](#logiciels)
  - [Backlog](#backlog)
    - [Spring 1 - Page d'accueil](#spring-1---page-daccueil)
    - [Spring 2 - Page activité](#spring-2---page-activité)
    - [Spring 3 - Sécuriser / Organiser le code](#spring-3---sécuriser--organiser-le-code)
    - [Spring 4 - Gérer utilisateurs connectés](#spring-4---gérer-utilisateurs-connectés)
    - [Spring 5 - Ajouter une fonctionnalité](#spring-5---ajouter-une-fonctionnalité)
  - [Comment sont organisés les fichiers ?](#comment-sont-organisés-les-fichiers-)
    - [Front-end (/front)](#front-end-front)
    - [Back-end (/back)](#back-end-back)


## Environnement de développement

#### Pour le back-end

- PHP  
- MySQL
- Apache

#### Pour le front-end  

- Nuxt.js
- tailwindcss

#### Logiciels  

- Visual Studio Code
- Git
- GitHub
- EasyPHP Devserver

## Backlog 

### Spring 1 - Page d'accueil

- [X] Page d'accueil

### Spring 2 - Page activité 

- [X] Affichage dans un calendrier
- [X] Connexion avec une base de données

### Spring 3 - Sécuriser / Organiser le code

- [X] Sécuriser le code
- [X] Organiser le code

### Spring 4 - Gérer utilisateurs connectés

- [X] Page de connexion
- [X] Page d'inscription

### Spring 5 - Ajouter une fonctionnalité

- [X] Page de profil


## Comment sont organisés les fichiers ?

### Front-end (/front)
- `package.json` : Ce fichier contient les dépendances du projet ainsi que les scripts pour lancer le projet.

- `nuxt.config.js` : Ce fichier contient la configuration de Nuxt.js, un framework pour construire des applications Vue.js.

- `pages/` : Ce dossier contient les pages de l'application. Chaque fichier dans ce dossier correspond à une route de l'application.

- `layouts/` : Ce dossier contient les layouts de l'application. Les layouts sont des templates qui enveloppent les pages.

- `components/` : Ce dossier contient les composants de l'application. Les composants sont des blocs de code réutilisables.

- `static/` : Ce dossier contient les fichiers statiques de l'application, tels que les images et les fichiers CSS.

- `store/` : Ce dossier contient les fichiers Vuex, qui sont utilisés pour gérer l'état de l'application.

- `plugins/` : Ce dossier contient les plugins de l'application. Les plugins sont des modules qui étendent les fonctionnalités de Vue.js.

- `middleware/` : Ce dossier contient les middlewares de l'application. Les middlewares sont des fonctions qui sont exécutées avant de charger une page.

- `server/` : Ce dossier contient les fichiers pour le serveur de l'application.

- `test/` : Ce dossier contient les fichiers de test de l'application.

### Back-end (/back)

- `api.php` : Ce fichier contient les routes de l'API générale : 
  - `api.php?resource=activities` : retourne la liste des activités : 
    ```json
    [
        {
        "id": "1",
        "nom": "Musculation",
        "description": "Renforcement musculaire avec haltères et machines",
        "jour": "lundi",
        "horaire": "18h-20h",
        "id_activite": "1",
        "id_coach": "1",
        "id_lieu": "1"
        },
        {
        "id": "2",
        "nom": "Natation",
        "description": "Nage en bassin",
        "jour": "mardi",
        "horaire": "12h-13h",
        "id_activite": "2",
        "id_coach": "2",
        "id_lieu": "2"
        },
    ]
    ```
- `db.php` : Ce fichier contient les fonctions pour se connecter à la base de données et exécuter des requêtes SQL.
- `me.php` : Ce fichier contient les routes de l'API pour l'authentification : 
  - `me.php?action=info` : retourne les informations de l'utilisateur connecté : 
    ```json
    {
        "success": true,
        "user": {
            "id": "5",
            "nom": "Nicolas",
            "email": "andronedev@gmail.com"
        }
    }
    ```
  - `me.php?action=logout` : déconnecte l'utilisateur connecté : 
    ```json
    {
        "success": true
    }
    ```
- `auth.php` : Ce fichier gère les fonctions d'authentification, telles que l'inscription (`register`) et la connexion (`login`). Il utilise la base de données pour valider et enregistrer les informations des utilisateurs.
  
  - Action `register`: Permet à un nouvel utilisateur de s'inscrire. Valide le mot de passe, l'email, et le pseudo avant d'insérer les informations dans la base de données.  
    - **Requête POST à effectuer** :
      ```http
      POST /auth.php
      Content-Type: application/x-www-form-urlencoded

      action=register&nom=VotreNom&email=votre@email.com&password=VotreMotDePasse
      ```
    - **Réponse JSON en cas de succès** :
      ```json
      {
        "success": true,
        "token": "session_id_here"
      }
      ```
    - **Réponse JSON en cas d'échec** :
      ```json
      {
        "success": false,
        "error": "Raison de l'échec"
      }
      ```
    
  - Action `login`: Permet à un utilisateur de se connecter en vérifiant l'email et le mot de passe.  
    - **Requête POST à effectuer** :
      ```http
      POST /auth.php
      Content-Type: application/x-www-form-urlencoded

      action=login&email=votre@email.com&password=VotreMotDePasse
      ```
    - **Réponse JSON en cas de succès** :
      ```json
      {
        "success": true,
        "token": "session_id_here",
        "user": {
          "id": "user_id",
          "nom": "user_name",
          "email": "user_email"
        }
      }
      ```
    - **Réponse JSON en cas d'échec** :
      ```json
      {
        "success": false,
        "error": "Identifiants incorrects"
      }
      ```

Chacune de ces actions nécessite une requête HTTP POST vers le fichier `auth.php` avec des paramètres spécifiques envoyés en tant que données de formulaire (`application/x-www-form-urlencoded`). Les réponses sont renvoyées au format JSON.

Le fichier utilise des sessions PHP pour conserver les informations de l'utilisateur une fois connecté. Les réponses sont renvoyées au format JSON et toutes les erreurs sont également gérées et renvoyées en format JSON.