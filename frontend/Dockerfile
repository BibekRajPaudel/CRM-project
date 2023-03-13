FROM node:alpine
WORKDIR '/app'

COPY package.json .
RUN npm --force install
COPY . .
CMD ["npm","start"]