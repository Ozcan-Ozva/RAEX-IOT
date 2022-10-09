### STAGE 1: Build ###
FROM node:12.22.8-alpine as build
RUN mkdir -p /app
WORKDIR /app

COPY package.json /app/
RUN npm install --legacy-peer-deps

COPY . /app/
RUN npm run build --pord

### STAGE 2: Run ###
FROM nginx:alpine
COPY --from=build /app/dist/RAEX-IOT /usr/share/nginx/html