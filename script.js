const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

function checkTextAreas() {
    if (textArea.value.trim() !== '' || mensagem.value.trim() !== '') {
        mensagem.classList.add('hidden');
    } else {
        mensagem.classList.remove('hidden');
    }
}

textArea.addEventListener('input', checkTextAreas);
mensagem.addEventListener('input', checkTextAreas);


function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = ""; 
    checkTextAreas();  
}

function encriptar(stringEncriptada) {
    
    let matrizCodigo = [["e" , "enter" ] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
    checkTextAreas();    
}

function desencriptar(stringDesencriptada) {
    
    let matrizCodigo = [["e" , "enter" ] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return stringDesencriptada;
}

function copiar() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0, 99999); 
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência');
}