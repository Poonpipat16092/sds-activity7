FROM node:14.16.1 AS builder

WORKDIR /usr/src/app
COPY . .

RUN yarn -q install --production=false --no-lockfile --silent && \
    yarn run build && \
    yarn -q install --production=true --no-lockfile --silent && \
    yarn cache clean

FROM node:14.16.1

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/ /usr/src/app/

CMD ["yarn", "run", "start"]
