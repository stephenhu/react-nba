FROM nginx
WORKDIR /etc/nginx
COPY default.conf /etc/nginx/conf.d/
COPY build/ /usr/share/nginx/html
EXPOSE 80