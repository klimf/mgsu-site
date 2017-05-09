
FROM node:latest

LABEL Name=efdev Version=0.0.0 
COPY package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /usr/src/app && mv /tmp/node_modules /usr/src
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm i -g pm2
RUN mkdir -p /usr/src/app/storage
EXPOSE 4000
VOLUME /usr/src/app/build
CMD pm2-docker bin/www -name efsite -i 2 && node scripts.js