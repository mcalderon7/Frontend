FROM nginx:alpine
COPY dist/front-end/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf