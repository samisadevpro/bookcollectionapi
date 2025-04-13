## Book Collection API – Microproject #2 ☕

**Project:** MongoDB, Express, and Node.js (MEN Stack) – Microproject #2  
**Objective:** Build a simple API to manage a book collection using Express and MongoDB Atlas.

## ✅ Features Implemented

MongoDB Atlas Connection

Express Server Setup

Schema Validation with Mongoose

Create (POST) Book Operation

JSON Request Handling

GitHub Integration (without node_modules)

## 📂 Project Structure

bookCollectionApi/
├── controllers/
│ └── bookController.js
├── models/
│ └── bookModel.js
├── routes/
│ └── bookRoutes.js
├── .env
├── server.js
├── package.json
└── README.md

## 🚀 Setup Instructions

### 1. Clone the Repository:

```sh
git clone https://github.com/samisadevpro/microproject-localcoffee-.git
cd microproject-localcoffee
```

### 2. Install Dependencies:

```sh
npm install
```

### 3. Environment Setup

Create a .env file in the root directory.
Add your MongoDB connection string.

### 4. Run the Server with Nodemon:

```sh
npm start
```

---

## API Endpoints

POST /api/books
Add a new book to the collection.

##🔻 Example Request Body (JSON)

{
"title": "The Alchemist",
"author": "Paulo Coelho",
"genre": "Fiction",
"publishedYear": 1988,
"available": true
}

# Use Postman or another API client to test this endpoint after running your app.

### **Author**

- **Samartha Rawal**
- **Prakriti Karki**
