FROM node:16

WORKDIR /home/node/app

COPY ./backend/package*.json ./

RUN npm install

COPY ./backend .
