const button = document.getElementById('button');
const firstNumber = document.getElementById('firstNumber');
const secondNumber = document.getElementById('secondNumber');
const rowsNumber = document.getElementById('rowsNumber');
const numberList = document.getElementById('numberList');
const phiList = document.getElementById('fiDiv');

const goldString = [];




function calculate() {
    numberList.innerHTML = "<span>n<sub>x</sub></span><br>"+"1 => "+firstNumber.value+"<br>2 => "+secondNumber.value+"<br>";
    phiList.innerHTML = "<span>Φ = n<sub>x</sub>&#xf7 n<sub>x-1</sub></span><br>"+"1 => brak"+"<br>";
    goldString.push(firstNumber.value, secondNumber.value);
    for (i=2; (i-1)<rowsNumber.value; i++) {
        var goldStringLast = goldString.length-1;
        var goldStringPreLast = goldString.length-2;
        var goldStringLastElement = goldString[goldStringLast];
        var goldStringPreLastElement = goldString[goldStringPreLast];
        var suma = parseFloat(goldStringLastElement) + parseFloat(goldStringPreLastElement);
        goldString.push(suma);


        numberList.innerHTML += i + " => "+ suma + "<br>";
        phiList.innerHTML += i + " => "+(goldString[goldStringLast]/goldString[goldStringPreLast])+ "<br>";
    }


}

button.addEventListener('click', calculate);

