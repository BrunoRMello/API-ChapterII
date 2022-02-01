FROM node

WORKDIR /usr/app

COPY package.json ./


RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]

# criar imagem comando => docker build -t rentx .