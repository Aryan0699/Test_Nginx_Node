import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const SERVER_NO = Number(process.env.SERVER_NO) || 1;
console.log("Server No:", SERVER_NO);
app.listen(PORT, () => {
  console.log(`Server ${SERVER_NO} running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(`I am Server No. ${SERVER_NO}`);
});


app.get("/admin", (req, res) => {
  res.send(`I am Server No. ${SERVER_NO} and this is the admin route`);
});

