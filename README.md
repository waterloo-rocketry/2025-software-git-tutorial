# 2025-software-git-tutorial

A simple Node.js "Hello World" web application built with Express.js for the Waterloo Rocketry 2025 Software Git Tutorial.

## Features

- 🚀 Simple Express.js web server
- 🎨 Beautiful animated hello world page
- 📊 Health check endpoint
- 🔗 JSON API endpoint
- 📱 Responsive design

## Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/waterloo-rocketry/2025-software-git-tutorial.git
   cd 2025-software-git-tutorial
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

Start the server:
```bash
npm start
```

The application will be available at:
- **Main Page**: [http://localhost:3000](http://localhost:3000)
- **Health Check**: [http://localhost:3000/health](http://localhost:3000/health)
- **API Endpoint**: [http://localhost:3000/api/hello](http://localhost:3000/api/hello)

## Available Scripts

- `npm start` - Start the application
- `npm run dev` - Start the application (same as start)

## API Endpoints

### GET /
Returns a beautiful HTML hello world page with animations.

### GET /api/hello
Returns JSON with hello world data:
```json
{
  "message": "Hello, World!",
  "timestamp": "2025-01-17T01:00:00.000Z",
  "nodeVersion": "v20.19.5",
  "port": 3000,
  "organization": "Waterloo Rocketry"
}
```

### GET /health
Returns server health status:
```json
{
  "status": "OK",
  "uptime": 123.456,
  "timestamp": "2025-01-17T01:00:00.000Z"
}
```

## Environment Variables

- `PORT` - Port number for the server (default: 3000)

## License

MIT License - see [LICENSE](LICENSE) file for details.