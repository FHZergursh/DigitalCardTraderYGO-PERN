import express from "express"
import 'dotenv/config'
import { setupDB } from "./db/db.js";
import monsterRouter from "./routes/monsterCardRoute.js";
const app = express();

const port = process.env.PORT;

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/monster', monsterRouter)

setupDB().then(
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
}));