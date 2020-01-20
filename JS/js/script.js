let nums = [4, 6, 8, 10];

let nuevo = nums.map(function(item) {
  if (item % 2 === 0) {
    return item + 2;
  } else {
    return item + 3;
  }
});

function nombreFuncion() {
  return;
}

let nombreFuncion = () => {};

let nuevo = nums.map(sumaDos);

let filtro = nums.filter(item => {
  if (item < 8) {
    return item;
  }
});

function suma(p1, p2, p3, p4) {
  return p1 + p2 + p3 + p4;
}

suma(1, 2, 3, 4);

function suma2(p1 = 0, p2 = 0, p3 = 0, p4 = 0) {
  return p1 + p2 + p3 + p4;
}

suma2(1, 2, 3, 4);
suma2(1, 2, 3);
suma2(1, 2);
suma2(1);
suma2();

[4, 5, 8, 10];

nums.splice(1, 1); // Quita el 5.
[4, 8, 10];

nums.splice(1, 0, 20); // (posición, cantidad de elementos a remover, lo que va a añadir).
[4, 20, 5, 8, 10];

nums.slice(0, 2); // Es un substring como en c++.

let obj = {
  nombre: "Miguel",
  apellido: "Costilla",
  edad: 20,
  materias: [{ nombre: "Web" }, { nombre: "BD" }],
  imprime: function() {
    console.log(this.nombre);
  },
  deporte: { nombre: "futbol", coach: "Mario", hora: "4:00 pm" }
};

console.log(obj.apellido);
console.log(obj["apellido"]);

let prop = "apellido";
obj[prop];

for (let key in obj) {
  console.log(obj[key], key);
  console.log("Key : " + obj[key]);
  console.log(`key:${obj[key]}`);
}

for (let i = 0; i < obj.materias.length; i++) {
  console.log(obj.materias[i].nombre);
}

obj.imprime();
console.log(obj.deporte.coach);
