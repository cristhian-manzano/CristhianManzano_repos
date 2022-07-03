FROM node:16.15.1-alpine as builder
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


FROM node:16.15.1-alpine
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./
RUN npm ci --production
COPY --from=builder /usr/src/app/dist ./dist

CMD [ "npm", "run", "start:prod" ]
