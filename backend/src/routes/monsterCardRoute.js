import express from "express"
import { createMonsterCard, getAllMonsterCards } from "../controllers/monsterCardController.js";

const monsterRouter = express.Router();

monsterRouter.get("/", getAllMonsterCards)
monsterRouter.post("/", createMonsterCard)

export default monsterRouter
