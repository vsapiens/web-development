let express = require("express");
let morgan = require("morgan");
let bodyParser = require("body-parser");
let jsonParser = bodyParser.json();

let app = express();
app.use(express.static("public"));
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
    matricula: 1039888
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
    return res.status(200).json(result);
  } else {
    res.statusMessage = "no existe el alumno en la base de datos";
    return res.status(404).send();
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
    return res.status(200).json(result);
  } else {
    res.statusMessage = "no existe el alumno en la base de datos";
    return res.status(404).send();
  }
});

app.post("/api/newStudent", jsonParser, (req, res) => {
  let student = req.body;
  if (Object.keys(student).length !== 3) {
    res.statusMessage = "No tiene las propiedades suficientes";
    return res.status(406).send();
  }

  let finder = estudiantes.find(elem => {
    if (elem.matricula === student.matricula) {
      return elem;
    }
  });

  if (finder) {
    res.statusMessage = "Ya existe esta matricula";
    console.log(estudiantes);
    return res.status(409).send();
  } else {
    let newStudent = {
      nombre: student.name,
      apellido: student.apellido,
      matricula: student.matricula
    };
    estudiantes.push(newStudent);
    res.statusMessage = "Nuevo estudiante añadido";
    return res.status(201).send(newStudent);
  }
});

app.put("/api/updateStudent/:id", (req, res) => {
  let student = req.body;
  //TODO: Verificar que tenga matricula y otras 2 propiedades
  let result = estudiantes.find(elem => {
    if (elem.matricula === student.id) {
      return elem;
    }
  });

  if (result) {
    res.statusMessage = "No coincide ninguna matricula";
    res.status(409).send();
  } else {
    res.statusMessage = "El estudiante ha sido modificado";
    res.status(201).send(result);
  }
});
app.delete("/api/deleteStudent?id=matricula", (req, res) => {
  let student = req.body;
  //TODO: Verificar que exista la matricula
  if (student.matricula) {
    res.statusMessage = "";
  }
});
app.get("/api/students", (req, res) => {
  console.log(req);

  return res.status(200).json(estudiantes);
});

app.listen(8080, () => {
  console.log("Servidor corriendo en el puerto 8080");
});
