# https://github.com/prisma/prisma/issues/16901
FROM node:18-alpine3.16

WORKDIR /server

COPY package.json package-lock.json ./

COPY . .

RUN npm install

RUN npx prisma generate

EXPOSE $FASTIFY_SERVER_PORT

CMD ["npm", "start"]
