const mongoose = require("mongoose");
const uuid = require("uuid/v4");
const UserSchema = new mongoose.Schema({
  id: { type: String, default: uuid },
  name: String,
  email: String,
  age: Number,
  senha: String,
  active: Boolean,
  cpf: Number
});

module.exports = mongoose.model("User", UserSchema);
