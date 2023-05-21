# Use an official Node.js runtime as the base image
FROM node:18.12.0-slim

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm ci

# Copy the entire application code to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the default port for the Next.js blog (assuming it's 5000)
ENV PORT=$PORT_NUMBER
EXPOSE $PORT_NUMBER

# Define the command to run the Next.js blog
CMD ["npm", "run", "start"]
