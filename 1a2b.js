const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var [a, b, c, d] = numbers.sort(() => Math.random() - 0.5);
var ans;
var A;
var B;
var gussTime; // 猜的次數
var guess;

// 開始遊戲，重設變數
function play() {
    [a, b, c, d] = numbers.sort(() => Math.random() - 0.5);
    ans = [a, b, c, d];
    A = 0;
    B = 0;
    gussTime = 0; // 猜的次數
    guess = [];
    sendMessage("bot", "1A2B遊戲開始! 請輸入數字!");
}

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

// 送出數值，判斷與顯示結果
function submitValue() {
    if (guess < 4) alert("要輸入四個數字");
    else {
        gussTime++;
        for (i = 0; i < 4; i++) {
            for (j = 0; j < 4; j++) {
                if (ans[i] == guess[j]) {
                    if (i == j) A++;
                    else B++;
                }
            }
        }
        sendMessage("player", guess.join(""));

        if (A != 4) {
            sendMessage("bot", [A,"A",B,"B"].join(""));
            A = 0;
            B = 0;
        }
        else {
            sendMessage("bot", "恭喜答對！共猜了" + gussTime + "次");
            document.getElementById("endMes").style.display = "block";
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    }
}

// 送出bot或player訊息
function sendMessage(type, mes) {
    let Message = document.createElement("div");
    let text = document.createElement("span");
    text.textContent = mes;
    Message.appendChild(text);
    Message.classList.add(type);
    document.getElementById("gameMes").appendChild(Message);
    chatBox.scrollTop = chatBox.scrollHeight;

    deleteValue();
}

// 清空歷史訊息
function clearMes() {
    document.getElementById("gameMes").innerHTML = "";
    document.getElementById("endMes").style.display = "none";
}