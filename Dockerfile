FROM node:14 as build

COPY ./ /usr/node-app/server
WORKDIR /usr/node-app/server

RUN npm install
RUN npm run build

FROM node:14 as deploy

ENV REACT_APP_API_URL=http://localhost:3000/

WORKDIR /usr/node-app/server
COPY --from=build /usr/node-app/server .
ENTRYPOINT ["node", "."]

EXPOSE 3001