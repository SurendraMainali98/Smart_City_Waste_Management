# Step 1: Use an official Node.js image as a base
FROM node:16

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the rest of your application code
COPY . .

# Step 6: Compile TypeScript to JavaScript (if applicable)
RUN npm run build

# Step 7: Expose the port your app will run on
EXPOSE 3000

# Step 8: Define the command to start the application
CMD ["npm", "start"]
