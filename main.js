function validar(){
    var nombre, apellido, correo, expresion;
    nombre = document.getElementById("nombres").value;
    apellido = document.getElementById("apellidos").value;
    correo = document.getElementById("correo").value;

    if(nombre === ""||apellido === ""||correo === ""){
        alert("todos los campos son obligatorios");
        return false;
    }

}
