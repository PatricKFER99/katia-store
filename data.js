/* BASE DE DATOS DE PRODUCTOS
   Asegúrate de que las imágenes coincidan con estos nombres en la carpeta img/
*/

const productos = [
    // --- BOLSOS (producto1 a 3) ---
    { id: 1, nombre: "Tote Bag Premium", precio: 89.90, imagen: "producto1.jpg", tipo: "bolsos" },
    { id: 2, nombre: "Bolso Urbano", precio: 75.00, imagen: "producto2.jpg", tipo: "bolsos" },
    { id: 3, nombre: "Cartera Ejecutiva", precio: 95.00, imagen: "producto3.jpg", tipo: "bolsos" },

    // --- PROMOCIÓN (producto4) ---
    { id: 4, nombre: "DÚO: Bolso + Cartera", precio: 119.90, imagen: "producto4.jpg", tipo: "promocion" },

    // --- ARETES (producto5 a 10) ---
    { id: 5, nombre: "Aretes Golden Drop", precio: 25.00, imagen: "producto5.jpg", tipo: "aretes" },
    { id: 6, nombre: "Argollas Silver", precio: 29.00, imagen: "producto6.jpg", tipo: "aretes" },
    { id: 7, nombre: "Perlas Clásicas", precio: 19.90, imagen: "producto7.jpg", tipo: "aretes" },
    { id: 8, nombre: "Floral Spring", precio: 22.00, imagen: "producto8.jpg", tipo: "aretes" },
    { id: 9, nombre: "Corazones Cristal", precio: 24.00, imagen: "producto9.jpg", tipo: "aretes" },
    { id: 10, nombre: "Maxi Fiesta", precio: 35.00, imagen: "producto10.jpg", tipo: "aretes" },

    // --- VESTIDOS (vestido1 y 2) ---
    { id: 11, nombre: "Vestido Gala Noche", precio: 120.00, imagen: "vestido1.jpg", tipo: "vestidos" },
    { id: 12, nombre: "Vestido Casual Verano", precio: 85.00, imagen: "vestido2.jpg", tipo: "vestidos" },

    // --- SOUVENIRS (otros1) ---
    { id: 13, nombre: "Taza Personalizada", precio: 30.00, imagen: "otros1.jpg", tipo: "souvenirs" }
];