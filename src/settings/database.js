import { connect } from "mongoose";
import { config } from "./config.js";

export const startConnection = async () => {
  try {
    const db = await connect(config.mongoDbUri, {
      dbName: config.mongoDbName,
    });
    console.log("Database connected to:", db.connection.name);
  } catch (error) {
    console.log("Database connection error");
    console.log(error);
  }
};
