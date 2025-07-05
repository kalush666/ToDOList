@echo off
echo Cleaning up Docker resources...
echo.

echo Stopping all containers...
docker-compose down

echo Removing unused containers...
docker container prune -f

echo Removing unused images...
docker image prune -f

echo Removing unused volumes...
docker volume prune -f

echo Removing unused networks...
docker network prune -f

echo.
echo Docker cleanup completed!
pause
