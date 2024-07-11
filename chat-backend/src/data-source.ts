import { DataSource } from "typeorm";
import { Chat } from "./entity/Chat";
import "dotenv/config";

const connectionString = process.env.DATABASE_URL || "postgres://postgres:password@localhost:5432/chat";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: connectionString,
  synchronize: true,
  logging: false,
  entities: [Chat],
  migrations: [],
  subscribers: [],
  ssl: false
});
