# 🎸 Proyecto 7 Rock the Code 🎸

## 🚀 Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB**

## 📦 Dependencies

```json
"dependencies": {
    "bcrypt": "^5.1.1",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.4.0"
},
"devDependencies": {
    "nodemon": "^3.1.0"
}
```

## 📜 Scripts

- `dev`: `nodemon index.js`
- `start`: `node index.js`
- `seed`: `node seed/seed.js`

The `npm run seed` script adds 8 users to the database.

## 🌐 API Routes

### Users

- **Base URL**: `/api/users`
  - `GET /`: Fetch all users (`AllUsers`)
  - `POST /register`: Register a new user (`Register`)
  - `PUT /update/:_id`: Update a user by ID (`AuthUser`, `Update`)
  - `POST /login`: Login a user (`Login`)

### Services

- **Base URL**: `/api/services`
  - `GET /`: Fetch all services (`AllServices`)
  - `POST /create`: Create a new service (`Create`)
  - `PUT /update/:_id`: Update a service by ID (`Update`)
  - `DELETE /delete/:_id`: Delete a service by ID (`Delete`)

### Contracts

- **Base URL**: `/api/contracted`
  - `GET /`: Fetch all contracted services (`AuthUser`, `AllContracted`)
  - `POST /new-contract`: Create a new contract (`AuthUser`, `NewContract`)

## 📄 Sample Data

### Create a User

To create a user, send the following JSON payload:

```json
{
  "name": "Daniele11s0",
  "lastName": "Mazzola1",
  "email": "correos1s10@correo.com",
  "age": 38,
  "phone": 777777778,
  "password": "1234567"
}
```

### User Login

After registering, you can log in with:

```json
{
  "email": "correo1@correo.com",
  "password": "Password-1"
}
```

You will receive a token to authenticate protected routes such as:

- `PUT /update/:_id` (user routes)
- Contract routes:
  - `GET /api/contracted` (`AuthUser`, `AllContracted`)
  - `POST /api/contracted/new-contract` (`AuthUser`, `NewContract`)

### Create a Service

To create a service, send the following JSON payload:

```json
{
  "serviceName": "Credit card",
  "code": 4
}
```

> Note: The code must be unique and manually added, serving as a distinct ID separate from MongoDB/Mongoose generated IDs.

### View Contracts

To view your contracts, access:
`/api/contracted` with a valid Bearer Token.

### Create a New Contract

To create a new contract, send the following JSON payload to `/api/contracted/new-contract`:

```json
{
  "idService": "664bb4586b27704a2207d059"
}
```

## 👨‍💻 Author

Work done by Daniele Mazzola

🔗 [GitHub Repository](https://github.com/danielemazzola/proyect_7)

```

```
