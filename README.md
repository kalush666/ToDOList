## 📋 ToDoList - Modern Task Management Application

[![NestJS](https://img.shields.io/badge/NestJS-v11.0.1-red)](https://nestjs.com/)
[![Angular](https://img.shields.io/badge/Angular-v20.0.0-blue)](https://angular.io/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v8.16.1-green)](https://www.mongodb.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5.7.3-blue)](https://www.typescriptlang.org/)
[![No JWT](https://img.shields.io/badge/Auth-Simple-green)](https://jwt.io/)

A full-stack task management application built with NestJS, Angular, and MongoDB. This application features secure user authentication with bcrypt password hashing (without JWT complexity), allowing users to efficiently create, manage, and track their tasks with a beautiful and responsive user interface. The backend API is configured with CORS enabled for all origins.

## ✨ Features

- **User Authentication & Authorization**

  - Secure registration and login with bcrypt password hashing
  - Simple session-based authentication (JWT removed for simplicity)
  - User signup and login functionality with form validation
  - Password encryption using bcrypt for security

- **Task Management**

  - View and display tasks with a beautiful card-based interface
  - Task details including title, description, due date, and completion status
  - Interactive checkboxes for marking tasks as complete/incomplete
  - Task editing and deletion functionality (UI ready)
  - Responsive grid layout for optimal viewing on all devices

- **User Experience**

  - Modern, beautiful interface with gradient backgrounds and glass-morphism effects
  - Fully responsive design that works on desktop, tablet, and mobile
  - Consistent styling across all components
  - Smooth animations and hover effects
  - Form validation with helpful error messages
  - Clean, intuitive navigation

- **Security Features**
  - CORS enabled for all origins (development-friendly configuration)
  - Password encryption using bcrypt with proper salt rounds
  - Form validation with class-validator
  - Input sanitization and validation
  - Secure API endpoint structure

## 🏗️ Tech Stack

### Backend (NestJS)

- **Framework**: NestJS v11.0.1
- **Database**: MongoDB with Mongoose v8.16.1
- **Authentication**: Simple authentication without JWT (removed for simplicity)
- **API**: RESTful API design running on port 3000
- **Validation**: Class-validator v0.14.2 & class-transformer v0.5.1 for DTO validation
- **Security**: bcrypt v6.0.0 for password hashing
- **Error Handling**: Consistent error responses with proper HTTP status codes
- **CORS**: Enabled for all origins for development flexibility

### Frontend (Angular)

- **Framework**: Angular v20.0.0
- **State Management**: RxJS v7.8.0
- **API Integration**: Angular HttpClient with proper API endpoint configuration
- **UI Components**: Custom-styled components with modern CSS design
- **Styling**: Beautiful gradient backgrounds, glass-morphism effects, and smooth animations
- **Form Handling**: Reactive forms with validation
- **Responsive Design**: Grid layouts and responsive breakpoints for all devices
- **Navigation**: Angular Router with component-based structure

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
# Note: JWT has been removed from this application for simplicity
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

The backend server will start on http://localhost:3000 with API endpoints accessible directly (no '/api' prefix)

Start the frontend:

```bash
cd frontend
npm run start
```

The Angular development server will start and the application will be available at http://localhost:4200

The application will be available at:

- Frontend: http://localhost:4200
- Backend API: http://localhost:3000 (e.g., http://localhost:3000/auth/login)

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
│   ├── auth/             # Authentication module (simplified, no JWT)
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
│   └── main.ts           # Application entry point with CORS configuration
└── test/                 # Test files
```

### Frontend Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── constants/    # Application constants including API endpoints
│   │   ├── login/        # Login component with beautiful styling
│   │   ├── sign-up/      # Signup component with form validation
│   │   ├── tasks/        # Tasks list component with grid layout
│   │   ├── task/         # Individual task component with card design
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

- ✅ User authentication (login & signup) implemented and working
- ✅ Beautiful, responsive UI with modern design and animations
- ✅ CORS configuration properly set up for all origins
- ✅ Backend API endpoints functioning correctly
- ✅ Frontend-backend communication established
- ✅ Task display functionality with beautiful card design
- ✅ Task status management (complete/incomplete toggle)
- ✅ Responsive grid layout for tasks
- ✅ All components styled consistently with gradient themes
- 🔄 Task editing and deletion functionality (UI ready, backend integration pending)
- 🔄 Task creation functionality to be implemented
- 🔄 User profile management features

---

Built with ❤️ using NestJS and Angular - Simplified and Beautiful!
