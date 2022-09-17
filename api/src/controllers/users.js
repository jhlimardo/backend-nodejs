const Users = require("../users.json");
const fs = require("fs");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

let usersArray = [];
usersArray = Users;

//metodo get de usuarios
const getUsers = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    try {
      const users = await Users;
      res.status(200).json(users);
    } catch (err) {
      res.status(500).send("Oops...!!!hubo un error");
    }
  } else {
    try {
      const user = await usersArray.find((p) => p.id === id);
      res.status(200).json(user);
    } catch (err) {
      res.status(500).send("Oops...!!!hubo un error");
    }
  }
};

//metodo post de ususario con encriptacion de password
const addUser = async (req, res) => {
  userBody = [];
  try {
    const rondasHash = 12;
    const id =
      Math.floor(Math.random() * 100) + Math.random().toString(36).substr(2, 4);
    userBody.name = req.body.name;
    userBody.email = req.body.email;
    userBody.password = await bcrypt.hash(req.body.password, rondasHash);
    let newUser = { ...userBody, id };
    if (req.body.name && req.body.email && userBody.password) {
      usersArray.push(newUser);
      fs.writeFileSync("src/users.json", JSON.stringify(usersArray), "utf8");
      res.status(201).json(usersArray);
    } else {
      res.status(500).json({ error: "Oops...!!!hubo un error" });
    }
  } catch (err) {
    console.error(err);
  }
};

//login usuario con creacion de token
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const token = jwt.sign(
    {
      email: email,
    },
    "secret"
  );
  try {
    const user = await Users.find((p) => p.email === email);
    if (user === null) {
      res.status(404).send("Usuario inexistente");
    } else {
      const passwordValidated = await bcrypt.compare(password, user.password);
      if (passwordValidated === true) {
        res.status(200).header("auth-token", token).json({
          message: "Usuario logeado correctamente",
          data: { email, token },
        });
      } else {
        res.status(401).json("Contraseña incorrecta");
      }
    }
  } catch (err) {
    res.status(500).json({ error: "Oops...!!!hubo un error" });
  }
};

module.exports = {
  getUsers,
  addUser,
  loginUser,
};
