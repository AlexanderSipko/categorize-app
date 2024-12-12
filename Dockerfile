# Base on official Node.js Alpine image
FROM node:alpine

# Set working directory
WORKDIR /usr/app

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package*.json ./

# Install dependencies
RUN npm install

RUN npm uninstall punycode

# Copy all files
COPY ./ ./

# Build app
RUN npm run build

# Expose the listening port
EXPOSE 3005

# Run container as non-root (unprivileged) user
USER node

# Run npm start script when container starts
CMD [ "PORT=3005 npm", "start" ]
