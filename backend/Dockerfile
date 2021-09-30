FROM node:14.16.1

WORKDIR /usr/src/app

COPY . .
RUN yarn install
EXPOSE 8000

CMD ["yarn", "run", "start"]
