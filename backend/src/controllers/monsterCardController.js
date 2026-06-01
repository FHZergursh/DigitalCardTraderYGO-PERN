import { sql } from "../db/db.js"


export const getAllMonsterCards = async (req, res) => {
  try {
    const monsters = await sql.query(`SELECT * FROM monstercards`)
    return res.status(200).json({success: true, data: monsters})

  } catch (error) {
    console.log(error)
  }
}

export const createMonsterCard = async (req, res) => {
  try {
    const {name, cardtype, monstertype, level, description, image} = req.body

    if (!name || !cardtype || !monstertype) {
      return res.status(400).json({success: false, message: "Please include the mandatory fields"})
    }



  } catch (error) {
    console.log(error)
    return res.status(404).json({success: false, message: error})
  }
}