let archive = document.getElementById('archive')
let counter = document.getElementById('counter')
let counter2 = document.getElementById('counter2')
let folders = document.getElementById('folders')
let counterValue = 0
let counter2Value = 0

let extraValue = 214 // when you add a pack, add the amount of TP to this variable
// for example right now it is 214 because joopiter's pack has 214 packs, so if you add a pack folder of 74 packs,
// you would add 74 to 214, making it 288

// count the amount of elements in archive div

let getArchiveChildren = () => {
    for (let i = 0; i < archive.children.length; i++) {
        counterValue++
    }

    return (counterValue / 2) + extraValue
}
let getFoldersChildren = () => {
    for (let i = 0; i < folders.children.length; i++) {
        counter2Value++
    }

    return (counter2Value / 2);
}

counter.innerHTML = `Total TP Amount: ${getArchiveChildren() - counter2Value}` // because <br> counts as one element
counter2.innerHTML = `Total TP Pack Amount: ${getFoldersChildren()}` // because <br> counts as one element