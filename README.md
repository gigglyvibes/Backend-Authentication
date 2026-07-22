# 🔐 Backend Authentication with JWT

A simple backend authentication system built using **Node.js**, **Express.js**, **MongoDB**, and **JWT (JSON Web Token)**.

## ✨ Features

- 👤 User Registration
- 🔑 Secure User Login
- 🔒 Password Hashing with **bcrypt**
- 🎟️ JWT Token Generation
- 🍪 Cookie-Based Authentication
- 🛡️ Protected Routes using JWT Verification
- 📦 MongoDB Database Integration

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/gigglyvibes/Backend-Authontication.git
```

### Install dependencies

```bash
npm install
```

### Create a `.env` file

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Start the server

```bash
npm run dev
```

## 🔄 Authentication Flow

1. User registers with a username, email, and password.
2. Password is securely hashed before being stored.
3. On successful login, the server generates a JWT token.
4. The JWT is stored in an HTTP cookie.
5. Every request to a protected route verifies the token before granting access.

## 🛠️ Tech Stack

- 🟢 Node.js
- ⚡ Express.js
- 🍃 MongoDB & Mongoose
- 🔐 JWT (jsonwebtoken)
- 🔑 bcrypt
- 🌱 dotenv

---

### ⭐ If you like this project, don't forget to star the repository!

Made with ❤️ by **Manoj Telagadi**
