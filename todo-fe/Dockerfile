FROM node:20-alpine AS base

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN corepack enable pnpm

RUN pnpm install

COPY . .

RUN pnpm build

FROM nginx:1.24-alpine AS prod

COPY --from=base /app/dist /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000 

