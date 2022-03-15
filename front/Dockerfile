FROM node:14 as builder
WORKDIR /app
COPY . /app/
RUN npm install && npm run build

FROM nginx:latest
RUN mkdir /app
COPY --from=builder /app/build /app
COPY nginx.conf /etc/nginx/nginx.conf
