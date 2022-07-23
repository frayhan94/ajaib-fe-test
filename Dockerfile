FROM node:8-alpine

ENV NODE_ENV development
ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /usr/src/app

COPY package*.json ./
COPY package-lock.json .

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 80

CMD [ "npm", "start" ]