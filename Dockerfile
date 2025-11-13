FROM node:20-alpine

WORKDIR /app

ARG DATABASE_URL

COPY ./package* .

RUN npm install
RUN npm install typescript -g

COPY . .

RUN DATABASE_URL=${DATABASE_URL} npx prisma generate



EXPOSE 8000

CMD ["npm", "run", "start"]


