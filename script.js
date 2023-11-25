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
