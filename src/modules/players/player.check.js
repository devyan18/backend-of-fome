import { body, param } from "express-validator";
import { applyCheck } from "../../middlewares/apply.check.js";

export const checkCreatePlayer = [
  body("mc_nick")
    .exists({ checkFalsy: true })
    .isString()
    .isLength({ min: 3, max: 30 }),
  body("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .isLength({ min: 5, max: 255 }),
  body("password").exists({ checkFalsy: true }).isStrongPassword({
    minLength: 8,
    minLowercase: 0,
    minUppercase: 0,
    minNumbers: 0,
    minSymbols: 0,
  }),
  applyCheck,
];

export const checkSearchPlayers = [
  body("mc_nick").optional().isString().isLength({ min: 3, max: 30 }),
  applyCheck,
];

export const checkFindPlayer = [
  param("playerId")
    .exists({ checkFalsy: true })
    .isMongoId()
    .withMessage("Invalid player ID"),
  applyCheck,
];

export const checkUpdatePlayer = [
  param("playerId")
    .exists({ checkFalsy: true })
    .isMongoId()
    .withMessage("Invalid player ID"),
  body("mc_nick").optional().isString().isLength({ min: 3, max: 30 }),
  body("email").optional().isEmail().isLength({ min: 5, max: 255 }),
  body("password").optional().isStrongPassword({
    minLength: 8,
    minLowercase: 0,
    minUppercase: 0,
    minNumbers: 0,
    minSymbols: 0,
  }),
  applyCheck,
];
