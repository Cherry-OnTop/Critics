#Import NodeJS Image
FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 9003

ENV DB_NAME=RDS_DB_NAME DB_USER=RDS_DB_USER NEWRELIC=NEW_RELIC_KEY DB_HOST=RDS_HOST_URL DB_PASS=RDS_DB_PASSWORD


CMD [ "npm", "run", "start" ]
