import express from "express";

const app = express();

const PORT = 4000;

app.listen({ port: PORT }, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
