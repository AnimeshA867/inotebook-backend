const express = require("express");
const connectToMongo = require("./db");
connectToMongo();
const app = express();
const port = 3000;

//Avaiable routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on localhost:${port}`);
});
