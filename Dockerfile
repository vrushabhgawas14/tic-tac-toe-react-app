FROM node:20

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 1313

CMD ["npm","start"]

