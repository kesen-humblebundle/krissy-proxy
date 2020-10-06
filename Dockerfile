FROM node:10

WORKDIR /usr/src/proxy

# why the *
COPY package.json .
RUN npm install

COPY . .

