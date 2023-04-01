let answer = "";

//number 0~9//////////////////////////////////////////////////////
let btn0 = document.getElementById('0');
btn0.onclick = function() {
    answer += '0';
    document.getElementById('ans').innerHTML = answer;
};

let btn1 = document.getElementById('1');
btn1.onclick = function(){
    answer += '1';
    document.getElementById('ans').innerHTML = answer;
};

let btn2 = document.getElementById('2');
btn2.onclick = function() {
    answer += '2';
    document.getElementById('ans').innerHTML = answer;
};

let btn3 = document.getElementById('3');
btn3.onclick = function() {
    answer += '3';
    document.getElementById('ans').innerHTML = answer;
};

let btn4 = document.getElementById('4');
btn4.onclick = function() {
    answer += '4';
    document.getElementById('ans').innerHTML = answer;
};

let btn5 = document.getElementById('5');
btn5.onclick = function() {
    answer += '5';
    document.getElementById('ans').innerHTML = answer;
};

let btn6 = document.getElementById('6');
btn6.onclick = function() {
    answer += '6';
    document.getElementById('ans').innerHTML = answer;
};

let btn7 = document.getElementById('7');
btn7.onclick = function() {
    answer += '7';
    document.getElementById('ans').innerHTML = answer;
};

let btn8 = document.getElementById('8');
btn8.onclick = function() {
    answer += '8';
    document.getElementById('ans').innerHTML = answer;
};

let btn9 = document.getElementById('9');
btn9.onclick = function() {
    answer += '9';
    document.getElementById('ans').innerHTML = answer
};
///////////////////////////////////////////////////////////////////////////

//symbol///////////////////////////////////////////////////////////////////
let btn_equal = document.getElementById('equal');
btn_equal.onclick = function() {
    ans = answer.replace('x', '*').replace('%', '*0.01').replace('÷', '/');
    answer = eval(ans).toString();
    document.getElementById('ans').innerHTML = answer;
};

let btn_C = document.getElementById('C');
btn_C.onclick = function() {
    answer = ""
    document.getElementById('ans').innerHTML = answer
};

let btn_multiple = document.getElementById('multiple');
btn_multiple.onclick = function() {
    answer += 'x';
    document.getElementById('ans').innerHTML = answer;
};

let btn_subtract = document.getElementById('subtract');
btn_subtract.onclick = function() {
    answer += '-';
    document.getElementById('ans').innerHTML = answer;
};

let btn_plus = document.getElementById('plus');
btn_plus.onclick = function() {
    answer += '+';
    document.getElementById('ans').innerHTML = answer;
};

let btn_div = document.getElementById('division');
btn_div.onclick = function() {
    answer += '÷';
    document.getElementById('ans').innerHTML = answer;
};

let btn_percent = document.getElementById('percent');
btn_percent.onclick = function() {
    answer += '%';
    document.getElementById('ans').innerHTML = answer;
};

let btn_DEL = document.getElementById('DEL');
btn_DEL.onclick = function() {
    answer = answer.slice(0, -1);
    document.getElementById('ans').innerHTML = answer;
};

let btn_dot = document.getElementById('dot');
btn_dot.onclick = function() {
    answer += '.';
    document.getElementById('ans').innerHTML = answer;
};
///////////////////////////////////////////////////////////////////////////