
let screenHigh = window.innerHeight
let screenWide = window.innerWidth

let xPosition = Math.floor(Math.random() * screenWide);
let yPosition = Math.floor(Math.random() * screenHigh);

let backgroundWord = document.getElementById('background-words');


let floatWords = document.getElementsByClassName('word-float');
let floatArray = []

for (i = 0; i < floatWords.length; i++) {
    let floatText = floatWords[i];
    floatArray.push(floatText)
}

for (i = 0; i < floatArray.length; i++) {

}


console.log(xPosition, yPosition)
