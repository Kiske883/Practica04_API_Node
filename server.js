// archivo: server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Lista de artículos hardcodeados
const articulos = [
  { id: 1, empresa: "Levis", nombre: "Camisa", familia: "Camisa", descripcion: "Camisa chulisima hawaiana que filipas", opciones: "", informacion: "", imagen: "https://placehold.co/1000x1000", precio: 20, valoracion: "5", dto: "5" },
  { id: 2, empresa: "Dickies", nombre: "Pantalón", familia: "Pantalón", descripcion: "Pantalones xanxan que caben 4", opciones: "", informacion: "", imagen: "https://placehold.co/1000x1000", precio: 35, valoracion: "4", dto: "" },
  { id: 3, empresa: "Nike", nombre: "Zapatos", familia: "Zapatos", descripcion: "Unas Jordan que haces orejas nen", opciones: "", informacion: "", imagen: "https://placehold.co/1000x1000", precio: 60, valoracion: "3", dto: "" },
  { id: 4, empresa: "Nike", nombre: "Zapatos", familia: "Zapatos", descripcion: "Otras Jordan bonitas no, lo siguiente", opciones: "", informacion: "", imagen: "https://placehold.co/1000x1000", precio: 120.5, valoracion: "5", dto: "10" },
  { id: 5, empresa: "Nike", nombre: "Zapatos", familia: "Zapatos", descripcion: "Estas no son Jordan, pero son las Nike guarache", opciones: "", informacion: "", imagen: "https://placehold.co/1000x1000", precio: 90.99, valoracion: "4", dto: "" }
];

// Ruta que devuelve los artículos
app.get('/api/articulos', (req, res) => {
  res.json(articulos);
});

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});