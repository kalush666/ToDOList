## 📋 ToDoList - Modern Task Management Application

[![NestJS](https://img.shields.io/badge/NestJS-v11.0.1-red)](https://nestjs.com/)
[![Angular](https://img.shields.io/badge/Angular-v20.0.0-blue)](https://angular.io/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v7.0-green)](https://www.mongodb.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5.7.3-blue)](https://www.typescriptlang.org/)

A full-stack task management application built with NestJS, Angular, and MongoDB. This application features secure user authentication with bcrypt password hashing, allowing users to efficiently create, manage, and track their tasks with a beautiful and responsive user interface.

## ✨ Features

- **User Authentication & Authorization**

  - Secure registration and login with bcrypt password hashing
  - Simple session-based authentication
  - User signup and login functionality with form validation
  - Password encryption using bcrypt for security

- **Task Management**

  - View and display tasks with a beautiful card-based interface
  - Task details including title, description, due date, and completion status
  - Interactive checkboxes for marking tasks as complete/incomplete
  - Smart status indicators: Pending, Completed, and Overdue detection
  - Task deletion functionality with real-time UI updates
  - Task editing functionality
  - Responsive grid layout for optimal viewing on all devices

- **User Experience**

  - Modern, beautiful interface with gradient backgrounds and glass-morphism effects
  - Fully responsive design that works on desktop, tablet, and mobile
  - Consistent styling across all components with color-coded status indicators
  - Smooth animations
  - Form validation with helpful error messages
  - Clean, intuitive navigation
  - Reactive user state management with RxJS BehaviorSubject (singleton UserService)
  - Real-time task updates without page refreshes

- **Security Features**
  - CORS enabled for all origins (development-friendly configuration)
  - Password encryption using bcrypt with proper salt rounds
  - Form validation with class-validator
  - Input sanitization and validation
  - Secure API endpoint structure

## 🏗️ Tech Stack

### Backend (NestJS)

- **Framework**: NestJS v11.0.1
- **Database**: MongoDB v7.0 with Mongoose v8.16.1
- **Authentication**: bcrypt v6.0.0 for password hashing
- **API**: RESTful API design running on port 3001 (configurable)
- **Validation**: Class-validator v0.14.2 & class-transformer v0.5.1 for DTO validation
- **Security**: bcrypt password hashing
- **Error Handling**: Consistent error responses with proper HTTP status codes
- **CORS**: Enabled for all origins for development flexibility
- **Environment Config**: Uses `.env` file for configuration (see below)

### Frontend (Angular)

- **Framework**: Angular v20.0.0 (latest stable)
- **State Management**: RxJS v7.8.0 with BehaviorSubject for reactive user management (singleton UserService)
- **API Integration**: Angular HttpClient with comprehensive TasksApiService
- **UI Components**: Custom-styled components with modern CSS design
- **Styling**: Beautiful gradient backgrounds, glass-morphism effects, and smooth animations
- **Form Handling**: Template-driven and reactive forms with validation
- **User Management**: Centralized UserService with reactive state management
- **Responsive Design**: Grid layouts and responsive breakpoints for all devices
- **Navigation**: Angular Router with component-based structure
- **Architecture**: Clean component communication with @Input/@Output patterns

### Infrastructure & DevOps

- **Database**: MongoDB v7.0
- **Development**: Hot-reloading enabled for both frontend and backend
- **Security**: Environment-based configuration management

## 🚀 Getting Started

### Prerequisites

- Node.js (v20 or higher)
- MongoDB instance (local or Atlas)
- npm package manager
- Git (to clone the repository)

### Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/kalush666/ToDoList.git
cd ToDoList
```

2. **Configure environment variables**

Create a `.env` file in the `backend/` directory with the following content:

```env
MONGODB_URI=mongodb://localhost:27017/todolist
PORT=3001
JWT_SECRET=your-secret
JWT_EXPIRATION=7d
```

3. **Backend Setup**

```bash
cd backend
npm install
npm run start:dev
```

4. **Frontend Setup**

```bash
cd frontend
npm install
npm start
```

Or use the provided `run.bat` script to start both backend and frontend in separate terminals on Windows.

## 🧪 Testing

- **Backend:** `cd backend && npm run test`
- **Frontend:** `cd frontend && npm run test`

## 📁 Project Structure

```
ToDoList/
├── backend/      # NestJS API (src/auth, src/tasks, src/user, etc.)
├── frontend/     # Angular app (src/app/components, services, models, etc.)
├── scripts/      # Helper scripts
├── docs/         # Extra documentation
├── .env.example
└── README.md
```

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch
3. Commit and push
4. Open a Pull Request

## 📧 Contact

- **Maintainer:** [Jonathan Kalush](mailto:jonathan.kalush@gmail.com)
- **Repo:** [https://github.com/kalush666/ToDoList](https://github.com/kalush666/ToDoList)

---

Built with ❤️ using Angular, NestJS, and MongoDB.
