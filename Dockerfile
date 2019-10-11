FROM nginx:latest
MAINTAINER vue-demo
COPY dist/ /usr/share/nginx/html/   
