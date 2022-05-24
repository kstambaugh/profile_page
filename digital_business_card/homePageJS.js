let floatWords = document.getElementsByClassName('word-float');
let floatArray = []
for (i = 0; i < floatWords.length; i++) {
    let floatText = floatWords[i].innerText;
    floatArray.push(floatText)
}
console.log(floatArray)