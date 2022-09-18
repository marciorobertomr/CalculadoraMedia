function calcular() {
    var primeiroBimestre = parseFloat(document.getElementById("primeiroBimestre").value);
    var segundoBimestre = parseFloat(document.getElementById("segundoBimestre").value);
    var terceiroBimestre = parseFloat(document.getElementById("terceiroBimestre").value);
    var quartoBimestre = parseFloat(document.getElementById("quartoBimestre").value);

    var media = (primeiroBimestre + segundoBimestre + terceiroBimestre + quartoBimestre)/4;
    var aprovacao;

    if (media >= 7) {
        aprovacao = "Aprovado";
    } else {
        aprovacao = "Reprovado";
    }

    var resultado = document.getElementById("resultado");
    resultadoMedia = "A sua média foi: " + media + ". <br>Você foi " + aprovacao + "!";
    resultado.innerHTML = resultadoMedia;
}