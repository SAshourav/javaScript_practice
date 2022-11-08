                                    //14.2

var inch = 156;
var feet = inch /12;
console .log(feet);

function inches(inches){
    var feet = inches/12;
    return feet;
}
console.log(inches(20));

                                    //14.3

const county = "Bangladesh"; //this one can't be changed
var name ='Jave';
if(name.length > 5){
    name = 'Omi Hasan';
}
console .log(name);
let sheikh = true;  //changeable
//if(sheikh){
    //county = "Mujib";  //this will give a error message
//}
console.log(county); 

                                //14.7 Recursive function

// Factorial function
function factorial(num){
    var fact;
    if(num == 0){
        return 1;
    }else{
        return num*factorial(num-1);
    }

}

var result = factorial(10);
console.log(result);

//Fibonacci function

function fibonacci(num){
    if(num == 0){
        return 0;
    }
    if(num == 1){
        return 1;
    }
    else{
        var re = fibonacci(num-1)+fibonacci(num-2);
    }
}

console.log(fibonacci(10));