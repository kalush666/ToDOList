@echo off
REM Script to run backend and frontend in dev mode using Angular proxy

start cmd /k "cd backend && npm run start:dev"
start cmd /k "cd frontend && ng serve --proxy-config proxy.conf.json"

echo Both backend and frontend are starting in new windows.
pause
