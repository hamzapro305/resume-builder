# Choosing node version 18.1.0
FROM node:18.1.0 AS development

# Working directory in os is /app
WORKDIR /app

# Copy paste whole project in working directory and ignoring files listed in .dokerignore file
# /app/myproject 
COPY . .

# Installing dependencies in project while creating image
RUN yarn

# Exposing port to the main envoirement
EXPOSE 3000

# Command to run after creating container
CMD ["yarn", "dev"]