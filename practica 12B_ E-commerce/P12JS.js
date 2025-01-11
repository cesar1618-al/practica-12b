function validacion(){
    var Nombre = document.getElementById("Nombre").value;
    var Correo = document.getElementById("Correo").value;
    var Contra = document.getElementById("Contrasena").value;
    var Ano = document.getElementById("Ano").value;
    var Mes = document.getElementById("Mes").value;
    var Dia = document.getElementById("Dia").value;
    var Tel = document.getElementById("Tel").value;
    var Estado = document.getElementById("estado").value;
    var Direccion = document.getElementById("direccion").value;
    var Codigopostal = document.getElementById("codigo-postal").value;
    var Condiciones = document.getElementById("Condiciones");
    var Texto = document.getElementById("textoEntrada").value;

    if(Nombre == null || Nombre.length==0 || /^\s+$/.test(Nombre) ){
        alert("[ERROR] Inserte un nombre");
        return false;
    }
     else if(!(/^[a-z0-9]+[a.z0-9\_ \-\.]*[a-z0-9]+@{1}[a-z0-9]{2,128}\.([a-z0-9]{2,6}(\.[a-z0-9]{2,4})?)$/i.test(Correo))){
        alert("[ERROR] El correo no es valido");
        return false;
     }
     else if(Ano > 2100 || Ano < 1900 || Dia > 31 || Mes > 12){
        alert("[ERROR] Ingresa un cumpleaños valido");
        return false;
     }
     else if(!(/^\d{10}$/.test(Tel))){
        alert("[ERROR] Ingresa un numero de telefono valido");
        return false;
     }
     if(!Condiciones.checked){
        alert("[ERROR] Por favor, acepta los terminos y condiciones");
        return false;
     }
     if(Texto == null || Texto.length==0 || /^\s+$/.test(Texto) ){
        alert("[ERROR] Inserte una entrada");
        return false;
     }

     return true;

}

function limita(){
    var Texto = document.getElementById("textoEntrada");
    if(Texto.value.length >=100){
        return false;
    } else{
        return true;
    }
}