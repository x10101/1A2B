//封面動畫
setTimeout(startPage, 50);
function startPage() {
    setTimeout(function () {
        document.getElementById('gameName').style.top = '20px';
        document.getElementById('gameName').style.opacity = '1';
        setTimeout(function () {
            document.getElementById('gameName').style.opacity = '0';
            setTimeout(function () {
                document.getElementById('gameName').style.opacity = '1';
                document.getElementById('ruleButton').style.opacity = '1';
                document.getElementById('rule').style.opacity = '1';
                document.getElementById('startButton').style.opacity = '1';
            }, 1000);
        }, 1000);
    }, 1000);
}

//出現規則
function showRule() {
    document.getElementById("rule").style.display = "flex";
}

function closeRule() {
    document.getElementById("rule").style.display = "none";
}

// 開始遊戲
function start() {
    document.getElementById("startPage").style.display = "none";
    document.getElementById("game").style.display = "block";
}

//根據瀏覽器窗口調整chatbox高度
window.onload = function() {
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var otherElementHeight;
    if (viewportWidth < 660) {
        // 在小屏幕上的计算
        otherElementHeight = 480;
    } else {
        // 在中等屏幕、大屏幕上的计算
        otherElementHeight = 230;
    }
    var chatBox = document.getElementById('chatBox');
    chatBox.style.height = 'calc(100vh - ' + otherElementHeight + 'px)';
};

// 結束遊戲
function end() {
    document.getElementById("startPage").style.display = "block";
    document.getElementById("game").style.display = "none";
}

/*按鈕隱藏*/
n = 0;
function button_hide(num){
    if (n < 4) {
        var Button = document.getElementById("button" + num);
        Button.style.visibility = "hidden";
        n++;
    }
}

/*恢復按鈕*/
function button_recover(){
    n = 0;

    for(var i = 1; i < 10; i++){
        var button_visible = document.getElementById("button" + i);
        if(button_visible.style.visibility === "hidden"){
            button_visible.style.visibility = "visible";
        }
    }
}

