@echo off
echo Viewing Docker container logs...
echo.
echo Press Ctrl+C to exit log view
echo.

docker-compose logs -f
