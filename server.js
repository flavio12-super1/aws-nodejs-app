const express = require("express");
const path = require("path");
const http = require("http");

const app = express();
const server = http.createServer(app);

// Serve static files
app.use(express.static(path.resolve(__dirname, "./frontend/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./frontend/build", "index.html"));
});

app.get("/pain", (req, res) => {
  res.send("pain");
});

const port = process.env.PORT || 80; // Listen on port 80
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
