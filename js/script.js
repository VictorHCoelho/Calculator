const btn0 = document.querySelector("#btn0");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btn7 = document.querySelector("#btn7");
const btn8 = document.querySelector("#btn8");
const btn9 = document.querySelector("#btn9");
const btnSum = document.querySelector("#btnSum");
const btnSub = document.querySelector("#btnSub");
const btnMulti = document.querySelector("#btnMulti");
const btnDiv = document.querySelector("#btnDiv");
const btnEqual = document.querySelector("#btnEqual");
const btnComma = document.querySelector("#btnComma");
const btnC = document.querySelector("#btnC");

const count = document.querySelector("#count");


btn0.addEventListener("click", function(e) {
    count.textContent = count.textContent + '0';
})

btn1.addEventListener("click", function(e) {
    count.textContent = count.textContent + '1';
})

btn2.addEventListener("click", function(e) {
    count.textContent = count.textContent + '2';
})

btn3.addEventListener("click", function(e) {
    count.textContent = count.textContent + '3';
})

btn4.addEventListener("click", function(e) {
    count.textContent = count.textContent + '4';
})

btn5.addEventListener("click", function(e) {
    count.textContent = count.textContent + '5';
})

btn6.addEventListener("click", function(e) {
    count.textContent = count.textContent + '6';
})

btn7.addEventListener("click", function(e) {
    count.textContent = count.textContent + '7';
})

btn8.addEventListener("click", function(e) {
    count.textContent = count.textContent + '8';
})

btn9.addEventListener("click", function(e) {
    count.textContent = count.textContent + '9';
})

btnComma.addEventListener("click", function(e) {
    if (!count.textContent.includes(".")) {
        count.textContent = count.textContent + '.';
    }
    
})

btnC.addEventListener("click", function() {
    count.textContent = "";
    count.textContent = "";
})

btnSum.addEventListener("click", function() {   

    count.textContent = count.textContent + " + ";  
})

btnSub.addEventListener("click", function() {    
    count.textContent = count.textContent + " - ";
})

btnEqual.addEventListener("click", function() {
    countNumber = count.textContent;
    console.log(countNumber);
})