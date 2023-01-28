const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const multer = require("multer");
mongoose.Promise = global.Promise;

//create our app
const app = express();

//middleware
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json())

const usuarioPath = require("./routes/Usuarios")
const contenidoPath = require("./routes/Contenidos")
const actividadPath = require("./routes/Actividades")
const draganddropPath = require("./routes/Draganddrops")
const evaluacionPath = require("./routes/Evaluaciones")

//routes
app.get("/", (req, res) => {
  res.send("API para CRUD para base de datos de proyecto de Software ESDCOND (Isaac Tordecilla, Mara Torres, Dina Mendoza)");
});

app.use("/", usuarioPath)
app.use("/", contenidoPath)
app.use("/", actividadPath)
app.use("/", draganddropPath)
app.use("/", evaluacionPath)

//Settings
app.set("port", process.env.PORT || 4000);

//start server
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});

//DB conection
mongoose
  .connect(process.env.BD)
  .then(() => console.log("Database connected"))
  .catch((error) => console.error(error));

/* mongoose
  .connect("mongodb+srv://itordecillaferia46:esdconAbd@cluster0.hpqzdzo.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("Database connected"))
  .catch((err) => console.error(err));
 */
  