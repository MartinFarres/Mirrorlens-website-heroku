window.onload = function () {
    let product_id = document.querySelector(".product_id");
    let buttonCart = document.querySelector(".addToCart");
    buttonCart.addEventListener("click", agregarItem(product_id));
    function agregarItem(id) {
        var url = "agregarCarrito" + id;
        $.ajax({
            url: url,
            type: "GET",
            dataType: "json",
            succes: function (data, textStatus, jqXHR) {
                mostrarDatos(data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
            },
        });
        return false;
    }
    function mostrarDatos(data) {
        var cantidad = 0;
        $.each(data, function (i, item) {
            cantidad += item.cantidad;
        });
        $("#cant").html(cantidad);
    }

    function refrescar() {
        var url = "listarCarrito";
        $.ajax({
            url: url,
            type: "GET",
            dataType: "json",
            succes: function (data, textStatus, jqXHR) {
                mostrarDatos(data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
            },
        });
        return false;
    }
    $().ready(function () {
        refrescar();
    });
    $().ready(function () {
        refrescar();
    });
};
