FROM node:alpine

WORKDIR /app

COPY ./package.* .

RUN npm i -g pnpm 
RUN pnpm i

RUN pnpm dev

