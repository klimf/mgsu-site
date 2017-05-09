FROM node

RUN mkdir -p /usr/src/front-end
COPY package.json /usr/src/front-end/package.json
WORKDIR /usr/src/front-end
RUN npm install
RUN npm run build
RUN mv ./build /usr/src/
VOLUME /usr/src/build
CMD ls
