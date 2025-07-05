@echo off
echo Starting ToDoList Application in Production Mode...
echo.

REM Check if Docker is running
docker version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Docker is not running or not installed
    echo Please start Docker Desktop and try again
    pause
    exit /b 1
)

echo Docker is running. Starting production services...
echo.

REM Start the application in production mode
docker-compose -f docker-compose.prod.yml up --build -d

echo.
echo ========================================
echo   ToDoList Application Started!
echo ========================================
echo.
echo Frontend: http://localhost
echo Backend API: http://localhost:3000
echo MongoDB: localhost:27017
echo.
echo Use 'scripts\docker-stop.bat' to stop the application
echo Use 'scripts\docker-logs.bat' to view logs
pause
