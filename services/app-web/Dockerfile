FROM node:lts-alpine3.18

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

# Build app
RUN npm run build

EXPOSE $NEXTJS_PORT

# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
USER node

ENV NEXT_TELEMETRY_DISABLED 1

# Run npm start script when container starts
CMD [ "npm", "start" ]