let express = require("express");
let morgan = require("morgan");

let app = express();
app.use(morgan("dev"));

let estudiantes = [
  {
    nombre: "Miguel",
    apellido: "Angeles",
    matricula: 1730939
  },
  {
    nombre: "Erick",
    apellido: "Gonzalez",
    matricula: 1039859
  },
  {
    nombre: "Victor",
    apellido: "Villarreal",
    matricula: 1039863
  },
  {
    nombre: "Victor",
    apellido: "Cardenas",
    matricula: 1039863
  }
];
app.get("/api/getById", (req, res) => {
  let id = req.query.id;

  let result = estudiantes.find(elemento => {
    if (elemento.matricula == id) {
      return elemento;
    }
  });

  if (result) {
    res.status(200).json(result);
  } else {
    res.statusMessage = "no existe el alumno en la base de datos";
    res.status(404).send();
  }
});

app.get("/api/getByName/:name", (req, res) => {
  let name = req.params.name;

  let result = estudiantes.filter(elemento => {
    if (elemento.nombre === name) {
      return elemento;
    }
  });

  if (result.length > 0) {
    res.status(200).json(result);
  } else {
    res.statusMessage = "no existe el alumno en la base de datos";
    res.status(404).send();
  }
});

app.get("/api/students", (req, res) => {
  console.log(req);
  res.status(200).json(estudiantes);
});

app.listen(8080, () => {
  console.log("Servidor corriendo en el puerto 8080");
});
