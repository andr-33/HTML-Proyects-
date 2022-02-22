$(document).ready(async function() {
    // JSON CON DATOS DEL DOCUMENTO 
    const documento = await $.getJSON("./database.json");
    let carrito = localStorage.getItem("productos");
    carrito = JSON.parse(carrito);

    let html = '';
    let Artuculos = '';
    let totalView = '';
    let total = 0;
    let NuArticulos = carrito.length;
    

    documento.forEach(element => {
        // ITINERAR LOS DATOS DEL DOCUMENTO AQUI TENES QUE PONER UNA DOBLE ITINERACION Y UN IF PARA IMPRIMIR O NO LOS DATOS 
        carrito.forEach(carrito => {
            if (carrito == element.id) {
                // IMPRIMIR
                html += `
                <li class="list-group-item d-flex justify-content-between lh-sm">
                        <div>
                            <h6 class="my-0">${element.title}</h6>
                        </div>
                        <span class="text-muted">€${element.price}</span>
                </li>
                `;

                total += parseFloat(element.price);
            }

            Artuculos = `
            <span class="text-secondary">Tú Carrito</span>
            <span class="badge bg-primary rounded-pill">${NuArticulos} prendas</span>`;

            totalView = `
            <li class="list-group-item d-flex justify-content-between">
                <span>Total </span>
                <strong>€ ${total}</strong>
            </li>
            <hr/>
            <a id="clear" class = "btn btn-sm btn-danger">Vaciar carrito</a>
            `;

        })

    });

    
    $("#cont").html(html);
    $("#numArticulos").html(Artuculos);
    $("#total").html(totalView);
    console.log(total);

    $("#clear").on("click", function(){
        localStorage.removeItem("productos");
        location.reload();
    });

    // Tambien hace que el precio del total coincida
});