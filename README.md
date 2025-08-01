Node Hotel Application
The **Node Hotel Application** is a Node.js-based backend system developed using the **Express.js** framework, with **MongoDB** as the database.  
This application manages data related to **hotel staff (Persons)** and **Menu Items**, exposing RESTful APIs for performing CRUD (Create, Read, Update, Delete) operations.

---

## 📌 Endpoints

### 👨‍🍳 Persons

- **Add a Person**  
  `POST /person`  
  Adds a person (staff) to the system with details such as name, role, etc.

- **Get All Persons**  
  `GET /person`  
  Retrieves a list of all persons in the system.

- **Update a Person**  
  `PUT /person/:id`  
  Updates the details of a specific person by their ID.

- **Delete a Person**  
  `DELETE /person/:id`  
  Deletes a person based on their ID.

---

### 🍽️ Menu Items

- **Add a Menu Item**  
  `POST /menu`  
  Adds a menu item with name, price, taste, etc.

- **Get All Menu Items**  
  `GET /menu`  
  Retrieves a list of all menu items.

- **Update a Menu Item**  
  `PUT /menu/:id`  
  Updates a specific menu item by ID.

- **Delete a Menu Item**  
  `DELETE /menu/:id`  
  Deletes a menu item based on ID.

---

📦 Data Models
👤 Person
The Person data model represents information about staff members in the hotel.

### 🔑 Fields:

- `name`: String — Person's name  
- `age`: Number — Person's age  
- `work`: Enum — Role in the hotel (e.g., chef, waiter, manager)  
- `mobile`: String — Person's mobile number  
- `email`: String — Person's email address (unique)  
- `address`: String — Person's address  
- `salary`: Number — Person's salary  

### 📄 Example:
```json
{
  "name": "John Doe",
  "age": 30,
  "work": "waiter",
  "mobile": "123-456-7890",
  "email": "john@example.com",
  "address": "123 Main Street",
  "salary": 30000
}

## 🍽️ Menu Item

The `MenuItem` data model represents the food and drinks available in the hotel.

### 🔑 Fields:

- `name`: String — Name of the item  
- `price`: Number — Price of the item  
- `taste`: Enum — Taste type (e.g., sweet, spicy, sour)  
- `is_drink`: Boolean — Whether it’s a drink (default: `false`)  
- `ingredients`: Array[String] — Ingredients used (default: `[]`)  
- `num_sales`: Number — Number of times sold (default: `0`)  

### 🧪 Example:
```json
{
  "name": "Spicy Chicken Curry",
  "price": 12.99,   
  "taste": "spicy",
  "is_drink": false,
  "ingredients": ["chicken", "spices", "vegetables"],
  "num_sales": 50
}


Usage
Install Dependencies:
npm install
