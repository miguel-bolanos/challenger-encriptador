function encriptar(){
    var texto = document.getElementById("texto").value.toLowerCase();
    var textoencriptado = texto.replace(/e/img,"enter")
    var textoencriptado = textoencriptado.replace(/o/img,"ober")
    var textoencriptado = textoencriptado.replace(/i/img,"imes")
    var textoencriptado = textoencriptado.replace(/a/img,"ai")
    var textoencriptado = textoencriptado.replace(/u/img,"ufat")

    document.getElementById("resultado").innerHTML = textoencriptado;

    changeClasses();

}
function desencriptar(){
    var texto = document.getElementById("texto").value.toLowerCase();
    var textoencriptado = texto.replace(/enter/img,"e")
    var textoencriptado = textoencriptado.replace(/ober/img,"o")
    var textoencriptado = textoencriptado.replace(/imes/img,"i")
    var textoencriptado = textoencriptado.replace(/ai/img,"a")
    var textoencriptado = textoencriptado.replace(/ufat/img,"u")

    document.getElementById("resultado").innerHTML = textoencriptado;

    changeClasses();
}

function copiar() {
    var contenido = document.querySelector("#resultado");
    contenido.select();
    document.execCommand("copy")
}

function changeClasses() {

    let noresult = document.querySelector('.datos__aside')
    let result = document.querySelector('.datos__aside--resultado');
    let resultText = document.querySelector('.datos__aside--resultado--textarea');
  
    if (resultText.textContent.trim().length === 0) {
       
      result.classList.add('hidden');
      noresult.classList.remove('hidden');
    }
    else {
      result.classList.remove('hidden');
      noresult.classList.add('hidden');
    }
  }