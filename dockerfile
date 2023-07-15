FROM node:16

WORKDIR /backend

ADD ./result /backend
ADD ./.env /backend
ADD ./package.json /backend

RUN yarn