import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const playerSchema = new Schema(
  {
    mc_nick: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
      maxlength: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 5,
      maxlength: 255,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
    },
    isActivated: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

playerSchema.pre("save", async function (next) {
  const player = this;

  if (player.isModified("password")) {
    player.password = await bcrypt.hash(player.password, 10);
  }

  if (player.isModified("email")) {
    player.email = player.email.toLowerCase();

    // TODO: Send email to player.email
  }

  next();
});

export const PlayerModel = model("Player", playerSchema);
