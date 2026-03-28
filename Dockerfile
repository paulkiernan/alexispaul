FROM nginx:alpine
COPY index.html /usr/share/nginx/html/index.html
COPY dog.webp /usr/share/nginx/html/dog.webp
