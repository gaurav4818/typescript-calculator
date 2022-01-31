//get the userinput element
let userinput:any = <HTMLInputElement>document.getElementById('userinput');

//function for adding the user input
function add(char) {
    if (userinput.value == null || userinput.value == "0")
        userinput.value = char
    else if (userinput.value.length < 15) {
        userinput.value += char
    }

}

//function for +,-,*,/,%
let result = ():void=> {
    var ans = eval(userinput.value);
    userinput.value = ans;
};

//clear screen function
let allclear = ():void => {
    userinput.value= "0";
};

//delete one char function
let clearchar = ():void=> {
    var ans = userinput.value;
    if (ans.length == 1) {
        userinput.value = "0";
    }
    else {
        userinput.value = ans.slice(0, -1);
    }
};

//square function
let square = ():void=> {
    var ans = userinput.value;
    userinput.value = ans * ans;
};

//square root function
let sqrt = ():void=> {
    var ans = userinput.value;
    userinput.value = Math.sqrt(ans);
};

//10^x function
let ten = ():void=> {
    var ans = userinput.value;
    userinput.value = Math.pow(10, ans);
};

//log function
let log = ():void=> {
    var ans = userinput.value;
    userinput.value = Math.log10(ans);
};

//ln function
let ln = ():void=> {
    var ans = userinput.value;
    userinput.value = Math.log(ans);
};

//1/x function
let invdiv = ():void=> {
    var ans = userinput.value;
    userinput.value = 1 / ans;
};

//factorial function
let fact = ():void=> {
    var ans = userinput.value;
    var factvalue = 1;
    for (var i = 1; i <= ans; i++) {
        factvalue *= i;
    }
    userinput.value = factvalue;
};

//Absolute function
let abs = ():void=> {
    var ans = userinput.value;
    userinput.value = Math.abs(ans);
};

//Exp function
let exp = ():void=> {
    var ans = userinput.value;
    userinput.value = Math.pow(Math.E, ans);
};

//value of pie
let pie = ():void=> {
    userinput.value = Math.PI;
};

//e function
let e = ():void=> {
    userinput.value = Math.E;
}

//+,- function
let plusmin = ():void=> {
    if (userinput.value.substring(0, 1) == "-")
        userinput.value = userinput.value.substring(1, userinput.value.length)
    else
        userinput.value = "-" + userinput.value
};

var m:any=0;

//ms function
let ms=():void =>{
     var ans=userinput.value;
     m=eval(ans);
     userinput.value=m;
}

//mc function
let mc=():void =>{
    m="0";
    userinput.value=m;
}

//mr function
let mr=():void =>{
    var ans=userinput.value;
    ans=m;
    userinput.value=ans;
}

//m+ function
let mplus=():void =>{
    var ans=userinput.value;
    m+=eval(ans);
    userinput.value=m;
}

//m- function
let mminus=():void =>{
    var ans=userinput.value;
    m-=eval(ans);
    userinput.value=m;
}

//sin function
let sin=():void =>{
    var ans=userinput.value;
    userinput.value=Math.sin(ans * (Math.PI / 180));
}

//cos function
let cos=():void =>{
    var ans=userinput.value;
    userinput.value=Math.cos(ans * (Math.PI / 180));
}

//tan function
let tan=():void =>{
    var ans=userinput.value;
    userinput.value=Math.tan(ans * (Math.PI / 180));
}

