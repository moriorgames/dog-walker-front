# docker build -t moriorgames/dog-walker-front .
# docker run --name dog-walker-front -p 7777:7777 -d moriorgames/dog-walker-front
FROM node:12

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
RUN npm install

# Bundle app source
COPY . .

# If you are building your code for production
RUN npm ci --only=production

EXPOSE 7777

CMD [ "npm", "start" ]
