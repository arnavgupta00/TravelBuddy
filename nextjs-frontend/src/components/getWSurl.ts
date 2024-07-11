"use server";


import "dotenv/config";


export default async function getWSurl() {
  return process.env.WEBSOCKET || "ws://localhost:25000";
}