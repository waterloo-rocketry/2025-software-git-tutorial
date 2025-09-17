const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Basic hello world route
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello World - Node.js Tutorial</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                color: white;
            }
            .container {
                text-align: center;
                padding: 2rem;
                background: rgba(255, 255, 255, 0.1);
                border-radius: 20px;
                backdrop-filter: blur(10px);
                box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
                border: 1px solid rgba(255, 255, 255, 0.18);
            }
            h1 {
                font-size: 3rem;
                margin-bottom: 1rem;
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
            }
            p {
                font-size: 1.2rem;
                margin-bottom: 1.5rem;
                opacity: 0.9;
            }
            .rocket {
                font-size: 4rem;
                margin-bottom: 1rem;
                animation: float 3s ease-in-out infinite;
            }
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-20px); }
            }
            .info {
                margin-top: 2rem;
                padding-top: 1rem;
                border-top: 1px solid rgba(255, 255, 255, 0.3);
                font-size: 0.9rem;
                opacity: 0.8;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="rocket">🚀</div>
            <h1>Hello, World!</h1>
            <p>Welcome to the Waterloo Rocketry 2025 Software Git Tutorial</p>
            <p>This is a simple Node.js application built with Express.js</p>
            <div class="info">
                <p>Node.js version: ${process.version}</p>
                <p>Server running on port: ${port}</p>
            </div>
        </div>
    </body>
    </html>
  `);
});

// API endpoint for JSON response
app.get('/api/hello', (req, res) => {
  res.json({
    message: 'Hello, World!',
    timestamp: new Date().toISOString(),
    nodeVersion: process.version,
    port: port,
    organization: 'Waterloo Rocketry'
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`🚀 Hello World app listening at http://localhost:${port}`);
  console.log(`📊 Health check: http://localhost:${port}/health`);
  console.log(`🔗 API endpoint: http://localhost:${port}/api/hello`);
});