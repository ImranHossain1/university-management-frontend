FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 4200

RUN ["chmod", "+x", "./entrypoint.sh"]

ENTRYPOINT [ "sh", "./entrypoint.sh" ]

