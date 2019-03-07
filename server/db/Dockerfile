# mongo
FROM mongo

# Set the working directory to /app
WORKDIR /public/server/db

# COPY package*.json ./

# Install any needed node dependencies
# RUN npm install

# Bundle app source
COPY . .

EXPOSE 27017

# Run app.py when the container launches
# CMD ["mongod"] #for mongodb
# CMD ["npm", "run" ,"server-dev"]
CMD ["mongod"]