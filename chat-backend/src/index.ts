import express from "express";
import { WebSocketServer, WebSocket } from "ws";
import { Client } from "pg";
import "dotenv/config";
const PORT = 5000;
const app = express();

// PostgreSQL connection configuration
const pgClient = new Client({
  connectionString:
    process.env.DATABASE_URL ||
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
  .catch((err: { stack: any }) => console.error("Connection error", err.stack));

// Create WebSocket server
const server = app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

const wss = new WebSocketServer({ server });

// Maintain a mapping of clients to their respective rooms
const clients = new Map<WebSocket, string>();

wss.on("connection", (ws: WebSocket) => {
  // send all messages from the database to the client of the room

  ws.on("getMessages", async (room: string) => {
    const query = `
      SELECT * FROM chat WHERE room = $1
    `;
    const values = [room];

    try {
      const result = await pgClient.query(query, values);
      console.log(result.rows);
      ws.send(JSON.stringify(result.rows));
    } catch (err) {
      console.error("Error getting messages from database", err);
    }
  });

  ws.on("message", async (message: string) => {
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
      if (chatMessage.message === "getMessages") return;
      await pgClient.query(query, values);

      // Broadcast message to all clients in the same room
      console.log(`Broadcasting message to room ${chatMessage.room}`);
      wss.clients.forEach((client) => {
        if (
          clients.get(client) === chatMessage.room &&
          client.readyState === WebSocket.OPEN
        ) {
          console.log("Broadcasting message to client", clients.get(client));
          client.send(JSON.stringify(chatMessage));
        }
      });
    } catch (err) {
      console.error("Error inserting message into database", err);
    }
  });

  // Remove the client from the map when they disconnect
  ws.on("close", () => {
    clients.delete(ws);
  });
});
