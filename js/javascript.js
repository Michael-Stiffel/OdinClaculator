function LoadCalc() {

    buildCalc();



}


function getCalculator(number1, operrator, number2) {

    class Calc {
        constructor(number1, operrator, number2) {
            this.number1 = number1;
            this.number2 = number2;
            this.operrator = operrator;
        }
        add(number1, number2) { return +number1 + +number2; }
        sub(number1, number2) { return number1 - number2; }
        mult(number1, number2) { return number1 * number2; }
        div(number1, number2) { return number1 / number2; }
        modu(number1, number2) { return number1 % number2; }
    }

    const myCalc = new Calc(number1, operrator, number2);

    switch (operrator) {

        case "+":
            return myCalc.add(number1, number2);
            break;
        case "-":
            return myCalc.sub(number1, number2);
            break;
        case "/":
            return myCalc.div(number1, number2);
            break;
        case "*":
            return myCalc.mult(number1, number2);
            break;
        case "%":
            return myCalc.modu(number1, number2);
            break;

    }


}

function buildCalc() {

    const Display = document.querySelector("#Display");
    const Tasten = document.querySelector("#Tasten");
    const Rest = document.querySelector("#Rest");

    var Displayfeld = document.createElement("div");
    Displayfeld.classList.add("Displayfeld");
    Displayfeld.innerText = "0";
    Display.appendChild(Displayfeld);
    buildButtons(Tasten, Displayfeld);
}
function buildButtons(Tasten, Displayfeld) {
    var iter = 0;
    const CalcButtons = ["CA", "/", "*", "<--",
        "7", "8", "9", "-",
        "4", "5", "6", "+",
        "1", "2", "3", "",
        "%", "0", ".", "="];
    const DisplayOutput = [];
    for (var x = 0; x < 5; x++) {
        var row = document.createElement("div");
        row.classList.add("row");
        for (var y = 0; y < 4; y++) {
            var colum = document.createElement("div");
            colum.classList.add("colum");
            colum.innerText = CalcButtons[iter];
            colum.id = CalcButtons[iter];
            colum.addEventListener("mousedown", function () { Doshit(Displayfeld, this, DisplayOutput) });
            colum.addEventListener("mouseenter", function () {
                this.style.background = "pink";
            });

            colum.addEventListener("mouseleave", function () {
                this.style.background = "black";
            });
            row.appendChild(colum);
            iter++;
        }
        Tasten.appendChild(row);

    }
}


function Doshit(Displayfeld, colum, DisplayOutput) {


    DisplayOutput.push(colum.innerText);
    switch (colum.innerText) {

        case "+":
            Displayfeld.innerText += colum.innerText;
            return;
            break;

        case "-":
            Displayfeld.innerText += colum.innerText;
            return;
            break;

        case "*":
            Displayfeld.innerText += colum.innerText;
            return;
            break;

        case "/":
            Displayfeld.innerText += colum.innerText;
            return;
            break;

        case "=":

            DisplayOutput.pop();
            console.log("Roh Array : " + DisplayOutput);
            DisplayOutput = findPoint(DisplayOutput);
            console.log("Ergebnis: " + DisplayOutput);
            Displayfeld.innerText = DisplayOutput;
            break;

        case "CA":
            DisplayOutput.length = 0;
            Displayfeld.innerText = DisplayOutput;

            Displayfeld.innerText = "0";
            return;
            break;

        case "<--":
            DisplayOutput.pop();
            DisplayOutput.pop();
            Displayfeld.innerText = DisplayOutput.join("");
            return;
            break;

        case "%":
            Displayfeld.innerText += colum.innerText;
            return;
            break;

        default:

            // console.log("Array: " + DisplayOutput);
            //console.log("Länge: " + DisplayOutput.length);
            if (DisplayOutput.length >= 2 &&
                DisplayOutput[DisplayOutput.length - 2] != "+" &&
                DisplayOutput[DisplayOutput.length - 2] != "-" &&
                DisplayOutput[DisplayOutput.length - 2] != "/" &&
                DisplayOutput[DisplayOutput.length - 2] != "*" &&
                DisplayOutput[DisplayOutput.length - 2] != "%") {
                //console.log("Array vor dem pop: " + DisplayOutput);
                num = DisplayOutput.pop();
                //console.log("poped num :" + num);
                //console.log("Array nach dem pop:" + DisplayOutput);
                DisplayOutput[DisplayOutput.length - 1] = DisplayOutput[DisplayOutput.length - 1] + num;
            }
            Displayfeld.innerText += colum.innerText;


            //console.log("Vagina:" + DisplayOutput);

            //console.log("Displayoutput: " + DisplayOutput);
            return;
            break;
    }


    //DisplayOutput.push(colum.innerText)

    //Displayfeld.innerText += colum.innerText;

}

function findPoint(Array) {

    // wir brauchen den formatierten Array das nur ganze zahelen oder die verrechenten Zahlen und die operatoren dirn sind. 

    const operrators = ["/", "*", "%", "+", "-"];

    for (var i = 0; i < operrators.length; i++) {
        while (Array.includes(operrators[i])) {
            //Solange operatoren da sind, werden die nummern verrechnet und durch ihre ergebnisse ersetzt
            // Die Reihenfolge der OLperatoren im operatoren Array garantiert das punkt vor strich gewährleitet is
            var positionOfTheOperator = Array.indexOf(operrators[i]);
            var number1 = Array[positionOfTheOperator - 1];
            var usedOperator = Array[positionOfTheOperator];
            var number2 = Array[positionOfTheOperator + 1];
            var result = getCalculator(number1, usedOperator, number2);
            Array.splice(positionOfTheOperator - 1, 3, result);
        }
    }

    return Array;
}







