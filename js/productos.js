/////////////Centrado Body
const cuerpoProductos = document.body;
cuerpoProductos.style.textAlign = "center";

/////////////Cambio de titulo
const tituloProductos = document.getElementById('titulo');
tituloProductos.innerText = "Lista de Productos";

///////////// declaracion variable de precios base

let carrito = [];
let productos = [
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

///////////// Muestra de Productos

const divProductos = document.createElement('div');
cuerpoProductos.appendChild(divProductos);

for (const producto of productos){
    const li = document.createElement('li');
    li.innerHTML = `Nombre: ${producto.descripcion} -- Precio: $${producto.precio} // CODIGO: ${producto.codigo} `;    
    cuerpoProductos.appendChild(li);
    botonesCompra(producto.codigo);
}

/////////////Funcion para generar botones de productos
function botonesCompra (codigo){
//Botones Mas
    const botonMas = document.createElement('button');
    botonMas.style.width = '2rem';
    botonMas.onclick = () => {
        let valor1 = document.getElementById(codigo);
        valor1.value ++;
    };
    botonMas.textContent = '+';
    cuerpoProductos.appendChild(botonMas);


// Input
    const input = document.createElement('input');
    input.style.width = '2rem';
    input.id = codigo;
    input.value = 0;
    cuerpoProductos.appendChild(input);


// Botones Menos
    const botonMenos = document.createElement('button');
    botonMenos.style.width = '2rem';
    botonMenos.onclick = () => {
        valor1 = document.getElementById(codigo);
        if (valor1.value <= 0 ){
            alert("Cantidad no puede ser menor a 0!");
            valor1.value = 0;
        }
        else
            valor1.value --;
    };
    botonMenos.textContent = '-';
    cuerpoProductos.appendChild(botonMenos);
}

///////////// Boton efectuar compra
const espacioBoton = document.createElement('div');
const botonCompra = document.createElement('button');
botonCompra.style.width = '4rem';
botonCompra.textContent = 'Comprar';
espacioBoton.appendChild(botonCompra);
cuerpoProductos.appendChild(espacioBoton);

//Boton OnClick

botonCompra.onclick= () => {
    carrito = [];
    calculoGastos();
    botonCompra.remove();
    const botonVolverAComprar = document.createElement('button');
    botonVolverAComprar.innerHTML = `<a href="productos.html" >Volver a operar</a>`;
    cuerpoProductos.appendChild(botonVolverAComprar);
};

/////////////Funcion para calcular y mostrar los gastos

function calculoGastos(){
    const divCarrito = document.createElement('footer');
    cuerpoProductos.appendChild(divCarrito);
    let gastos = 0;
    for (const product of productos){
        let as = document.getElementById(product.codigo);
        if (as.value > 0) {
            carrito.push(new Producto(as.value, product.descripcion, product.precio));
            gastos = product.precio * as.value + gastos;

        }
    }


    for (const compras of carrito) {
        const divCompras = document.createElement('p')
        divCompras.innerHTML = ` ${compras.nombre} -- Precio: $${compras.precio} // Cantidad: ${compras.cantidad} `;    
        divCarrito.appendChild(divCompras);
    }
    const gastoTotal = document.createElement('p');
    gastoTotal.innerHTML = `El total de su compra seria : $${gastos}`;
    divCarrito.appendChild(gastoTotal);
}

//Constructor productos para carrito

class Producto {
    constructor(cantidad, nombre, precio) {
        this.cantidad = cantidad;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
}
// Constructor productos para tienda

class Tienda {
    constructor(descripcion, precio, codigo) {
        this.descripcion = descripcion;
        this.precio = precio;
        this.codigo = codigo;
    }
}



