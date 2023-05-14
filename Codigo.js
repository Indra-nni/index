function encriptar (){
        var texto = document.querySelector(".textArea").value;
        var textoCifrado = texto.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");
        document.querySelector(".mensaje").value = textoCifrado;
        document.querySelector(".textArea").value;
}
var boton1 = document.querySelector(".btn-Encriptar");
boton1.onclick = encriptar;

function desencriptar (){
        var texto = document.querySelector(".textArea").value;
        var textoCifrado = texto.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");
        document.querySelector(".mensaje").value = textoCifrado;
        document.querySelector(".textArea").value;

}

var boton2 = document.querySelector(".btn-Desencriptar");
boton2.onclick = desencriptar;

function copiar () {
    var textoSeleccionado = document.querySelector(".mensaje");
    textoSeleccionado.select();
    document.execCommand("copy");

}

var boton3 = document.querySelector(".btn-Copiar");
boton3.onclick = copiar;
