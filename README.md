# API Library

Welcome to the API Library project! This project is a RESTful API built with NestJS and TypeORM that allows users to manage a library of books.

## Table of Contents
- [API Library](#api-library)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
    - [Instructions](#instructions)

## Features
- User authentication with JWT
- CRUD operations for books
- Swagger documentation for easy API exploration

## Prerequisites
Before you begin, ensure you have met the following requirements:
- [Node.js](https://nodejs.org/en/) installed (version 14.x or higher)
- [npm](https://www.npmjs.com/) installed (comes with Node.js)
- A running instance of a database (e.g., MySQL, PostgreSQL)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/zarksoad/library-api.git
   cd api-library
Install the dependencies:

bash
Copy code
npm install
Set up your environment variables. Create a .env file in the root directory of the project and configure your database connection and other settings:

plaintext
Copy code
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=yourusername
DATABASE_PASSWORD=yourpassword
DATABASE_NAME=yourdbname
JWT_SECRET=yourjwtsecret
Usage
To start the development server, run the following command:

bash
Copy code
npm run start:dev
The server will be running on http://localhost:3000/api.

Accessing Swagger Documentation
You can access the Swagger documentation by visiting http://localhost:3000/api in your browser. This documentation provides an interactive interface to test the API endpoints.

API Endpoints
Here are some of the main API endpoints available:

User Authentication
POST /api/auth/login: Log in and receive a JWT token.
Books
POST /api/books: Create a new book.
GET /api/books: Retrieve all books.
GET /api/books/:id: Get a book by ID.
PATCH /api/books/:id: Update a book by ID.
DELETE /api/books/:id: Delete a book by ID.
Sample Request for Login
To log in, use the following request body:

json
Copy code
{
  "email": "admin@library.com",
  "password": "H1234j$asdf"
}
Sample Response for Login
Upon successful login, you will receive a response with an access token:

json
Copy code
{
  "code": 201,
  "message": "Created",
  "data": {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInJvbGVJZCI6MSwiaWF0IjoxNzI3NDc4NzMzLCJleHAiOjE3Mjc0ODIzMzN9.AO58QEOvsi41Ztezw6S8PlRffBtK1MwLYZsdwVEbejQ"
  }
}
Database Setup
To set up the database, you can use the following SQL commands (example for PostgreSQL):

sql
Copy code
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    genre VARCHAR(100),
    published_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
Sample Data Insertion
You can also insert some sample data to test the API:

sql
Copy code
INSERT INTO users (email, password, role) VALUES
('admin@library.com', 'H1234j$asdf', 1);

INSERT INTO books (title, author, genre, published_date) VALUES
('The Great Gatsby', 'F. Scott Fitzgerald', 'Fiction', '1925-04-10'),
('1984', 'George Orwell', 'Dystopian', '1949-06-08'),
('To Kill a Mockingbird', 'Harper Lee', 'Fiction', '1960-07-11');
License
This project is licensed under the MIT License. See the LICENSE file for details.
