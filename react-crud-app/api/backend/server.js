require('dotenv').config();
const express = require("express");
const cors = require("cors");
const services = require("../services/getService");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/jobs', (req, res) => services.getAll().then(result => res.send(`${JSON.stringify(result)}`)))

app.get('/jobs/:id', (req, res) => {
  const id = req.params.id;
  services.getById(id).then(result => res.send(`${JSON.stringify(result)}`));
})

app.get('/jobs/category/:id', (req, res) => {
  const id = req.params.id;
  services.getByCategory(id).then(result => res.send(`${JSON.stringify(result)}`));
})

app.listen(PORT, () => console.log("Server is running on port " + PORT));