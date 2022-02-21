$(document).ready(async function() {
    // JSON CON DATOS DEL DOCUMENTO 
    const documento = await $.getJSON("./database.json");
    let carrito = localStorage.getItem("productos");
    carrito = JSON.parse(carrito);

    let html = '';
    documento.forEach(element => {
        // ITINERAR LOS DATOS DEL DOCUMENTO AQUI TENES QUE PONER UNA DOBLE ITINERACION Y UN IF PARA IMPRIMIR O NO LOS DATOS 
        carrito.forEach(carrito => {
            if (carrito == element.id) {
                // IMPRIMIR
                html += ``;
            }
        })
    });

    $("#contenedor").html(html);


    // Tambien hace que el precio del total coincida
});