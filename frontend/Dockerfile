FROM node:16-alpine as frontend

WORKDIR /usr/src/app

COPY . ./

RUN yarn install

RUN yarn build

CMD ["yarn", "start"]