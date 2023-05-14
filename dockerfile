FROM node:latest AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build --prod

# Utiliser une image MySQL existante en tant que base
FROM mysql:latest

# Copier le script SQL dans le conteneur
COPY script.sql /docker-entrypoint-initdb.d/

# Définir les variables d'environnement pour la configuration de MySQL
ENV MYSQL_DATABASE=nom_de_la_base_de_donnees \
    MYSQL_USER=nom_utilisateur \
    MYSQL_PASSWORD=mot_de_passe \
    MYSQL_ROOT_PASSWORD=mot_de_passe_root

# Exposer le port MySQL
EXPOSE 3308


