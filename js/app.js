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
const getCell = bool => {
    bool = colorCell();
    if(bool === false){
    arr[rand].style.background = 'red';
    }
    else{
        arr[rand].style.background = "white";
    }
};

function colorCell(val) {
    if (arr[rand].style.background === 'red'){
        return true;
    }
    else{
        return false;
    }
}

window.onload = function(){
    createMatrix();

    arr[rand].style.background = 'red';

    function keyboardClick(e) {
        if (e.keyCode === 39){ //right
            getCell();
            if((rand + 1) % 20 === 0){
                rand -= 19;
                getCell();
                return;
            }
            rand++;
            getCell();
            // colorCell;
            return;
        }
        else if (e.keyCode === 37){ //left
            getCell();
            if(rand % 20 === 0){
                rand += 19;
                getCell();
                return;
            }
            rand--;
            getCell();
            // colorCell;
            return;
        }
        else if (e.keyCode === 38){ //up
            getCell();
            if(rand >=0 && rand < 20){
                rand += 380;
                getCell();
                return;
            }
            rand -= 20;
            getCell();
            // colorCell;
            return;
        }
        else if (e.keyCode === 40){ //down
            getCell();
            if(rand >= 380 && rand <= 399){
                rand -= 380;
                getCell();
                return;
            }
            rand += 20;
            getCell();
            // colorCell;
            return;
        }
    }

    addEventListener('keydown', keyboardClick);

}