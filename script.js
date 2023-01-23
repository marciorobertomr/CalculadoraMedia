let validates;

function calc() {
    let fristBimester = parseFloat(document.getElementById("fristBimester").value);
    let secondBimester = parseFloat(document.getElementById("secondBimester").value);
    let thirdBimester = parseFloat(document.getElementById("thirdBimester").value);
    let forthBimester = parseFloat(document.getElementById("forthBimester").value);

    validation(fristBimester, secondBimester, thirdBimester, forthBimester);

    if (validates == true) {
        let average = (fristBimester + secondBimester + thirdBimester + forthBimester) / 4;
        let approval;

        if (average >= 7) {
            approval = "Aprovado";
        } else {
            approval = "Reprovado";
        }

        let result = document.getElementById("result");
        resultAverage = "<div id='return' class='result'><span>A sua média foi: " + average + ". <br>Você foi " + approval + "!</span></div>";
        result.innerHTML = resultAverage;
    }
}

function reset() {
    document.getElementById("fristBimester").value = "";
    document.getElementById("secondBimester").value = "";
    document.getElementById("thirdBimester").value = "";
    document.getElementById("forthBimester").value = "";

    document.getElementById("return").remove();    
}

function validation(fristBimester, secondBimester, thirdBimester, forthBimester) {

    let grades = [fristBimester, secondBimester, thirdBimester, forthBimester];

    for (let i = 0; i < grades.length; i++) {
        if (Number.isNaN(grades[i]) == false) { //Valida se o valor retornado (number) é NaN (Not-a-Number)
            if (grades[i] <= 10 && grades[i] >= 0) {
                validates = true;
            } else {
                alert("Notas incorretas. Por gentileza, revise-as. Obs: As notas devem estar entre 0 e 10.");
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