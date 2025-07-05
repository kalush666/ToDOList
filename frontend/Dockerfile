FROM node:20-alpine AS development

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 4200

CMD ["npm", "start", "--", "--host", "0.0.0.0", "--port", "4200"]

FROM node:20-alpine AS build

ARG API_URL=http://localhost:3000
ARG NODE_ENV=production
ARG APP_NAME=ToDoList
ARG APP_VERSION=1.0.0

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN echo "export const environment = {\n\
  production: true,\n\
  apiUrl: '$API_URL'\n\
};" > src/environments/environment.prod.ts

RUN npm run build

FROM nginx:alpine AS production

RUN apk add --no-cache curl

COPY --from=build /app/dist/frontend /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

RUN addgroup -g 1001 -S nginx && \
    adduser -S nginx -u 1001

RUN chown -R nginx:nginx /var/cache/nginx /var/log/nginx /etc/nginx/conf.d && \
    touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid

USER nginx

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost/health || exit 1

CMD ["nginx", "-g", "daemon off;"]
