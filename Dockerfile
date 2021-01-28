FROM node:latest
RUN mkdir -p /marquee/app
WORKDIR /marquee/app
COPY . /marquee/app
RUN npm install
EXPOSE 3004
CMD [ "npm", "start" ]
