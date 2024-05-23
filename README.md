# 🎸 Project 7: Rock the Code

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB

## 📦 Dependencies

```json
"dependencies": {
  "bcrypt": "^5.1.1",
  "dotenv": "^16.4.5",
  "express": "^4.19.2",
  "jsonwebtoken": "^9.0.2",
  "mongoose": "^8.4.0"
}
```

## 🛠️ Development Dependencies

```json
"devDependencies": {
  "nodemon": "^3.1.0"
}
```

## 🚀 Scripts

```json
"scripts": {
  "dev": "nodemon index.js",
  "start": "node index.js",
  "seed": "node seed/seed.js"
}
```

The `npm run seed` script adds 10 users to the database.

## 📋 Routes

### USERS

| Method | Route                           | Middleware | Description            |
| ------ | ------------------------------- | ---------- | ---------------------- |
| GET    | `/api/users`                    | None       | Get all users          |
| POST   | `/api/users/register`           | None       | Register a new user    |
| PUT    | `/api/users/update/:_id`        | AuthUser   | Update user by ID      |
| POST   | `/api/users/login`              | None       | User login             |
| PUT    | `/api/users/modified-role/:_id` | AuthUser   | Change user role by ID |
| DELETE | `/api/users/delete/:_id`        | AuthUser   | Delete user by ID      |

To create a user, you need to send:

```json
{
  "name": "Dani",
  "lastName": "Mazzola",
  "email": "dani@correo.com",
  "age": 38,
  "phone": 777777778,
  "password": "123456"
}
```

### POSTS

| Method | Route                         | Middleware | Description       |
| ------ | ----------------------------- | ---------- | ----------------- |
| GET    | `/api/posts`                  | AuthUser   | Get all posts     |
| GET    | `/api/posts/:_id`             | AuthUser   | Get post by ID    |
| POST   | `/api/posts/new-post`         | AuthUser   | Create a new post |
| PUT    | `/api/posts/edit-post/:_id`   | AuthUser   | Update post by ID |
| DELETE | `/api/posts/delete-post/:_id` | AuthUser   | Delete post by ID |

To create a post, you need to send:

```json
{
  "title": "Hello World",
  "body": "Lorem Ipsum"
}
```

### REPLY

| Method | Route                          | Middleware | Description        |
| ------ | ------------------------------ | ---------- | ------------------ |
| GET    | `/api/reply`                   | AuthUser   | Get all replies    |
| GET    | `/api/reply/:_id`              | AuthUser   | Get reply by ID    |
| POST   | `/api/reply/new-reply/:_id`    | AuthUser   | Create a new reply |
| PUT    | `/api/reply/edit-reply/:_id`   | AuthUser   | Update reply by ID |
| DELETE | `/api/reply/delete-reply/:_id` | AuthUser   | Delete reply by ID |

## ✨ Created by Daniele Mazzola

[GitHub](https://github.com/danielemazzola/proyect_7)
