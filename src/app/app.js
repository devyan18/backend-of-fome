import { createServer } from "node:http";
import express from "express";

import cors from "cors";
import helmet from "helmet";

import { playerRouter } from "../modules/players/player.router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);
app.use(helmet());

app.use("/api/players/", playerRouter);

export const server = createServer(app);
