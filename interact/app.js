var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");

document.getElementById('criptografar-btn').addEventListener('click', criptografar);
document.getElementById('descriptografar-btn').addEventListener('click', descriptografar);

function criptografar() {
    var texto = textInput.value;

    var resultCripto = texto.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");

    document.getElementById('output').innerHTML = '<textarea readonly id="result-text">' + resultCripto + '</textarea>' + 
    '<button class="button-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function descriptografar() {
    var texto = textInput.value;

    var resultDescripto = texto.replace(/enter/g, "e")
                               .replace(/imes/g, "i")
                               .replace(/ai/g, "a")
                               .replace(/ober/g, "o")
                               .replace(/ufat/g, "u");

    document.getElementById('output').innerHTML = '<textarea readonly id="result-text">' + resultDescripto + '</textarea>' + 
    '<button class="button-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function copiar() {
    var textoCop = document.getElementById('result-text');

    textoCop.select();
    document.execCommand('copy');
    alert("Texto Copiado");
}
