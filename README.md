## 📋 ToDoList - Modern Task Management Application 📋 ToDoList - Modern Task Management Application

[![NestJS](https://img.shields.io/badge/NestJS-v11.0.1-red)](https://nestjs.com/)
[![Angular](https://img.shields.io/badge/Angular-v20.0.0-blue)](https://angular.io/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v8.16.1-green)](https://www.mongodb.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5.7.3-blue)](https://www.typescriptlang.org/)
[![JWT](https://img.shields.io/badge/JWT-Authentication-yellow)](https://jwt.io/)

A full-stack task management application built with NestJS, Angular, and MongoDB. This application features secure user authentication with JWT and bcrypt password hashing, allowing users to efficiently create, manage, and track their tasks with a clean and responsive user interface. The backend API is properly prefixed and secured with CORS configuration.

## ✨ Features

- **User Authentication & Authorization**

  - Secure registration and login with bcrypt password hashing
  - JWT token-based authentication with secure storage
  - Protection against unauthorized access

- **Task Management**

  - Create, read, update, and delete tasks (CRUD operations)
  - Task categorization and filtering
  - Due date tracking with optional reminders
  - Completion status tracking

- **User Experience**

  - Clean, intuitive interface with modern design
  - Responsive layout for all device sizes
  - Form validation with helpful error messages
  - Persistent login sessions

- **Security Features**
  - CORS protection for API endpoints (configured in backend/main.ts)
  - Password encryption using bcrypt with proper hashing
  - Secure JWT implementation for authentication
  - Form validation with class-validator
  - Input sanitization and validation
  - Protection against common web vulnerabilities

## 🏗️ Tech Stack

### Backend (NestJS)

- **Framework**: NestJS v11.0.1
- **Database**: MongoDB with Mongoose v8.16.1
- **Authentication**: JWT (JSON Web Tokens) with @nestjs/jwt v11.0.0
- **API**: RESTful API design with global '/api' prefix
- **Validation**: Class-validator v0.14.2 & class-transformer v0.5.1 for DTO validation
- **Security**: bcrypt v6.0.0 for password hashing
- **Error Handling**: Consistent error responses with proper HTTP status codes
- **CORS**: Configured for secure cross-origin requests

### Frontend (Angular)

- **Framework**: Angular v20.0.0
- **State Management**: RxJS v7.8.0
- **API Integration**: Angular HttpClient with proper API endpoint configuration
- **UI Components**: Custom-styled components with CSS and Bootstrap v5.3.7
- **Form Handling**: Reactive forms with validation
- **Security**: JWT token storage in browser
- **Navigation**: Angular Router with protected routes

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB instance (local or Atlas)
- npm package manager

### Installation

#### Clone the repository

```bash
git clone https://github.com/kalush666/ToDoList.git
cd ToDoList
```

#### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory with the following variables:

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/todolist
# JWT Configuration - Make sure to replace with a strong, secure key in production
JWT_SECRET=your_secure_jwt_secret_key_replace_in_production
JWT_EXPIRATION=7d
```

#### Frontend Setup

```bash
cd frontend
npm install
```

### Running the Application

#### Development Mode

Start the backend:

```bash
cd backend
npm run start:dev
```

The backend server will start on http://localhost:3000 with API endpoints accessible at http://localhost:3000/api

Start the frontend:

```bash
cd frontend
npm run start
```

The Angular development server will start and the application will be available at http://localhost:4200

The application will be available at:

- Frontend: http://localhost:4200
- Backend API: http://localhost:3000/api (e.g., http://localhost:3000/api/auth/login)

#### Production Build

Build the backend:

```bash
cd backend
npm run build
npm run start:prod
```

Build the frontend:

```bash
cd frontend
npm run build
```

## 🧪 Testing

### Backend Tests

```bash
cd backend
npm run test        # Unit tests
npm run test:e2e    # End-to-end tests
npm run test:cov    # Test coverage
```

### Frontend Tests

```bash
cd frontend
npm run test
```

## 📁 Project Structure

### Backend Structure

```
backend/
├── src/
│   ├── auth/             # Authentication module with JWT implementation
│   │   ├── dto/          # Data Transfer Objects for authentication
│   ├── constants/        # Application constants
│   ├── database/         # Database configuration
│   ├── tasks/            # Task module (CRUD operations)
│   │   ├── dto/          # Data Transfer Objects for tasks
│   │   ├── schemas/      # Mongoose schemas for tasks
│   ├── user/             # User module
│   │   ├── dto/          # Data Transfer Objects for users
│   │   ├── interfaces/   # TypeScript interfaces for user data
│   │   ├── schemas/      # Mongoose schemas for users
│   ├── app.module.ts     # Main application module
│   └── main.ts           # Application entry point with CORS and API prefix config
└── test/                 # Test files
```

### Frontend Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── constants/    # Application constants including API endpoints
│   │   ├── login/        # Login component with form validation
│   │   ├── models/       # Data models/interfaces for tasks and users
│   │   ├── api.service.ts # API service for backend communication
│   │   ├── app-routing-module.ts # Routing configuration
│   │   ├── app.html      # Main application template
│   │   └── app.ts        # Main application component
│   ├── styles.css        # Global styles
│   └── index.html        # Main HTML file
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

- **Project Maintainer** - [Jonathan Kalush](mailto:jonathan.kalush@example.com)
- **Project Link** - [https://github.com/kalush666/ToDoList](https://github.com/kalush666/ToDoList)

---

## 📊 Current Status

- ✅ User authentication (login) with JWT and bcrypt is implemented and working
- ✅ API prefixing and CORS configuration are properly set up
- ✅ Login functionality is fully implemented and tested
- ✅ Frontend-backend communication is established
- ⏳ Task management features to be implemented next
- ⏳ User registration to be implemented

---

Built with ❤️ using NestJS and Angular
