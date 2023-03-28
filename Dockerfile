FROM node:14 as client

WORKDIR /app/client

COPY /ethicClient/package.json /app/client/

COPY /ethicClient /app/client/

RUN npm install
RUN npm run build

FROM node:16-alpine

WORKDIR /app

COPY ethicServer/package.json  /app/

RUN npm install

COPY ethicServer /app/

COPY --from=client /app/client/build /app/

EXPOSE 8080

CMD [ "npm", "start" ]
