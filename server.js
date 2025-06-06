// archivo: server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Lista de artículos hardcodeados





const articulos = [
  {
    "id": 1,
    "empresa": "Levis",
    "nombre": "Camisa Hawaiana",
    "familia": "Camisa",
    "descripcion": "Camisa chulisima hawaiana que filipas",
    "opciones": "",
    "informacion": "",
    "imagen": "https://placehold.co/1000x1000",
    "precio": 20,
    "valoracion": "5",
    "totalValoraciones": "1250",
    "dto": "5"
  },
    {
    "id": 2,
    "empresa": "Levis",
    "nombre": "Levis 501",
    "familia": "Pantalones",
    "descripcion": "Modelo 501 de toda la vida",
    "opciones": "",
    "informacion": "",
    "imagen": "https://placehold.co/1000x1000",
    "precio": 55,
    "valoracion": "4",
    "totalValoraciones": "2250",
    "dto": "5"
  },
  {
    "id": 3,
    "empresa": "Dickies",
    "nombre": "Pantalón 46x46",
    "familia": "Pantalón",
    "descripcion": "Pantalones xanxan que caben 4",
    "opciones": "",
    "informacion": "",
    "imagen": "https://placehold.co/1000x1000",
    "precio": 35,
    "valoracion": "4",
    "totalValoraciones": "150",    
    "dto": ""
  },
    {
    "id": 4,
    "empresa": "Dickies",
    "nombre": "Pantalón corto 46",
    "familia": "Pantalón",
    "descripcion": "Pantalones cortos con aire acondicionado",
    "opciones": "",
    "informacion": "",
    "imagen": "https://placehold.co/1000x1000",
    "precio": 25,
    "valoracion": "3",
    "totalValoraciones": "150",    
    "dto": ""
  },
    {
    "id": 5,
    "empresa": "Dickies",
    "nombre": "Camiseta tirantes",
    "familia": "Camiseta",
    "descripcion": "Camiseta de tirantes de tu abuelo",
    "opciones": "",
    "informacion": "",
    "imagen": "https://placehold.co/1000x1000",
    "precio": 15,
    "valoracion": "2",
    "totalValoraciones": "15",    
    "dto": ""
  },  
  {
    "id": 6,
    "empresa": "Nike",
    "nombre": "Jordan XXI",
    "familia": "Zapatos",
    "descripcion": "Unas Jordan que haces orejas nen",
    "opciones": "",
    "informacion": "",
    "imagen": "https://placehold.co/1000x1000",
    "precio": 60,
    "valoracion": "3",
    "totalValoraciones": "275",    
    "dto": ""
  },
  {
    "id": 7,
    "empresa": "Nike",
    "nombre": "Jordan VII",
    "familia": "Zapatos",
    "descripcion": "Otras Jordan bonitas no, lo siguiente",
    "opciones": "",
    "informacion": "",
    "imagen": "https://placehold.co/1000x1000",
    "precio": 120.5,
    "valoracion": "5",
    "totalValoraciones": "2478",    
    "dto": "10"
  },
  {
    "id": 8,
    "empresa": "Nike",
    "nombre": "Air Force 1",
    "familia": "Zapatos",
    "descripcion": "Aquí empezo todo",
    "opciones": "",
    "informacion": "",
    "imagen": "https://placehold.co/1000x1000",
    "precio": 120.5,
    "valoracion": "5",
    "totalValoraciones": "2478",    
    "dto": "10"
  },  
  {
    "id": 9,
    "empresa": "Nike",
    "nombre": "Air Guarache",
    "familia": "Zapatos",
    "descripcion": "Air Max guarache, un calcetin hecho deportiva",
    "opciones": "",
    "informacion": "",
    "imagen": "https://placehold.co/1000x1000",
    "precio": 90.99,
    "valoracion": "4",
    "totalValoraciones": "45",    
    "dto": ""
  }
] ;

// Ruta que devuelve los artículos
app.get('/api/articulos', (req, res) => {
  res.json(articulos);
});

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});