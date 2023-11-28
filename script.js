//封面動畫
setTimeout(startGame, 800);
function startGame() {
    document.getElementById('Title1').style.top = '20px';
    document.getElementById('Title1').style.opacity = '1';
    setTimeout(function () {
        document.getElementById('Title1').style.opacity = '0';
        setTimeout(function () {
            document.getElementById('Title2').style.top = '20px';
            document.getElementById('Title2').style.opacity = '1';
            setTimeout(function () {
                document.getElementById('Title2').style.opacity = '0';
                setTimeout(function () {
                    document.getElementById('Title1').style.opacity = '1';
                    document.getElementById('Title2').style.opacity = '1';
                    document.getElementById('ruleButton').style.opacity = '1';
                    document.getElementById('startButton').style.opacity = '1';
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000); 
}

// 開始遊戲
function start() {
    document.getElementById("startPage").style.display = "none";
    document.getElementById("game").style.display = "block";
}

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
