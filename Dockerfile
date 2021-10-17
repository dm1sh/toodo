FROM node:alpine AS builder

WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY ./ ./
RUN NODE_ENV=production npm run build

FROM node:alpine
RUN npm install serve -g --silent
WORKDIR /app
COPY --from=builder /app/dist .
EXPOSE 80
CMD ["serve", "-p", "80", "-s", "."]