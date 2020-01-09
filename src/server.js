const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
mongoose.connect(
  "mongodb+srv://admin:589916@cluster0-sidcp.mongodb.net/airb?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads"))); //retorna arquivos
app.use(routes);
app.listen(3333);
