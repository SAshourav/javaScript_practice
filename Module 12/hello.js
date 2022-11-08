                        //variable and variable type

var BananaPrice = 12;
console.log(typeof BananaPrice);
var seenAfter = 21;
console.log(typeof seenAfter);

var name = "Sabbir Ahmed";
console.log(typeof name);

var isHot = true;
var isRich = false;

console.log(typeof isHot);

                //12.4 Variable Naming and best practices

var first_name = 'Sabbir';
var last_name = 'Ahmed';
var result = first_name + ' ' + last_name;
console.log(result);

                //12.5 String and sring elements

var promise = "I promise i will imorove my coding skill and english language skill"
console.log(promise.toLowerCase());
console.log(promise.toUpperCase());
console.log(promise.indexOf('will'));
console.log(promise.indexOf('hard')); //hard na thakate -1 asbe

console.log(promise.split(' ')); //jekhane jekhane space bhabe sekhane setake benge array elements banay dibe

                        //12.6 typer Conversion

var number1 = 25;
var number2 = 15.5;
console.log(number1+number2);
var number1 = '25';
var number2 = 15.5;
console.log(number1+number2); //prothome string ar pore number thakle total ta string er moto behave korbe

var number1 = '25';
number1 = +number1; //samne shudhu plus dileo eta string theke number hisabe convert hoye jabe
var number2 = '15.5';
number2 = parseFloat(number2); //converting string to float number
console.log(number1+number2);

var number1 = 25;
number1 = ''+number1; //convert number to string
console.log(typeof number1);

var num1 = 0.2;
var num2 = 0.3;
var total = num1/num2;
console.log(total);
total = total.toFixed(3); //point er pore 3 ghor porjonto dekhabe
console.log(total);

                //12.7 Mathmatical Operation in JavaScript

var price1 = 25;
var price2 = 35;
var total = price1 + price2;
console.log(total);
var sub = price2 - price1;
console.log(sub);

var multi = price1* price2;
console.log(multi);

var devide = price2/price1;
console.log(devide);

var modulus = price2%price1;
console.log(modulus);

price1++; //incrementing
price2--;  //discriminating

console.log(price1+' and '+price2);

                        //12.8 Math absolute and etc

var num3 = -5;
var absoluteNumber = Math.abs(num3);
console.log(absoluteNumber);

var num4 = 6.453;
var num5 = 6.645;
var ceeling = Math.ceil(num4);
var flooring = Math.floor(num4);
var roundNum1 = Math.round(num4);
var roundNum2 = Math.round(num5);
console.log(roundNum1);
console.log(roundNum2);
console.log(ceeling);
console.log(flooring);
var random = Math.random()*100;
console.log(Math.round(random));

                            //12.9 and 12.10 If-else & else if

var nuddleavailable = true;

if(nuddleavailable){
 console.log("eat the nuddle and enjoy!");

}else{
    console.log("Kosto");
}
var biscuit = 22;
if(biscuit <10){
    console.log("Eat biscuit");
}else{
    console.log("Khali cha is better");
}
if(biscuit =! 23){
    console.log("Dhuklam");
}else{
    console.log("Micha kotha koichen");
}
biscuit = 22;
if(biscuit < 10){
    console.log("KOm dami bhalo mal");
}else if(biscuit == 22){
    console.log("Tao bhalo 22 taka");
}else{
    console.log("Saddher baire");
}

                            // Date and timezone & module summary

var date = new Date('12-16-1971');
console.log(date);