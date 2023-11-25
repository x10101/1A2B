const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

//function play() {
    var [a, b, c, d] = numbers.sort(() => Math.random() - 0.5);
    var ans = [a, b, c, d];
    var A = 0;
    var B = 0;
    var gussTime = 0; // 猜的次數
    var guess = [];

    // 將使用者按的數字按鈕加入變數
    function inputNumber(num) {
        if (guess.length >= 4) {
            alert("一次只能輸入四個數字！");
        }
        else {
            guess.push(num);
            showNumber();
        }
    }

    // 更新輸入框中的數值
    function showNumber() {
        let n = guess.join("");
        document.getElementById("customInput").textContent = n;
    }

    // 刪除輸入的數值
    function deleteValue() {
        guess = [];
        showNumber();
    }

    function submitValue() {
        if (guess < 4) alert("要輸入四個數字");
        else {
            var userMessage = document.createElement("div");
            userMessage.textContent = guess.join("");
            userMessage.classList.add("player");
            document.getElementById("dialogue").appendChild(userMessage);
            for (i = 0; i < 4; i++) {
                for (j = 0; j < 4; j++) {
                    if (ans[i] == guess[j]) {
                        if (i == j) A++;
                        else B++;
                    }
                }
            }

            if (A != 4) {
                var botMessage = document.createElement("div");
                botMessage.textContent = [A,"A",B,"B"].join("");
                botMessage.classList.add("bot");
                document.getElementById("dialogue").appendChild(botMessage);
                A = 0;
                B = 0;
                deleteValue();
            }
            else {
                
            }
        }
    }
//}