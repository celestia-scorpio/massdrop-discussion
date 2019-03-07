# node
FROM node

# Set the working directory to /app
WORKDIR /public/server

COPY package*.json ./

# Install any needed node dependencies
RUN npm install

# Bundle app source
COPY . .

# Make port 80 available to the world outside this container
EXPOSE 3005

# Run server.js when the container launches
CMD ["npm", "run" ,"server-dev"]