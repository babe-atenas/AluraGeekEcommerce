// Leer productos

const listaProductos = () => fetch("https://64d99873e947d30a260a2941.mockapi.io/productsGame").then( respuesta => respuesta.json());


// Agregar producto

const addProduct = (url, categoria, productName, price, description) => {
    return fetch(`https://64d99873e947d30a260a2941.mockapi.io/productsGame`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({url, categoria, productName, price, description, id: uuid.v4()}),
    });
};

// Eliminar producto

const eliminarProducto = (id) => {
    return fetch(`https://64d99873e947d30a260a2941.mockapi.io/productsGame/${id}`, {
        method: "DELETE",
    })
}

// Editar producto

const detalleProducto = (id) => {
    return fetch(`https://64d99873e947d30a260a2941.mockapi.io/productsGame/${id}`).then( (respuesta) => respuesta.json());
};

const actualizarProducto = (url, categoria, productName, price, description, id) => {
    return fetch(`https://64d99873e947d30a260a2941.mockapi.io/productsGame/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({url, categoria, productName, price, description})
    }).then( (respuesta) => respuesta).catch((err) => console.log(err));
}

// Leer admins

const listaAdmins = () => fetch("https://64d99873e947d30a260a2941.mockapi.io/admins").then( respuesta => respuesta.json());

// Ver más

const obtenerProductoId = (id) => {
    return fetch(`https://64d99873e947d30a260a2941.mockapi.io/productsGame/${id}`).then( (respuesta) => respuesta.json());
};


export const productServices = {
    listaProductos,
    addProduct,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,
    listaAdmins,
    obtenerProductoId,
}