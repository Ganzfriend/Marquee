FROM node:15.7.0
WORKDIR /marquee/app
COPY . /marquee/app
RUN npm install
ENV MONGODBURL='mongodb://database/marquee'
EXPOSE 3004
CMD [ "node", "server/index.js" ]
