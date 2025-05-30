---
title: "How to Build a REST API with Node.js"
description: "Step-by-step guide to building a RESTful API using Node.js and Express, including authentication and deployment tips."
link: "https://dev.to/example/build-a-rest-api-with-nodejs-1234"
imgLink: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=3200&auto=format&fit=crop"
altDesc: "Code editor showing Node.js code"
date: 2024-03-15
---

## Introduction

REST (Representational State Transfer) APIs are a standard way to enable communication between client and server applications over HTTP. They are widely used due to their simplicity, scalability, and statelessness.

## What is a REST API?

A REST API exposes endpoints (URLs) that allow clients to perform operations (such as Create, Read, Update, Delete) on resources. Each endpoint corresponds to a specific HTTP method:

- **GET**: Retrieve data
- **POST**: Create new data
- **PUT/PATCH**: Update existing data
- **DELETE**: Remove data

## Setting Up Node.js and Express

To build a REST API, you'll need Node.js and the Express framework. Start by initializing a new project:

```bash
mkdir rest-api-example
cd rest-api-example
npm init -y
npm install express
```

Create an `index.js` file:

```js
const express = require("express");
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

## Defining Routes

Let's define some basic routes for a simple resource, such as "users":

```js
let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

// GET all users
app.get("/users", (req, res) => {
  res.json(users);
});

// GET a single user
app.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send("User not found");
  res.json(user);
});

// POST a new user
app.post("/users", (req, res) => {
  const user = { id: users.length + 1, name: req.body.name };
  users.push(user);
  res.status(201).json(user);
});
```

## Adding Authentication

For basic authentication, you can use middleware like `jsonwebtoken` for JWT-based authentication. Install it:

```bash
npm install jsonwebtoken
```

Then, add authentication logic to protect your routes.

## Deployment Tips

- Use environment variables for sensitive data.
- Consider using services like Heroku, Vercel, or AWS for deployment.
- Always validate and sanitize input to prevent security vulnerabilities.

## Conclusion

Building a REST API with Node.js and Express is straightforward and powerful. With proper structure and best practices, you can create scalable and maintainable APIs for any application.
