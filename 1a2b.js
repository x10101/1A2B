const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
let [a, b, c, d] = numbers.sort(() => Math.random() - 0.5);
let ans = [a, b, c, d];
let A = 0;
let B = 0;
let gussTime = 0; // 猜的次數

function run(){
    var guss = document.getElementById("coustomInput");
    alert(guss);
}
