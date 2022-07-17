FROM node:16-alpine

# update npm to the latest minor version
RUN npm install -g npm

# install dependencies for node-gyp
RUN apk add --no-cache python3 make g++

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

COPY . .

CMD [ "npm", "run", "start" ]