/*按鈕隱藏 （改成陣列）*/
n = 0;
function button_hide(){
    if (n < 4) {
        var Button = document.getElementById("button");
        Button.style.visibility = "hidden";
        n++;
    }
}
function button_hide1(){
    if (n < 4) {
        var Button1 = document.getElementById("button1");
        Button1.style.visibility = "hidden";
        n++;
    }
}
function button_hide2(){
    var Button2 = document.getElementById("button2");
    Button2.style.visibility = "hidden";
}
function button_hide3(){
    var Button3 = document.getElementById("button3");
    Button3.style.visibility = "hidden";
}
function button_hide4(){
    var Button4 = document.getElementById("button4");
    Button4.style.visibility = "hidden";
}
function button_hide5(){
    var Button5 = document.getElementById("button5");
    Button5.style.visibility = "hidden";
}
function button_hide6(){
    var Button6 = document.getElementById("button6");
    Button6.style.visibility = "hidden";
}
function button_hide7(){
    var Button7 = document.getElementById("button7");
    Button7.style.visibility = "hidden";
}
function button_hide8(){
    var Button8 = document.getElementById("button8");
    Button8.style.visibility = "hidden";
}
function button_hide9(){
    var Button9 = document.getElementById("button9");
    Button9.style.visibility = "hidden";
}
/*恢復按鈕*/
function button_recover(){
    var button_visible = document.getElementById("button1");
    if(button_visible.style.visibility === "hidden"){
        button_visible.style.visibility = "visible";
    }
}
