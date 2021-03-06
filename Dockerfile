
FROM node:16-alpine3.14

ENV HOST 0.0.0.0
ENV PORT 5000

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

# Install production dependencies.
RUN npm ci --only=production

# Bundle app source
COPY . ./

EXPOSE 5000
CMD [ "npm", "start" ]

