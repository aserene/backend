const express = require("express");
const cors = require("cors");
const projects = require("./projects.json");
const about = require("./about.json");
const app = express();
app.use(cors());
app.get("/", (req, res) => {
    res.send("Hello World");
  });
  app.get("/projects", (req, res) => {
    // send projects via JSON
    res.json(projects);
  });
  app.get("/about", (req, res) => {
    // send projects via JSON
    res.json(about);
  });
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`))