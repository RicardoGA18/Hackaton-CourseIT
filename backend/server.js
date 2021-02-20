const express = require("express");
const { dbConnection } = require("./db/config");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { check } = require("express-validator");
const users = require("./controllers/users");
const event = require('./controllers/events');
const { validate } = require("../backend/middlewares/validate");

app.use(express.json())

dbConnection();

// CRUD EVENTOS

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => users.getUsers(req, res));

app.post(
  "/new",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password debe ser de almenos 6 caracteres").isLength({
      min: 6,
    }),
    validate,
  ],
  (req, res) => users.newUser(req, res)
);

app.post(
  "/login",
  check("email", "El email es obligatorio").isEmail(),
  check("password", "El password debe ser de almenos 6 caracteres").isLength({
    min: 6,
  }),
  validate,
  (req, res) => users.loginUser(req,res)
);

app.post(
    "/postEvent",
    check("EventName", "El nombre del evento es obligatorio").not().isEmpty(),
    check("organizer", "El email es obligatorio").not().isEmpty(),
    check("organizer", "El email es obligatorio").not().isEmpty(),
    validate,
    (req, res) => event.newEvent(req,res)
);

app.listen(process.env.PORT, () => {
  console.log(`running on port: ${process.env.PORT}`);
});
