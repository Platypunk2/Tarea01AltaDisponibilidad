#IMAGEN BASE
FROM node:alpine as builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

#AMBIENTE DE PRODUCCION
FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
#Las variables de entorno se encuentran dentro de .env dentro de front-end, estas corresponde a }
# Variables del sistema de autentificacion AUTH0
# URL de la API 

#EJECUCION DE LA APLICACION
CMD ["nginx", "-g", "daemon off;"]
 