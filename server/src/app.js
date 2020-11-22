import express from "express";

const app = express();

app.listen({ port: 4000 }, () => {
  console.log("Server listening on port 9999");
});
