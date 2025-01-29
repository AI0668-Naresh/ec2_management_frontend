# Step 1: Set up the base image
FROM node:20 AS build


# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the rest of the application code to the container
COPY . .

# Step 6: Build the React app for production
RUN npm run build


# Step 9: Expose the port that the app will run on
EXPOSE 3000

# Step 10: Start Nginx to serve the app
CMD ["npm", "start"]