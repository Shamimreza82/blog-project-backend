## Blog Management System

### Project Overview
The Blog Management System is a full-stack web application that enables users to create, read, update, and delete blogs while adhering to a role-based access control system. Admin users have additional privileges to manage users and blogs.

## Features

### User Roles
- **Admin**:
  - Created manually in the database with predefined credentials.
  - Can delete any blog.
  - Can block any user by updating the `isBlocked` property.
  - Cannot update any blog.
- **User**:
  - Can register and log in.
  - Can create blogs (only when logged in).
  - Can update and delete their own blogs.
  - Cannot perform admin actions.

### Authentication & Authorization
- **Authentication**:
  - Users must log in to perform write, update, and delete operations.
- **Authorization**:
  - Differentiates between Admin and User roles to secure actions.


### API Endpoints
| Endpoint                          | Method | Description                                |
|-----------------------------------|--------|--------------------------------------------|
| `/api/auth/register`              | POST   | Registers a new user.                      |
| `/api/auth/login`                 | POST   | Authenticates a user and generates a token.|
| `/api/blogs`                      | POST   | Allows a logged-in user to create a blog.  |
| `/api/blogs/:id`                  | PATCH  | Updates a user’s own blog by ID.          |
| `/api/blogs/:id`                  | DELETE | Deletes a user’s own blog by ID.          |
| `/api/blogs`                      | GET    | Fetches all blogs with search, sort, filter.|
| `/api/admin/users/:userId/block`  | PATCH  | Admin blocks a user by ID.                 |
| `/api/admin/blogs/:id`            | DELETE | Admin deletes any blog by ID.              |


### Technologies Used
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JSON Web Tokens (JWT)
- **Validation**: Zod

### Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/Shamimreza82/blog-project-backend.git
   ```
2. Navigate to the project directory:
   ```bash
   cd blog-management-system
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables in a `.env` file:
   ```env
    NODE_ENV=development
    PORT=5000
    DATABASE_URL=
    SALT_ROUND_PASS=
    JWT_ACCESS_SECRET=
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Access the application at `http://localhost:5000`.

### Live Demo
[Live URL](https://blog-management-system-navy.vercel.app/) 



---

For any queries or contributions, feel free to contact us!
Email: shamimrezaone@gmail.com 
