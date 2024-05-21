## ROCK THE CODE - "PROYECT 7"

## FEATURES

In this project, I was inspired by a backend system for a banking entity, where users, after registering, will be able to sign up for bank services:

- Debit card
- Credit card

To sign up, you must log in.

> The system encrypts and compares passwords, and if they are correct, it generates a token using JWT.

## TECH

- NODE.JS
- EXPRESS:JS
- MONGOOSE
- JWT
- NODEMON -D

## SCRIPTS

- NPM RUN DEV
- NPM RUN START
- NPM RUN SEED

```sh
With npm run seed, we will register 10 test users in our database.
```

## END POINTS

#### USER

- /api/users (GET), Access for all application users
- /api/users/register (POST), User registration
- /api/users/update/:\_id (PUT), Update user
- /api/users/login (POST), Login user

#### SERVICES

- /api/services (GET), Access for all services
- /api/services/create (POST), Create services
- /api/services/update/:\_id (PUT), Update service
- /api/services/delete/:\_id (DELETE), Delete service

#### CONTRACT

- /api/contracted (GET), Access for my services contracted
- /api/contracted/new-contract (POST), Add new service to my account
