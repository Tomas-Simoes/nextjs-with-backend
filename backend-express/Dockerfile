# Get a light weight Linux distribution with node version 16 installed on it
FROM node:16.17.0-bullseye-slim

# Initialize a working directory in your new OS.
WORKDIR /usr/src/app

# Copy package.json into the working directory that we initialized in previous step
COPY package*.json ./

# RUN npm install will install all the dependencies of your project
RUN npm install

# Copy all the files from your current directory to the working directory of the container
COPY . .

# Expose port 8080 from your container to local network
EXPOSE 8080

# Start the development server from your container
CMD [ "node", "app.js" ]