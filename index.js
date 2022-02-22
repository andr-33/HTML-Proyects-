$(document).ready(async function() {
    const documento = await $.getJSON("./database.json");

    console.log(documento);

    let Pmen = '';
    let Pwomen = '';
    let Pelectronic = '';

    documento.forEach(producto => { 
        if(producto.category == "M"){
            Pmen += ` 
        <div class="col">
        <div class="card" style="width: 18rem;">
            <img src="${producto.image}" class="card-img-top" style ="max-width:150px; max-heigth;">
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
    }
        else if(producto.category == "W"){
            Pwomen += ` 
            <div class="col">
            <div class="card" style="width: 18rem;">
                <img src="${producto.image}" class="card-img-top" style ="max-width:150px; max-heigth;">
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
        }
        else if(producto.category == "E"){
            Pelectronic +=` 
            <div class="col">
            <div class="card" style="width: 18rem;">
                <img src="${producto.image}" class="card-img-top" style ="max-width:150px; max-heigth;">
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
        }

    });

    let html = Pmen+Pwomen+Pelectronic;
    let View = false; 

    $("#contenedor").html(html);

    $("#ShowCategoryMen").on("click",function() {
        if(View == false){
        $("#contenedor").html(Pmen);
        View = true;
        }
        else{
            $("#contenedor").html(html);
            View = false;
        }
    });

    $("#ShowCategoryWomen").on("click",function() {
        if(View == false){
            $("#contenedor").html(Pwomen);
            View = true;
            }
            else{
                $("#contenedor").html(html);
                View = false;
            }
    });

    $("#ShowCategoryElectronics").on("click",function() {
        if(View == false){
            $("#contenedor").html(Pelectronic);
            View = true;
            }
            else{
                $("#contenedor").html(html);
                View = false;
            }
    });


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