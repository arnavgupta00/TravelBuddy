"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Chat_1 = require("./entity/Chat");
require("dotenv/config");
const connectionString = process.env.DATABASE_URL || "postgres://postgres:password@localhost:5432/chat";
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    url: connectionString,
    synchronize: true,
    logging: false,
    entities: [Chat_1.Chat],
    migrations: [],
    subscribers: [],
    ssl: false
});
