window.onload = function () {
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
};
