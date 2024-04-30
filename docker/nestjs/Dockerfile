FROM node:20-alpine AS builder

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
# COPY package*.json ./
# COPY prisma ./prisma/

# # Install app dependencies
# RUN npm install

# Mount all app dir to container dir for development only

COPY . .

EXPOSE 3000 5555