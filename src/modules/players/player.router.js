import { Router } from "express";
import {
  checkCreatePlayer,
  checkFindPlayer,
  checkSearchPlayers,
  checkUpdatePlayer,
} from "./player.check.js";

import {
  ctrlCreatePlayer,
  ctrlFindPlayer,
  ctrlSearchPlayers,
  ctrlUpdatePlayer,
} from "./player.controller.js";

const playerRouter = Router();

playerRouter.get("/", checkSearchPlayers, ctrlSearchPlayers);
playerRouter.post("/", checkCreatePlayer, ctrlCreatePlayer);

playerRouter.get("/:playerId", checkFindPlayer, ctrlFindPlayer);
playerRouter.patch("/:playerId", checkUpdatePlayer, ctrlUpdatePlayer);

export { playerRouter };
