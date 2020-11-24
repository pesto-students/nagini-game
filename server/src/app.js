import express from "express";

const app = express();

const PORT = process.env.PORT || 5000;

app.listen({ port: PORT }, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
