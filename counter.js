let archive = document.getElementById('archive')
let counter = document.getElementById('counter')
let counterValue = 0
// count the amount of elements in archive div
for (let i = 0; i < archive.children.length; i++) {
    counterValue++
    }
counter.innerHTML = `Total TP Amount: ${counterValue / 2}` // because <br> counts as one element