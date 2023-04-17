FROM node:15 as client

WORKDIR /app/client

COPY /ethicClient/package.json /app/client/

RUN npm install

COPY /ethicClient /app/client/

RUN npm run build

FROM node:16-alpine

WORKDIR /app

COPY ethicServer/package.json  /app/

RUN npm install

COPY ethicServer /app/

COPY --from=client /app/client/build /app/client

EXPOSE 8080

CMD [ "npm", "start" ]
