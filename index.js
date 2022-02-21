$(document).ready(async function() {
    const documento = await $.getJSON("./database.json");

    console.log(documento);
    let html = '';
    documento.forEach(producto => {
        html += ` 
        <div class="col">
        <div class="card shadow-sm">
            <img src="${producto.image}" class="card-img-top" style ="max-width:150px">
            <div class="card-body">
                <!--Texto para descripción de la prenda-->
                <p class="card-text">${producto.title}</p>
                <!--Texto del precio de la prenda-->
                <small class="text-muted">€ ${producto.price}</small>
                <div class="d-flex justify-content-between align-items-center">
                    <!--Boton para agregar al carrito de compras-->
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary btnAddProduct" data-id="${producto.id}">Agregar</button>
                    </div>
                    <p>Rating: ${producto.rating.rate}</p>
                </div>
            </div>
        </div>
    </div>`;
    });

    $("#contenedor").html(html);


    $(".btnAddProduct").on("click", function() {
        const { id } = $(this).data();
        const carrito = localStorage.getItem("productos");

        console.log(carrito);
        if (carrito) {
            let data = JSON.parse(carrito);
            data.push(id);
            data = JSON.stringify(data);
            localStorage.setItem("productos", data);
        } else {
            let data = [id];
            data = JSON.stringify(data);
            localStorage.setItem("productos", data);
        }
        alert("Producto agregado al carrito")

    });
});