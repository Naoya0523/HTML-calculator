let answer = ""

let btn1 = document.getElementById('1');
btn1.onclick = function(){
    answer += '1';
    document.getElementById('ans').innerHTML = answer;
}

let btn_equal = document.getElementById('equal');
btn_equal.onclick = function() {
    ans = eval(answer);
    document.getElementById('ans').innerHTML = ans.toString();
}

let btn_C = document.getElementById('C');
btn_C.onclick = function() {
    answer = ""
    document.getElementById('ans').innerHTML = answer
}