const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

function play() {
    var [a, b, c, d] = numbers.sort(() => Math.random() - 0.5);
    var ans = [a, b, c, d];
    var A = 0;
    var B = 0;
    var gussTime = 0; // 猜的次數
    var guess = [];

    // 將使用者按的數字按鈕加入變數
    function inputNumber(num) {
        guess.push(num);
        showNumber();
    }

    // 更新輸入框中的數值
    function showNumber() {
        document.getElementById("customInput").value = guess.join("");
    }

    // 刪除輸入的數值
    function deleteValue() {
        guess = [];
        showNumber();
    }

    function submitValue() {
        
    }
}