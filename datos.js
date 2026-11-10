// ============================================================
//  DATOS — mesas y familias (editable)
//  Para mover una familia de mesa, cámbiala de lista.
// ============================================================
const COLUMNAS = 4;   // mesas por fila en el plano

const mesas = [
  {
    "numero": 1,
    "familias": [
      "Jonás Saquic y Familia",
      "Elias Saquic y Familia",
      "Ponciano Saquic y Familia",
      "Servando Toj y Familia",
      "Gerber Xiquin y Familia",
      "Wilber Pérez y Familia",
      "Arnoldo Saquic y Familia",
      "Nery Saquic y Familia"
    ]
  },
  {
    "numero": 2,
    "familias": [
      "Catalina de Saquic",
      "Elena Saquic y Familia",
      "Pedro Saquic y Familia",
      "Daniel Saquic y Familia",
      "Juan Carlos Reyes y Familia",
      "Luis Muñoz y Familia",
      "Albez Teret y Familia",
      "Tomas López y Familia"
    ]
  },
  {
    "numero": 3,
    "familias": [
      "Elmer Pichiya y Familia",
      "Moises Mejia y Familia",
      "Ezequiel Pichiya y Familia",
      "Armando Montufar y Familia",
      "Romulo Pichiya y Familia",
      "Rene Arana y Familia",
      "Natividad de Montufar",
      "Diana Ramírez y Familia"
    ]
  },
  {
    "numero": 4,
    "familias": [
      "Nancy Batz y Familia",
      "Alex Fernández y Familia",
      "Cristian Sequen y Familia",
      "Raymundo Xicay y Familia",
      "Graciela Cifuentes y Familia",
      "Samuel Vasquez y Familia",
      "Floridalma Pichiya y Familia",
      "Milter Macu y Familia"
    ]
  },
  {
    "numero": 5,
    "familias": [
      "Benjamín Chavac y Familia",
      "Familia Cuc Hidalgo",
      "Familia Figueroa Hidalgo",
      "Familia Xico Tubac",
      "Familia Tubac Tubac",
      "Luis Tubac y Familia",
      "Luis Calva y Familia",
      "Perla Tubac y Familia"
    ]
  },
  {
    "numero": 6,
    "familias": [
      "Celso Tubac y Familia",
      "Sara Tubac y Familia",
      "Judith Tubac y Familia",
      "Virginia Tubac y Familia",
      "Mayra Tubac y Familia",
      "Avelino Brito y Familia",
      "Pedro Tesaguic y Familia",
      "Ancelmo Macu y Familia"
    ]
  },
  {
    "numero": 7,
    "familias": [
      "Lilian García y Familia",
      "Factor Pérez y Familia",
      "Luis Marroquin y Familia",
      "Claudia Marroquin y Familia",
      "Julia de Toj",
      "Juan Montufar y Familia",
      "Karin Montufar y Familia",
      "Alejandra Montufar y Familia"
    ]
  },
  {
    "numero": 8,
    "familias": [
      "Dania Yac",
      "Alba Cortez y Familia",
      "Wilson Arana y Familia",
      "Vivian Arana y Familia",
      "Brayan Ortiz",
      "Misael Rivera y familia",
      "Esteban Arana y Familia",
      "Manuel Subuyuc y Familia"
    ]
  },
  {
    "numero": 9,
    "familias": [
      "Luis Hidalgo y Familia",
      "Carlos Urias y Familia",
      "Ingrid Pérez y Familia",
      "Familia Loy Celada",
      "Familia Monroy Martínez",
      "Familia Figueroa Divas",
      "Familia Echeverria Estrada",
      "Diana Suarez y Familia"
    ]
  },
  {
    "numero": 10,
    "familias": [
      "Familia Digueros Siana",
      "Familia Surec Charuc",
      "Familia Montufar Reyes",
      "Familia García Rivas",
      "Familia Gamboa Chanax",
      "Familia Apén Álvarez",
      "Familia Morales Zarate",
      "Familia Castro Marroquin"
    ]
  },
  {
    "numero": 11,
    "familias": [
      "Familia Curruchiche Leiva",
      "Familia Bautista Luch",
      "Oscar Yac y Familia",
      "Familia Xiquin Panteul",
      "Familia Yal Xiquin",
      "Familia Xiquin Lemus",
      "Familia Tiño Xiquin",
      "Alan García y Familia"
    ]
  },
  {
    "numero": 12,
    "familias": [
      "Willy Torres y Familia",
      "Familia Ramirez Rosales",
      "Pedro Ramirez y Familia",
      "Yanira Ramirez",
      "Rony Montufar y Familia",
      "Luis Solorzano y Familia"
    ]
  }
];
