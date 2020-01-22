const cors = require("cors");
const skills = require("./skills");
const formation = require("./formation");
const experiences = require("./experiences");

module.exports = app => {
  app.use(cors());
  app.use((req, res, next) => {
    if (req.get("Authorization") === "plopplop") {
      return next();
    }
    res.status(401).send("Unauthorized");
  });

  app.get(`/skills`, (req, res) => res.send(skills));
  app.get(`/formation`, (req, res) => res.send(formation));
  app.get(`/experiences`, (req, res) => res.send(experiences));
};
