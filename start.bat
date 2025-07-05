@echo off
echo ========================================
echo       ToDoList Application Launcher
echo ========================================
echo.
echo Choose how to run the application:
echo.
echo 1. Docker Development Mode (Recommended)
echo 2. Docker Production Mode
echo 3. Traditional Node.js Mode
echo 4. View Docker Status
echo 5. Stop Docker Containers
echo.
set /p choice="Enter your choice (1-5): "

if "%choice%"=="1" (
    echo.
    echo Starting in Docker Development Mode...
    call scripts\docker-start.bat
) else if "%choice%"=="2" (
    echo.
    echo Starting in Docker Production Mode...
    call scripts\docker-prod.bat
) else if "%choice%"=="3" (
    echo.
    echo Starting in Traditional Node.js Mode...
    echo.
    
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
) else if "%choice%"=="4" (
    call scripts\docker-status.bat
) else if "%choice%"=="5" (
    call scripts\docker-stop.bat
) else (
    echo Invalid choice. Please try again.
    pause
    goto :eof
)
