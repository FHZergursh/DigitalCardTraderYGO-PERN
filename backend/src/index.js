import express from "express"
import 'dotenv/config'
import { setupDB } from "./db/db.js";
const app = express();

const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!');
});



setupDB().then(
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
}));