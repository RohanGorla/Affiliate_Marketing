import "dotenv/config";
import express from "express";
import cors from "cors";
import mysql from "mysql2";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

const db = mysql.createConnection({
  database: process.env.DATABASE,
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: process.env.DB_PORT,
});

db.connect((err) => {
  if (err) console.log(err);
  else console.log("Database connected");
});

app.get("/", (req, res) => {
  db.query("select * from product_data", (err, data) => {
    if (err) return res.send(err);
    res.send(data);
  });
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
