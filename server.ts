import express from "express";
import path from "path";

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/api/message", (request, response) => {
  response.send("This is message sent from Vincent!");
});

app.get("/api/json", (_, res) => {
  res.json({
    success: true,
    name: "Ivy",
  });
});

app.use(express.static("client/build"));

app.get("*", (request, response) => {
  response.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Express is listening in port ${PORT}`);
});
