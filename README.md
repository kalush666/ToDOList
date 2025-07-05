## 📋 ToDoList - Modern Task Management Application

[![NestJS](https://img.shields.io/badge/NestJS-v11.0.1-red)](https://nestjs.com/)
[![Angular](https://img.shields.io/badge/Angular-v20.0.0-blue)](https://angular.io/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v7.0-green)](https://www.mongodb.com/)
[![Docker](https://img.shields.io/badge/Docker-Enabled-blue)](https://www.docker.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5.7.3-blue)](https://www.typescriptlang.org/)

A full-stack task management application built with NestJS, Angular, and MongoDB. This application features secure user authentication with bcrypt password hashing, allowing users to efficiently create, manage, and track their tasks with a beautiful and responsive user interface. Now fully containerized with Docker for easy deployment and development.

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
  - Smart status indicators: Pending, Completed, and Overdue detection
  - Task deletion functionality with real-time UI updates
  - Task editing functionality (UI ready)
  - Responsive grid layout for optimal viewing on all devices

- **User Experience**

  - Modern, beautiful interface with gradient backgrounds and glass-morphism effects
  - Fully responsive design that works on desktop, tablet, and mobile
  - Consistent styling across all components with color-coded status indicators
  - Smooth animations and hover effects
  - Form validation with helpful error messages
  - Clean, intuitive navigation
  - Reactive user state management with RxJS BehaviorSubject
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
- **Framework**: NestJS v11.0.1
- **Database**: MongoDB v7.0 with Mongoose v8.16.1
- **Authentication**: bcrypt v6.0.0 for password hashing with JWT tokens
- **API**: RESTful API design running on port 3000
- **Validation**: Class-validator v0.14.2 & class-transformer v0.5.1 for DTO validation
- **Security**: bcrypt password hashing and JWT authentication
- **Error Handling**: Consistent error responses with proper HTTP status codes
- **CORS**: Enabled for all origins for development flexibility
- **Containerization**: Docker with multi-stage builds for development and production

### Frontend (Angular)

- **Framework**: Angular v20.0.0 (latest stable)
- **State Management**: RxJS v7.8.0 with BehaviorSubject for reactive user management
- **API Integration**: Angular HttpClient with comprehensive TasksApiService
- **UI Components**: Custom-styled components with modern CSS design
- **Styling**: Beautiful gradient backgrounds, glass-morphism effects, and smooth animations
- **Form Handling**: Reactive forms with validation
- **User Management**: Centralized UserService with reactive state management
- **Responsive Design**: Grid layouts and responsive breakpoints for all devices
- **Navigation**: Angular Router with component-based structure
- **Architecture**: Clean component communication with @Input/@Output patterns
- **Containerization**: Nginx-based production container with optimized builds

### Infrastructure & DevOps

- **Containerization**: Docker & Docker Compose for full-stack deployment
- **Database**: MongoDB v7.0 with automated initialization scripts
- **Reverse Proxy**: Nginx for production frontend serving and API proxying
- **Development**: Hot-reloading enabled for both frontend and backend
- **Production**: Multi-stage Docker builds with optimized images
- **Security**: Environment-based configuration management
- **Monitoring**: Health checks and container logging

## 🚀 Getting Started

### Quick Start with Docker (Recommended)

The easiest way to run the application is using Docker. All dependencies and services are automatically configured.

#### Prerequisites

- Docker Desktop installed and running
- Git (to clone the repository)

#### Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/kalush666/ToDoList.git
cd ToDoList
```

2. **Configure environment variables**

```bash
# Copy the example environment file
cp .env.example .env
# Edit .env with your MongoDB credentials
```

3. **Start the application**

```bash
# Use the enhanced launcher (Windows)
start.bat

# Or start directly with Docker
docker-compose up --build
```

#### Application URLs (Docker)

- **Frontend**: http://localhost:4200 (Development) / http://localhost (Production)
- **Backend API**: http://localhost:3000
- **MongoDB**: mongodb://localhost:27017

### Docker Commands

#### Development Mode (with hot-reloading)

```bash
# Start all services in development mode
scripts\docker-start.bat

# Or manually
docker-compose up --build
```

#### Production Mode

```bash
# Start optimized production build
scripts\docker-prod.bat

# Or manually
docker-compose -f docker-compose.prod.yml up --build -d
```

#### Other Docker Commands

```bash
scripts\docker-stop.bat     # Stop all containers
scripts\docker-logs.bat     # View container logs
scripts\docker-status.bat   # Check container status
scripts\docker-clean.bat    # Clean up Docker resources
```

### Traditional Node.js Setup (Alternative)

If you prefer running without Docker:

#### Prerequisites

- Node.js (v20 or higher)
- MongoDB instance (local or Atlas)
- npm package manager

#### Backend Setup

```bash
cd backend
npm install

# Create .env file with:
# MONGODB_URI=mongodb://localhost:27017/todolist
# JWT_SECRET=your-secret-key
# PORT=3000
```

#### Frontend Setup

```bash
cd frontend
npm install
```

#### Running Manually

```bash
# Start backend (in backend directory)
npm run start:dev

# Start frontend (in frontend directory)
npm start
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

### Root Directory

```
ToDoList/
├── backend/              # NestJS API server
├── frontend/             # Angular application
├── scripts/              # Docker helper scripts
├── docs/                 # Documentation
├── docker-compose.yml    # Development environment
├── docker-compose.prod.yml # Production environment
├── .env.example          # Environment template
├── .env                  # Local environment (git-ignored)
├── start.bat            # Enhanced application launcher
└── README.md            # This file
```

### Backend Structure (NestJS)

```
backend/
├── src/
│   ├── auth/             # Authentication module with JWT
│   │   ├── dto/          # Data Transfer Objects for authentication
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   └── auth.module.ts
│   ├── constants/        # Application constants
│   ├── database/         # Database configuration
│   ├── tasks/            # Task module (CRUD operations)
│   │   ├── dto/          # Data Transfer Objects for tasks
│   │   ├── schemas/      # Mongoose schemas for tasks
│   │   ├── task.controller.ts
│   │   ├── task.service.ts
│   │   └── task.module.ts
│   ├── user/             # User module
│   │   ├── dto/          # Data Transfer Objects for users
│   │   ├── interfaces/   # TypeScript interfaces for user data
│   │   ├── schemas/      # Mongoose schemas for users
│   │   ├── user.controller.ts
│   │   ├── user.service.ts
│   │   └── user.module.ts
│   ├── app.module.ts     # Main application module
│   └── main.ts           # Application entry point with CORS
├── Dockerfile           # Multi-stage Docker build
├── .dockerignore        # Docker ignore rules
└── test/               # Test files
```

### Frontend Structure (Angular)

```
frontend/
├── src/
│   ├── app/
│   │   ├── constants/    # Application constants including API endpoints
│   │   ├── login/        # Login component with beautiful styling
│   │   ├── sign-up/      # Signup component with form validation
│   │   ├── tasks/        # Tasks list component with grid layout
│   │   ├── task/         # Individual task component with card design
│   │   ├── edit-task/    # Task editing component
│   │   ├── services/     # API and user services
│   │   ├── models/       # Data models/interfaces for tasks and users
│   │   ├── app-routing-module.ts # Routing configuration
│   │   ├── app.html      # Main application template
│   │   └── app.ts        # Main application component
│   ├── environments/     # Environment configuration
│   ├── styles.css        # Global styles
│   └── index.html        # Main HTML file
├── Dockerfile           # Multi-stage Docker build with Nginx
├── nginx.conf           # Nginx configuration
├── .dockerignore        # Docker ignore rules
└── package.json         # Dependencies and scripts
```

### Docker & Scripts Structure

```
scripts/
├── docker-start.bat     # Start development environment
├── docker-prod.bat      # Start production environment
├── docker-stop.bat      # Stop all containers
├── docker-logs.bat      # View container logs
├── docker-status.bat    # Check container status
├── docker-clean.bat     # Clean up Docker resources
├── mongo-init.js        # MongoDB initialization script
└── README.md           # Scripts documentation

docs/
└── DOCKER_USAGE.md     # Comprehensive Docker guide
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

## 📊 Current Status & Examples

### Application Features Status

- ✅ **Docker containerization** - Full-stack deployment ready
- ✅ **User authentication** (login & signup) implemented and working
- ✅ **MongoDB integration** with proper user management
- ✅ **Reactive user state management** with UserService and BehaviorSubject
- ✅ **Beautiful, responsive UI** with modern design and animations
- ✅ **CORS configuration** properly set up for all origins
- ✅ **Backend API endpoints** functioning correctly
- ✅ **Frontend-backend communication** established with dedicated TasksApiService
- ✅ **Task display functionality** with beautiful card design
- ✅ **Task status management** with smart indicators (Pending/Completed/Overdue)
- ✅ **Task deletion functionality** with real-time UI updates
- ✅ **Task completion toggle** with database synchronization
- ✅ **Responsive grid layout** for tasks
- ✅ **Development automation** with Docker scripts for easy startup
- ✅ **Production deployment** with optimized Docker builds
- 🔄 Task creation functionality to be implemented
- 🔄 Task editing functionality (UI ready, backend integration pending)
- 🔄 User profile management features

### Sample User Data

**Existing User**: Test User (user.test@example.com)
**User ID**: `6869080401a8b0f1beac8f1b`

### Sample Task Data Examples

Use these JSON examples for testing with the correct user ID:

```json
{
  "title": "Implement User Authentication",
  "description": "Add JWT-based authentication system with login and registration functionality",
  "userId": "6869080401a8b0f1beac8f1b",
  "dueDate": "2024-08-15T14:30:00.000Z"
}
```

```json
{
  "title": "Add Real-time Notifications",
  "description": "Implement WebSocket-based notifications for task updates and reminders",
  "userId": "6869080401a8b0f1beac8f1b",
  "dueDate": "2026-03-20T11:00:00.000Z"
}
```

### How to Get User ID

To find your user ID for creating tasks:

# via API (after authentication)

curl -X GET "http://localhost:3000/api/users"

```

## 🛠️ Development Tools & Resources

### Docker Development

- **`start.bat`** - Enhanced application launcher with Docker options
- **`scripts/docker-*.bat`** - Complete Docker workflow management
- **Hot Reloading** - Both frontend and backend support live updates
- **Environment Management** - Secure credential handling with `.env` files
- **Multi-stage Builds** - Optimized images for development and production
- **Health Checks** - Built-in monitoring and status endpoints

### Architecture & Patterns

- **Reactive Architecture** - RxJS BehaviorSubject for state management
- **Type Safety** - Full TypeScript support across frontend and backend
- **Error Handling** - Comprehensive error handling and user feedback
- **RESTful API Design** - Clean, consistent API endpoints
- **Component Communication** - Proper @Input/@Output patterns in Angular
- **Security** - bcrypt password hashing and JWT authentication

### Additional Resources

- **Docker Documentation**: `docs/DOCKER_USAGE.md`
- **API Documentation**: Available endpoints at http://localhost:3000/api
- **Environment Setup**: `.env.example` template for configuration
- **MongoDB Management**: Direct container access for database operations

---

Built with ❤️ using NestJS, Angular, and Docker - Modern, Secure, and Scalable!
```
