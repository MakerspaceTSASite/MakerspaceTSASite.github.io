'esversion: 11';
function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + parseInt(min);
}
function randomFloat(min, max){
    return (Math.random() * (max - min + 1)) + parseFloat(min);
}
function averageOf(data,data2) {
    let total = 0;
    let avg = 0;
        if(data.constructor === Array) {
            inputarray = data;
        console.log('Calculating the average of ' + inputarray.length + ' numbers from the array.');
        for (var k = 0; k < inputarray.length; k++) {
            total = total + inputarray[k];
            avg = total / inputarray.length;
        }
        return avg;
    } else if(typeof data === "number" && typeof data2 === "number") {
        added = data + data2;
        avg = added / 2;
        return avg;
    }
}

$('img').mousedown(function (e) {
  if(e.button == 2) { // right click
    return false; // do nothing!
  }
});