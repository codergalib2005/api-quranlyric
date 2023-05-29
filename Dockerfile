FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build


FROM node:18-alpine

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}}


WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci --only=production
