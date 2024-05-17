const app = require("./app");
const connectDB = require("./db/db-connection.js");
require('dotenv').config();

const PORT = process.env.PORT || 8000; 

// Handling uncaught exceptions
process.on("uncaughtException", (err) => {
    console.error(`Error: ${err.message}`);
    console.error(`Shutting down the server due to an uncaught exception`);
    server.close(() => { 
        process.exit(1);
    });  
});

// Connect Database  
connectDB();

// Create server
let server;
const startServer = () => {
    server = app.listen(8000, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

startServer();

// Unhandled promise rejection
process.on("unhandledRejection", (err) => {
    console.error(`Shutting down the server due to an unhandled promise rejection: ${err.message}`);
    server.close(() => {
        process.exit(1);
    });
});

// Gracefully handle server restarts (for tools like nodemon)
process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server');
    server.close(() => {
        console.log('HTTP server closed');
    });
});

process.on('SIGINT', () => {
    console.log('SIGINT signal received: closing HTTP server');
    server.close(() => {
        console.log('HTTP server closed');
    });
});
