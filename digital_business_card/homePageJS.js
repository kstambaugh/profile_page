
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
    let myFloat = floatArray[i];
    // myFloat.classList.replace()
    myFloat.wordFloat = 'myfloat'
    console.log(myFloat)
}

let root = document.documentElement;

root.addEventListener('load'){
    root.style.setProperty('--screen-x',)
}

