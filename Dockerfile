FROM node:24-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the application via Node.js
FROM node:24-alpine
WORKDIR /app

# Copy production dependencies (optimizing image size)
COPY package*.json ./
RUN npm install --omit=dev

# Copy backend server script and frontend dist
COPY server.js ./
COPY --from=builder /app/dist ./dist

# Expose port and start
EXPOSE 80
CMD ["node", "server.js"]