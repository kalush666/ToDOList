@echo off
REM Simple script to run backend and frontend

start cmd /k "cd backend && npm run start:dev"
start cmd /k "cd frontend && npm start"

echo Both backend and frontend are starting in new windows.
pause
