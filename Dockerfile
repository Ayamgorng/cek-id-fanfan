FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .

RUN npm install && npm install qrcode-terminal && npm install pm2 -g && node update-list-game/duniagamesUpdate.js && node update-list-game/codashopUpdate.js 

COPY . .

EXPOSE 5000

CMD ["node", "index.js"]
