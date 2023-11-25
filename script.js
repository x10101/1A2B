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
    for(var i = 1; i < 10; i++){
        var button_visible = document.getElementById("button" + i);
        if(button_visible.style.visibility === "hidden"){
            button_visible.style.visibility = "visible";
        }
    }
}
