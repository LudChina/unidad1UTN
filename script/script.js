function seleccionarSeguro(){
    var tipo = document.getElementById("seguro").value
    switch(tipo){
        case "b":
            document.getElementById(precio).innerHTML = "$500"
            break;
        case "i":
            document.getElementById(precio).innerHTML = "$1000"
            break;
        case "p":
            document.getElementById(precio).innerHTML = "$1500"
            break;
        default:
            document.getElementById(precio).innerHTML = "Seleccione una opcion"
    }
}