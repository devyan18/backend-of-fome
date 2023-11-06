import {
  createPlayer,
  findPlayer,
  seachPlayers,
  updatePlayer,
} from "./player.service.js";

export async function ctrlCreatePlayer(req, res) {
  try {
    const player = await createPlayer(req.body);

    if (!player) {
      return res.status(400).json({ error: "Player not created" });
    }

    return res.status(201).json(player);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
}

export async function ctrlSearchPlayers(req, res) {
  try {
    const players = await seachPlayers(req.query);

    if (!players) {
      return res.sendStatus(204);
    }

    return res.status(200).json(players);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
}

export async function ctrlFindPlayer(req, res) {
  const { playerId } = req.params;

  try {
    const player = await findPlayer({ playerId });

    if (!player) {
      return res.sendStatus(404);
    }

    return res.status(200).json(player);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
}

export async function ctrlUpdatePlayer(req, res) {
  const { playerId } = req.params;

  try {
    const player = await updatePlayer({ playerId, player: req.body });

    if (!player) {
      return res.sendStatus(404);
    }

    return res.status(200).json(player);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
}
