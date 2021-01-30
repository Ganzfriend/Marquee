FROM node:latest
RUN mkdir -p /marquee/app
WORKDIR /marquee/app
COPY . /marquee/app
RUN npm install
ENV MONGODBURL='mongodb://database/marquee'
EXPOSE 3004
CMD [ "node", "server/index.js" ]
