@echo off
setlocal enabledelayedexpansion

REM Set colors for better visibility
color 0A

echo.
echo ========================================
echo      ToDoList Development Server
echo ========================================
echo.

REM Check if Node.js is installed
echo [1/4] Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)
echo [OK] Node.js is installed: 
node --version
echo.

REM Check if npm is available
echo [2/4] Checking npm installation...
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] npm is not available
    pause
    exit /b 1
)
echo [OK] npm is available: 
npm --version
echo.

REM Check and install backend dependencies
echo [3/4] Checking backend dependencies...
if not exist "backend\node_modules" (
    echo Installing backend dependencies...
    cd backend
    npm install
    if %errorlevel% neq 0 (
        echo [ERROR] Failed to install backend dependencies
        pause
        exit /b 1
    )
    cd ..
    echo [OK] Backend dependencies installed
) else (
    echo [OK] Backend dependencies already installed
)
echo.

REM Check and install frontend dependencies
echo [4/4] Checking frontend dependencies...
if not exist "frontend\node_modules" (
    echo Installing frontend dependencies...
    cd frontend
    npm install
    if %errorlevel% neq 0 (
        echo [ERROR] Failed to install frontend dependencies
        pause
        exit /b 1
    )
    cd ..
    echo [OK] Frontend dependencies installed
) else (
    echo [OK] Frontend dependencies already installed
)
echo.

echo ========================================
echo        Starting Development Servers
echo ========================================
echo.

REM Start backend server
echo Starting Backend Server (NestJS)...
start "ToDoList Backend - http://localhost:3000" cmd /k "cd /d %cd%\backend && echo Backend Server Starting... && npm run start:dev"

REM Wait for backend to initialize
echo Waiting for backend to initialize...
timeout /t 5 /nobreak >nul

REM Start frontend server
echo Starting Frontend Server (Angular)...
start "ToDoList Frontend - http://localhost:4200" cmd /k "cd /d %cd%\frontend && echo Frontend Server Starting... && npm start"

echo.
echo ========================================
echo          🚀 SERVERS STARTED! 🚀
echo ========================================
echo.
echo 📱 Frontend: http://localhost:4200
echo 🔧 Backend:  http://localhost:3000
echo 📊 API:      http://localhost:3000/api
echo.
echo Both servers are running in separate windows.
echo You can close this window safely.
echo.
echo To stop the servers:
echo - Close the Backend and Frontend command windows
echo - Or press Ctrl+C in each window
echo.
pause
