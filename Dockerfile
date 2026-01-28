# production environment
FROM node:20.12.2

# Create app directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# Create env variables
ENV PATH /usr/src/app/node_modules/.bin:$PATH
ARG GENERATE_SOURCEMAP=${GENERATE_SOURCEMAP}
ENV GENERATE_SOURCEMAP=${GENERATE_SOURCEMAP}

ARG DB_NAME=${DB_NAME}
ENV DB_NAME=${DB_NAME}

ARG PORT=${PORT}
ENV PORT=${PORT}

ARG FRONTEND_URL=${FRONTEND_URL}
ENV FRONTEND_URL=${FRONTEND_URL}

ARG VITE_GA_MEASUREMENT_ID=${VITE_GA_MEASUREMENT_ID}
ENV VITE_GA_MEASUREMENT_ID=${VITE_GA_MEASUREMENT_ID}

COPY ./ /usr/src/app
RUN npm install -g pnpm@10.28.1

# Create back app
RUN pnpm i --prod
RUN pnpm approve-builds --yes

# expose full app on APP_PORT
EXPOSE ${APP_PORT}
CMD ["node", "./index.js"]