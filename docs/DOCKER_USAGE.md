# Docker Usage Guide

## Quick Start

### Development Mode

To start the application in development mode with hot-reloading:

```bash
# Start all services
scripts\docker-start.bat

# Or use docker-compose directly
docker-compose up --build
```

### Production Mode

To start the application in production mode:

```bash
# Start production services
scripts\docker-prod.bat

# Or use docker-compose directly
docker-compose -f docker-compose.prod.yml up --build -d
```

## Services

The Docker setup includes:

- **Frontend**: Angular application (Development: port 4200, Production: port 80)
- **Backend**: NestJS API (port 3000)
- **Database**: MongoDB (port 27017)

## Available Scripts

- `scripts\docker-start.bat` - Start in development mode
- `scripts\docker-prod.bat` - Start in production mode
- `scripts\docker-stop.bat` - Stop all containers
- `scripts\docker-logs.bat` - View container logs
- `scripts\docker-status.bat` - Check container status
- `scripts\docker-clean.bat` - Clean up Docker resources

## URLs

### Development Mode

- Frontend: http://localhost:4200
- Backend API: http://localhost:3000
- MongoDB: mongodb://localhost:27017

### Production Mode

- Frontend: http://localhost
- Backend API: http://localhost:3000
- MongoDB: mongodb://localhost:27017

## Environment Variables

**IMPORTANT**: You must create a `.env` file with your actual credentials before running Docker.

Copy `.env.example` to `.env` and update with your actual values:

```bash
cp .env.example .env
```

Required variables in `.env`:

- `MONGO_USERNAME`: Your MongoDB username
- `MONGO_PASSWORD`: Your MongoDB password
- `JWT_SECRET`: Secret key for JWT tokens
- `NODE_ENV`: Environment (development/production)
- `API_URL`: Backend API URL

**Security Note**: Never commit the `.env` file to version control as it contains sensitive credentials.

## Development

### Hot Reloading

In development mode, both frontend and backend support hot-reloading:

- Frontend changes trigger automatic rebuild
- Backend changes restart the NestJS server

### Database Access

MongoDB is accessible at `mongodb://[your-username]:[your-password]@localhost:27017/todolist`

**Note**: Replace `[your-username]` and `[your-password]` with the values from your `.env` file.

### Logs

View real-time logs:

```bash
scripts\docker-logs.bat
```

## Production Deployment

The production setup includes:

- Optimized builds for both frontend and backend
- Nginx reverse proxy for the frontend
- Security headers and caching
- Health checks

## Troubleshooting

### Container Issues

Check container status:

```bash
scripts\docker-status.bat
```

### Clean Installation

If you encounter issues, clean up and restart:

```bash
scripts\docker-clean.bat
scripts\docker-start.bat
```

### Port Conflicts

If ports are already in use, stop the containers and check for other services:

```bash
scripts\docker-stop.bat
netstat -an | findstr :3000
netstat -an | findstr :4200
netstat -an | findstr :27017
```
