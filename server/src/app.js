import express from "express";

const app = express();

app.listen({ port: 4000 }, () => {
  console.log("Server listening on port 9999");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
