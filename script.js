function calc() {
    var fristBimester = parseFloat(document.getElementById("fristBimester").value);
    var secondBimester = parseFloat(document.getElementById("secondBimester").value);
    var thirdBimester = parseFloat(document.getElementById("thirdBimester").value);
    var forthBimester = parseFloat(document.getElementById("forthBimester").value);

    var average = (fristBimester + secondBimester + thirdBimester + forthBimester)/4;
    var approval;

    if (average >= 7) {
        approval = "Aprovado";
    } else {
        approval = "Reprovado";
    }

    var result = document.getElementById("result");
    resultAverage = "A sua média foi: " + average + ". <br>Você foi " + approval + "!";
    result.innerHTML = resultAverage;
}

function reset() {
    document.getElementById("fristBimester").value = "";
    document.getElementById("secondBimester").value = "";
    document.getElementById("thirdBimester").value = "";
    document.getElementById("forthBimester").value = "";
}