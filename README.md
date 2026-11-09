# TP_Docker
TP Docker Loris Vignolles



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

### 5 Exercice : Déploiement d'une application Python Flask


### 6. Exercice : Utilisation de docker compose
