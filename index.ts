import express from "express";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("public"));
app.use(express.static("react-app"));

app.get("/api/message", (request, response) => {
  response.send("This is message sent from Vincent!");
});

app.get("/api/json", (_, res) => {
  res.json({
    success: true,
    author: "vincent",
  });
});

app.listen(PORT, () => {
  console.log(`Express is listening in port ${PORT}`);
});
