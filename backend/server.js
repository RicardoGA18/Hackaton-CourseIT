const express = require("express");
const {dbConnection} = require('./db/config');
const app = express();
const cors = require("cors");
require("dotenv").config();
const { check } = require("express-validator");

const users = require("./controllers/users");
const {validate} = require('./middlewares/validate');

app.use(express.json())

dbConnection();

// CRUD EVENTOS


app.use(cors());

app.get("/", (req, res) => users.getUsers(req, res));
app.post(
  "/new",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password debe ser de almenos 6 caracteres").isLength({min:6}),
    validate
  ],
  (req, res) => users.newUser(req, res)
);

app.listen(4000, () => {
  console.log(`running on port: ${process.env.PORT}`);
});
