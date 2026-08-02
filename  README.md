# 🍽 Restaurant Management System API

A RESTful API built with **Node.js**, **Express.js**, and **SQLite** for managing restaurant operations. This project was developed as **Task 3** of the **CodeAlpha Backend Development Internship**.

---

## 🚀 Features

- Create menu items
- View all menu items
- Get menu item by ID
- Create restaurant tables
- View all tables
- Get table by ID
- Create customer orders
- View all orders
- Get order by ID
- SQLite database integration
- Layered Architecture
- RESTful API

---

## 🛠 Technologies Used

- Node.js
- Express.js
- SQLite3
- JavaScript
- REST API
- Postman

---

## 📂 Project Structure

```
restaurant-management-system
│
├── controllers
├── services
├── repositories
├── routes
├── database
├── app.js
├── package.json
└── README.md
```

---

## 📌 API Endpoints

### Menu

| Method | Endpoint |
|--------|----------|
| POST | /menu |
| GET | /menu |
| GET | /menu/:id |

### Tables

| Method | Endpoint |
|--------|----------|
| POST | /tables |
| GET | /tables |
| GET | /tables/:id |

### Orders

| Method | Endpoint |
|--------|----------|
| POST | /orders |
| GET | /orders |
| GET | /orders/:id |

---

## ▶️ Installation

```bash
npm install
node app.js
```

Server runs on:

```
http://localhost:3000
```

---

## 🧪 Testing

All endpoints were successfully tested using **Postman**.

---

## 📚 Internship

Developed for the **CodeAlpha Backend Development Internship**.