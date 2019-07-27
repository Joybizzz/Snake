function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}
let rand = getRandomInt(0, 399);
console.log(rand);
var arr = [];

function createMatrix() {
    var matrix = document.getElementById('matrix');
    let n = 20 * 20;
    for (let i = 0; i < n; i++){
        var div = document.createElement('div');
        div.className = 'cell';
        matrix.appendChild(div);
        arr.push(div);
    }
}
function getCell(row, col) {

}

function colorCell(row, col, val) {
    
}

window.onload = function(){
    createMatrix();

    arr[rand].style.background = 'red';

    function keyboardClick(e) {
        if (e.keyCode === 39){ //right
            debugger;
            arr[rand].style.background = "white";
            arr[rand + 1].style.background = 'red';
            arr[rand] = arr[rand+1]
            return;
        }
        else if (e.keyCode === 37){ //left
            arr[rand].style.background = "white";
            arr[rand - 1].style.background = 'red';
            arr[rand] = arr[rand - 1]
            return;
        }
        else if (e.keyCode === 38){ //up
            arr[rand].style.background = "white";
            arr[rand - 20].style.background = 'red';
            arr[rand] = arr[rand - 20]
            return;
        }
        else if (e.keyCode === 40){ //down
            arr[rand].style.background = "white";
            arr[rand + 20].style.background = 'red';
            arr[rand] = arr[rand + 20]
            return;
        }

    }
    addEventListener('keydown', keyboardClick);
}