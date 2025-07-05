@echo off
echo Starting ToDoList Application with Docker...
echo.

REM Check if Docker is running
docker version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Docker is not running or not installed
    echo Please start Docker Desktop and try again
    pause
    exit /b 1
)

echo Docker is running. Starting services...
echo.

REM Start the application in development mode
docker-compose up --build

echo.
echo Application stopped.
pause
