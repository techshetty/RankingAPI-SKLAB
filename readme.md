
# University Exam Result Processing System

## Overview

This application is designed to process and manage student exam results using a **Binary Search Tree (BST)** for efficient storage and retrieval. It supports functionalities like retrieving sorted student lists, searching for students by ID, and adding new students while maintaining the BST structure.

---

## Features

- Stores student data in a Binary Search Tree for optimized searching.
- Retrieves a sorted list of students based on their scores and assigns ranks.
- Allows searching for a specific student by their unique ID.
- Supports adding new students dynamically.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/techshetty/RankingAPI-SKLAB
   cd RankingAPI-SKLAB
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node index.js
   ```

4. The application runs on `http://localhost:8080`.

---

## Endpoints

### 1. **Status Check**
**`GET /`**

- **Description**: Verifies if the API is running.
- **Response**:
  ```json
  "ResAPI is running...."
  ```

---

### 2. **Get All Students**
**`GET /students`**

- **Description**: Retrieves the list of all students stored in the system.
- **Query Parameters**:
  - `sort` (optional): If set to `yes`, returns the students sorted by their scores in descending order with their ranks included.
    - Example: `/students?sort=yes`
- **Responses**:
  - **Without Sorting**:
    ```json
    [
        { "id": 101, "name": "Aarav", "score": 85 },
        { "id": 102, "name": "Kavya", "score": 90 }
    ]
    ```
  - **With Sorting** (`?sort=yes`):
    ```json
    [
        { "id": 102, "name": "Kavya", "score": 90, "rank": 1 },
        { "id": 101, "name": "Aarav", "score": 85, "rank": 2 }
    ]
    ```

---

### 3. **Get Student by ID**
**`GET /students/:id`**

- **Description**: Searches for a student in the BST by their unique ID.
- **Path Parameters**:
  - `id` (required): The unique ID of the student.
- **Responses**:
  - **200 OK**: Returns the student object.
    ```json
    { "id": 101, "name": "Aarav", "score": 85 }
    ```
  - **404 Not Found**: `"No Student found"`

---

### 4. **Add a New Student**
**`POST /students/`**

- **Description**: Adds a new student to the system and updates the BST.
- **Request Body**:
  ```json
  {
      "id": 103,
      "name": "Rohit",
      "score": 78
  }
  ```
  - `id` (required): Unique ID for the student.
  - `name` (required): Name of the student.
  - `score` (required): Exam score of the student.
- **Responses**:
  - **200 OK**: `"New Student added successfully and BST updated"`
  - **500 Internal Server Error**: `"Duplicate ID found"`

---

## Internal Functionality

### **Binary Search Tree (BST)**

- The system uses a BST implementation (`BST` class) for storing and managing student data.  
- Key methods in `BST`:
  1. **`insert(id, data)`**: Inserts a new node into the BST.
  2. **`search(id)`**: Searches for a node by ID.
  3. **`traverse()`**: Performs an in-order traversal to retrieve all students in ascending order of IDs.

### **Controller Methods**
1. **`loadStudents()`**: Loads student data from `data.json` into the BST on startup.
2. **`getSortedST()`**: Returns a list of students sorted by scores in descending order.
3. **`searchStudent(id)`**: Searches for a student by their ID in the BST.
4. **`addStudent(student)`**: Adds a new student to the BST and updates the dataset.
5. **`getList()`**: Retrieves all students in ascending order of their IDs.

---

## Example Data Format
A typical student record:
```json
{
    "id": 101,
    "name": "Aarav",
    "score": 85
}
```
