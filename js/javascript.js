function LoadCalc() {

    buildCalc();
    var Calc = getCalculator();


}


function getCalculator() {

    class Calc {
        constructor(number1, operrator, number2) {
            this.number1 = number1;
            this.number2 = number2;
            this.operrator = operrator;
        }
        add(number1, number2) { return number1 + number2; }
        sub(number1, number2) { return number1 - number2; }
        mult(number1, number2) { return number1 * number2l }
        div(number1, number2) { return number1 / number2; }
    }

    return Calc;
}

function buildCalc() {

    const Display = document.querySelector("#Display");
    const Tasten = document.querySelector("#Tasten");
    const Rest = document.querySelector("#Rest");

    var Displayfeld = document.createElement("div");
    Displayfeld.classList.add("Displayfeld");
    Displayfeld.innerText = " ";
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
            break;

        case "CA":
            DisplayOutput.length = 0;
            Displayfeld.innerText = DisplayOutput;
            return;
            break;

        case "<--":
            DisplayOutput.pop();
            DisplayOutput.pop();
            Displayfeld.innerText = DisplayOutput.join(""); 
            return;
            break;

        case "%":
            break;

        default:

                Displayfeld.innerText += colum.innerText;


            console.log("Vagina:" + DisplayOutput);

            console.log("Displayoutput: " + DisplayOutput);
            return;
            break;
    }


    //DisplayOutput.push(colum.innerText)

    //Displayfeld.innerText += colum.innerText;

}