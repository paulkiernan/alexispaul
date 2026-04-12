# Stage 1: Build the Vite + React frontend
FROM node:24-alpine AS builder

WORKDIR /app

# Install dependencies first for layer caching
COPY package*.json ./
RUN npm ci

# Copy the rest of the application
COPY . .

# In order for Vite to bake the password into the static build,
# it must be available during `npm run build`. 
# GitHub actions can pass this as a --build-arg
ARG LOGIN_PASSWORD
ENV LOGIN_PASSWORD=$LOGIN_PASSWORD

# Build the app for production
RUN npm run build

# Stage 2: Serve the application
FROM nginx:alpine

# Replace default Nginx configuration with our SPA-enabled one
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built static files from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
