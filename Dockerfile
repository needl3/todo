FROM node:18

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build
RUN rm -r node_modules
RUN cd api
RUN npm install
RUN npm install pm2 -g
EXPOSE 80

CMD [ "pm2-runtime", "start", "index.js", "exec_mode", "cluster", "instances", "max" ]