FROM node:18.12.0-slim AS base_node

WORKDIR /server

COPY package*.json ./

COPY . .

RUN npm ci

RUN npx prisma generate

EXPOSE $FASTIFY_SERVER_PORT

CMD ["npm", "start"]
