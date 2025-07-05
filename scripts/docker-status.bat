@echo off
echo Docker Container Status
echo =======================
echo.

docker-compose ps

echo.
echo Docker Images
echo =============
echo.

docker images | findstr todolist

echo.
pause
