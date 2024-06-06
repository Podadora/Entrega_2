//Centado Body
const cuerpoProductos = document.body;
cuerpoProductos.style.textAlign = "center";

//Cambio titulo
const tituloProductos = document.getElementById('titulo');
tituloProductos.innerText = "Lista de Productos";

// declaracion variable de precios base
const productos = [
    {
        descripcion: 'Queso',
        precio: 200,
        codigo: 1,
        
    },
    {
        descripcion: 'Leche',
        precio: 220,
        codigo: 2,
    },
    {
        descripcion: 'Yogurth',
        precio: 300,
        codigo: 3,

    },
    {
        descripcion: 'Yerba',
        precio: 330,
        codigo: 4,

    },
    {
        descripcion: 'Pan',
        precio: 500,
        codigo: 5,

    },
    {
        descripcion: 'Helado',
        precio: 870,
        codigo: 6,

    },
    {
        descripcion: 'Fideos',
        precio: 160,
        codigo: 7,

    },
    {
        descripcion: 'Jamon',
        precio: 450,
        codigo: 8,
    },
]

// Muestra de Productos

const divProductos = document.createElement('div');
cuerpoProductos.appendChild(divProductos);

for (let producto of productos){
    const li = document.createElement('li');
    li.innerHTML = `Nombre: ${producto.descripcion} -- Precio: $${producto.precio} // CODIGO: ${producto.codigo} `;    cuerpoProductos.appendChild(li);
}

function botonesCompra ()



