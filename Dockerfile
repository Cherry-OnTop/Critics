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

ENV db_name=SDC db_user=root newrelic=9d30938ffd5094aeee52cc82d1d9197c21b81b15 db_host=18.221.65.191 db_pass=hackPlease1


CMD [ "npm", "run", "start" ]