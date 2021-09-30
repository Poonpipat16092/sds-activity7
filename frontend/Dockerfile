FROM node:alpine

WORKDIR /fronted/app
COPY . /fronted/app
RUN yarn install
EXPOSE 3000

CMD ["yarn","dev"]
