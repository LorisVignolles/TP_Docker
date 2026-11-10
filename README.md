# TP_Docker

TP Docker Loris Vignolles

## TP1 : Docker


### 3. Exercice : Manipulation de base des conteneurs

Manipulation d'une image de base Hello World

```bash
docker --version
docker images
docker pull hello-world
docker run hello-world
docker ps
docker ps -a
docker rm 1a99a4c3343d 
docker rmi e2ac70e7319a02c5a477f5825259bd118b94e8b02c279c67afa63adab6d8685b
```

### 4. Exercice : Création d'un serveur web avec Docker

```bash
docker pull nginx
docker run -d -p 8080:80 --name mon_nginx nginx
docker ps
docker stop mon_nginx
docker rm mon_nginx
```

### 5. Exercice : Déploiement d'une application Python Flask

Création d'une application web minimale Flask (`app.py`), rédaction du fichier `Dockerfile` pour conteneuriser l'environnement Python, construction de l'image, puis exécution du conteneur avec redirection du port 5000 vers la machine hôte.

```bash
docker build -t mon-app-flask .
docker run -d -p 5000:5000 --name conteneur-flask mon-app-flask
docker ps
docker stop conteneur-flask
docker rm conteneur-flask
```

### 6. Exercice : Utilisation de Docker Compose

Mise à jour de l'application Flask pour intégrer le driver MongoDB (`pymongo`), création du fichier `docker-compose.yml` définissant les deux services interconnectés (`web` et `mongodb`), persistance des données via un volume nommé, puis validation du déploiement et de la connexion à la base de données.

```bash
docker compose up -d --build
docker compose ps
curl http://localhost:5000
docker compose logs
docker compose down
```

## TP2 : Optimisation docker


| Optimisation réalisée | Taille de l'image | Durée de build |
| :--- | :--- | :--- |
| État initial | 1.32GB | 120s |
| Exclusion des fichiers locaux avec .dockerignore (node_modules notamment) | 1.31GB | 15s |
