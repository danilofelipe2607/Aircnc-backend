//index,show,store,update,destroy
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");

module.exports = {
  async validarLogin(req, res) {
    const { email, senha } = req.params;

    const usuario = await User.find({ email: email, senha: senha });
    if (usuario.length) {
      const { id } = usuario[0];
      const token = jwt.sign({ id }, authConfig.secret, {
        expiresIn: 900 // expires in 15min
      });
      return res.status(200).send({ auth: true, token: token, id: id });
    }
    return res.status(202).json({ auth: false, error: "USER NOT FOUND" });
  },

  async store(req, res) {
    const { email, name, senha, age, active, cpf } = req.body;

    let user = await User.findOne({ cpf });

    if (!user) {
      user = await User.create({ email, name, senha, age, active, cpf });
    }
    return res.json(user);
  }
};
