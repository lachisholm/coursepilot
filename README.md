# CoursePilot

CoursePilot is a full-stack academic course tracking web application built with Node.js, Express, MongoDB, and EJS.

This project demonstrates authentication, session management, MVC architecture, and full CRUD functionality using Mongoose.

---

## Features

- User Registration
- Secure Login (bcrypt hashed passwords)
- Session-based Authentication
- Protected Routes
- Full CRUD for Courses
- User-specific Data Isolation
- Edit & Delete Capabilities
- 404 and 500 Error Handling
- Clean MVC Folder Structure

---

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- EJS
- express-session
- bcrypt
- dotenv

---

## Installation & Setup

1. Clone the repository:

2. Install dependencies:

3. Create a `.env` file in the root directory and include:


4. Run the application:


5. Open in browser:


---

## Project Structure
controllers/
models/
routes/
middleware/
views/
public/
config/
server.js


---

## Security Considerations

- Passwords are hashed using bcrypt.
- User-specific resource ownership enforced.
- Session-based route protection implemented.
- `.env` file excluded via `.gitignore`.

---

## Author

Lora Chisholm

---

## Project Purpose

This project was developed as part of the CSE 340 course to demonstrate full-stack application development using Express and MongoDB.





