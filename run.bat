@echo off
echo Starting ToDoList Application...
echo.

REM Set the window title
title ToDoList - Frontend and Backend

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js version:
node --version
echo.

REM Start backend in a new window
echo Starting Backend Server...
start "ToDoList Backend" cmd /k "cd backend && npm run start:dev"

REM Wait a moment for backend to start
timeout /t 3 /nobreak >nul

REM Start frontend in a new window
echo Starting Frontend Server...
start "ToDoList Frontend" cmd /k "cd frontend && npm start"

echo.
echo ========================================
echo   ToDoList Application Started!
echo ========================================
echo.
echo Backend:  http://localhost:3000
echo Frontend: http://localhost:4200
echo.
echo Press any key to close this window...
echo (Backend and Frontend will continue running in separate windows)
pause >nul
