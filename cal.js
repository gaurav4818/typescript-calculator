//get the userinput element
var userinput = document.getElementById('userinput');
//function for adding the user input
function add(char) {
    if (userinput.value == null || userinput.value == "0")
        userinput.value = char;
    else if (userinput.value.length < 15) {
        userinput.value += char;
    }
}
//function for +,-,*,/,%
var result = function () {
    var ans = eval(userinput.value);
    userinput.value = ans;
};
//clear screen function
var allclear = function () {
    userinput.value = "0";
};
//delete one char function
var clearchar = function () {
    var ans = userinput.value;
    if (ans.length == 1) {
        userinput.value = "0";
    }
    else {
        userinput.value = ans.slice(0, -1);
    }
};
//square function
var square = function () {
    var ans = userinput.value;
    userinput.value = ans * ans;
};
//square root function
var sqrt = function () {
    var ans = userinput.value;
    userinput.value = Math.sqrt(ans);
};
//10^x function
var ten = function () {
    var ans = userinput.value;
    userinput.value = Math.pow(10, ans);
};
//log function
var log = function () {
    var ans = userinput.value;
    userinput.value = Math.log10(ans);
};
//ln function
var ln = function () {
    var ans = userinput.value;
    userinput.value = Math.log(ans);
};
//1/x function
var invdiv = function () {
    var ans = userinput.value;
    userinput.value = 1 / ans;
};
//factorial function
var fact = function () {
    var ans = userinput.value;
    var factvalue = 1;
    for (var i = 1; i <= ans; i++) {
        factvalue *= i;
    }
    userinput.value = factvalue;
};
//Absolute function
var abs = function () {
    var ans = userinput.value;
    userinput.value = Math.abs(ans);
};
//Exp function
var exp = function () {
    var ans = userinput.value;
    userinput.value = Math.pow(Math.E, ans);
};
//value of pie
var pie = function () {
    userinput.value = Math.PI;
};
//e function
var e = function () {
    userinput.value = Math.E;
};
//+,- function
var plusmin = function () {
    if (userinput.value.substring(0, 1) == "-")
        userinput.value = userinput.value.substring(1, userinput.value.length);
    else
        userinput.value = "-" + userinput.value;
};
var m = 0;
//ms function
var ms = function () {
    var ans = userinput.value;
    m = eval(ans);
    userinput.value = m;
};
//mc function
var mc = function () {
    m = "0";
    userinput.value = m;
};
//mr function
var mr = function () {
    var ans = userinput.value;
    ans = m;
    userinput.value = ans;
};
//m+ function
var mplus = function () {
    var ans = userinput.value;
    m += eval(ans);
    userinput.value = m;
};
//m- function
var mminus = function () {
    var ans = userinput.value;
    m -= eval(ans);
    userinput.value = m;
};
//sin function
var sin = function () {
    var ans = userinput.value;
    userinput.value = Math.sin(ans * (Math.PI / 180));
};
//cos function
var cos = function () {
    var ans = userinput.value;
    userinput.value = Math.cos(ans * (Math.PI / 180));
};
//tan function
var tan = function () {
    var ans = userinput.value;
    userinput.value = Math.tan(ans * (Math.PI / 180));
};
