import { Logger } from "../../lib/logger.service.js";
import { PlayerModel } from "./player.model.js";

export async function createPlayer(player) {
  try {
    const playerModel = new PlayerModel(player);
    const response = await playerModel.save();

    await Logger.log(`Player created: ${response._id}`);

    return response;
  } catch (error) {
    Logger.error(error);
    return null;
  }
}

export async function seachPlayers({ mc_nick = null }) {
  try {
    const query = {};

    if (mc_nick) {
      query.mc_nick = mc_nick.toLowerCase();
    }

    const players = await PlayerModel.find(query);

    await Logger.log(`Players found: ${players.length}`);

    return players;
  } catch (error) {
    Logger.error(error);
    return null;
  }
}

export async function findPlayer({ playerId }) {
  try {
    const player = await PlayerModel.findOne({ _id: playerId });

    await Logger.log(`Player found: ${player._id}`);

    return player;
  } catch (error) {
    Logger.error(error);
    return null;
  }
}

export async function updatePlayer({ playerId, player }) {
  try {
    const updatedPlayer = await PlayerModel.findOne({
      _id: playerId,
    });

    if (!updatedPlayer) {
      return null;
    }

    updatedPlayer.set(player);

    await updatedPlayer.save();

    await Logger.log(`Player updated: ${updatedPlayer._id}`);

    return updatedPlayer;
  } catch (error) {
    Logger.error(error);
    return null;
  }
}
