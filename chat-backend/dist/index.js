"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ws_1 = require("ws");
const pg_1 = require("pg");
require("dotenv/config");
const PORT = 5000;
const app = (0, express_1.default)();
// PostgreSQL connection configuration
const pgClient = new pg_1.Client({
    connectionString: process.env.DATABASE_URL ||
        "postgres://postgres:password@localhost:5432/chat",
    ssl: {
        rejectUnauthorized: false,
    },
});
// Connect to PostgreSQL
pgClient
    .connect()
    .then(() => {
    console.log("Connected to PostgreSQL");
    // Create the chat table if it doesn't exist
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS chat (
        id SERIAL PRIMARY KEY,
        room VARCHAR(255) NOT NULL,
        username VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    return pgClient.query(createTableQuery);
})
    .then(() => {
    console.log('Table "chat" is ready');
})
    .catch((err) => console.error("Connection error", err.stack));
// Create WebSocket server
const server = app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
const wss = new ws_1.WebSocketServer({ server });
// Maintain a mapping of clients to their respective rooms
const clients = new Map();
wss.on("connection", (ws) => {
    // send all messages from the database to the client of the room
    ws.on("getMessages", (room) => __awaiter(void 0, void 0, void 0, function* () {
        const query = `
      SELECT * FROM chat WHERE room = $1
    `;
        const values = [room];
        try {
            const result = yield pgClient.query(query, values);
            console.log(result.rows);
            ws.send(JSON.stringify(result.rows));
        }
        catch (err) {
            console.error("Error getting messages from database", err);
        }
    }));
    ws.on("message", (message) => __awaiter(void 0, void 0, void 0, function* () {
        const chatMessage = JSON.parse(message);
        console.log(chatMessage);
        // Save the room associated with this client
        if (chatMessage.room) {
            clients.set(ws, chatMessage.room);
        }
        // Save message to database
        const query = `
      INSERT INTO chat (room, username, message, timestamp)
      VALUES ($1, $2, $3, NOW())
    `;
        const values = [
            chatMessage.room,
            chatMessage.username,
            chatMessage.message,
        ];
        try {
            if (chatMessage.message === "getMessages")
                return;
            yield pgClient.query(query, values);
            // Broadcast message to all clients in the same room
            console.log(`Broadcasting message to room ${chatMessage.room}`);
            wss.clients.forEach((client) => {
                if (clients.get(client) === chatMessage.room &&
                    client.readyState === ws_1.WebSocket.OPEN) {
                    console.log("Broadcasting message to client", clients.get(client));
                    client.send(JSON.stringify(chatMessage));
                }
            });
        }
        catch (err) {
            console.error("Error inserting message into database", err);
        }
    }));
    // Remove the client from the map when they disconnect
    ws.on("close", () => {
        clients.delete(ws);
    });
});
