# 📋 ToDoList - Modern Task Management Application

[![NestJS](https://img.shields.io/badge/NestJS-v11.0.0-red)](https://nestjs.com/)
[![Angular](https://img.shields.io/badge/Angular-v20.0.0-blue)](https://angular.io/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v8.16-green)](https://www.mongodb.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5.4-blue)](https://www.typescriptlang.org/)

A sophisticated full-stack task management application built with NestJS, Angular, and MongoDB. This application allows users to create, manage, and track tasks efficiently with a beautiful and responsive UI.

![ToDoList Application Screenshot](https://via.placeholder.com/800x450?text=ToDoList+Application)

## ✨ Features

- **User Authentication & Authorization**

  - Secure registration and login
  - Role-based access control (user/admin)
  - JWT authentication

- **Task Management**

  - Create, read, update, and delete tasks
  - Filter tasks by completion status
  - Set due dates for tasks
  - View task history

- **User Profile Management**

  - Update personal information
  - Change password
  - View activity history

- **Responsive Design**
  - Modern, intuitive user interface
  - Mobile-friendly layout
  - Dark/light theme support

## 🏗️ Tech Stack

### Backend (NestJS)

- **Framework**: NestJS v11
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **API**: RESTful API design
- **Validation**: Class-validator & class-transformer
- **Configuration**: NestJS Config with environment variables

### Frontend (Angular)

- **Framework**: Angular v20
- **State Management**: RxJS
- **HTTP Client**: Angular HttpClient
- **Styling**: CSS with responsive design
- **Routing**: Angular Router with lazy loading

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB instance (local or Atlas)
- npm or yarn package manager

### Installation

#### Clone the repository

```bash
git clone https://github.com/yourusername/ToDoList.git
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
JWT_SECRET=your_jwt_secret
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

Start the frontend:

```bash
cd frontend
npm run start
```

The application will be available at:

- Frontend: http://localhost:4200
- Backend API: http://localhost:3000/api

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
│   ├── constants/        # Application constants
│   ├── database/         # Database configuration
│   ├── tasks/            # Task module (CRUD operations)
│   ├── user/             # User module (authentication & profile)
│   ├── app.module.ts     # Main application module
│   └── main.ts           # Application entry point
└── test/                 # Test files
```

### Frontend Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── constants/    # Application constants
│   │   ├── login/        # Login component
│   │   ├── models/       # Data models/interfaces
│   │   ├── api.service.ts # API service for backend communication
│   │   └── app.ts        # Main application component
│   ├── assets/           # Static assets
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

- **Project Maintainer** - [jonathan kalush](mailto:your.email@example.com)
- **Project Link** - [https://github.com/kalush666/ToDoList](https://github.com/yourusername/ToDoList)

---

Built with ❤️ using NestJS and Angular
