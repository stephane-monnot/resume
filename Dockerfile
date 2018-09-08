# Stage 0 - Building
FROM alekzonder/puppeteer:latest as node

WORKDIR /app
COPY package.json /app/
RUN yarn install

COPY ./ /app/

# Build each versions
RUN REACT_APP_LOCALE=ja yarn build
RUN mv build build_ja
RUN REACT_APP_LOCALE=en yarn build
RUN mv build build_en
RUN yarn build
RUN mv build_ja build/ja
RUN mv build_en build/en

# Stage 1 - Package compiled app in Nginx
FROM nginx:stable-alpine

RUN rm -rf /etc/nginx/conf.d
RUN mkdir /etc/nginx/conf.d
COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN mkdir /app
WORKDIR /app

COPY --from=node /app/build/ /app
