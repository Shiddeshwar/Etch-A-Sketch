function drawGrid(size=16) {
    let container = document.body.getElementsByClassName('container');
    container[0].style.gridTemplateColumns = `repeat(${size},calc(100%/${size}))`;
    container[0].style.gridTemplateRows = `repeat(${size},calc(100%/${size}))`;
    for (let i = 0; i < size*size; i++) {
        let div = document.createElement('div');
        div.className = "item";
        container[0].appendChild(div);
    }
}
function input() {
    let num = +prompt("Enter a size between 1 and 50:");
    return num;
}
function getSize() {
    let num = input();
    if (num > 100 || num === 0|| num===null|| num === undefined){
        alert("Enter valid number between 1 & 100");
        num = input();
    } 
    drawGrid(num);
    changeColor();
}
function changeSize() {
    let button = document.body.getElementsByClassName('button');
    button[0].addEventListener('click',(e)=>{
        e.stopPropagation();
        reset();
        getSize();
    });
}
function changeColor() {
    let divs = document.body.getElementsByClassName('item');
    console.log(divs.length);
    let divsArray = Array.from(divs);
    divsArray.forEach(div => div.addEventListener('mouseover',()=>{
        let color1 = Math.floor(Math.random() * 256);
        let color2 = Math.floor(Math.random() * 256);
        let color3 = Math.floor(Math.random() * 256);
        div.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
    }));
}
function reset() {
    let div = document.body.getElementsByClassName('container');
    removeAllChildNodes(div[0]);
}
function removeAllChildNodes(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
drawGrid();
changeColor();
changeSize();