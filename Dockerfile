FROM node:22-alpine

RUN apk --no-cache -U upgrade

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

# Start the app
CMD ["npm", "run", "start"]
