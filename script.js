var validates;

function calc() {
    validation();
    if (validates == true) {
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
        resultAverage = "<span>A sua média foi: " + average + ". <br>Você foi " + approval + "!";
        result.innerHTML = resultAverage;
    }
}

function reset() {
    document.getElementById("fristBimester").value = "";
    document.getElementById("secondBimester").value = "";
    document.getElementById("thirdBimester").value = "";
    document.getElementById("forthBimester").value = "";
    
}

function validation() {
    var fristBimester = parseFloat(document.getElementById("fristBimester").value);
    var secondBimester = parseFloat(document.getElementById("secondBimester").value);
    var thirdBimester = parseFloat(document.getElementById("thirdBimester").value);
    var forthBimester = parseFloat(document.getElementById("forthBimester").value);

    var grades = [fristBimester, secondBimester, thirdBimester, forthBimester];

    for (var i = 0; i < grades.length; i++) {
        if (Number.isNaN(grades[i]) == false) { //Valida se o valor retornado (number) é NaN (Not-a-Number)
            if (grades[i] <= 10 && grades[i] >= 0) {
                validates = true;
            } else {
                alert("Notas incorretas. Por gentileza, revise-as. Obs: As notas devem ser de 0 a 10.");
                validates = false;
                i = grades.length;
            }
        } else {
            alert("Campos vazios/inválidos. Por gentileza, revise-os e informe a nota corretamente.");
            validates = false;
            i = grades.length;
        }
    }
}