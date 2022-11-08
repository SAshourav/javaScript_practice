                          //13.2 Array

var age = 12;
var friendAge = [12, 13, 14, 15];
console.log(friendAge);
console.log(friendAge[0]);
friendAge.push(20); //last e element add
console.log(friendAge);
friendAge.pop(); //last element deletes
console.log(friendAge);
friendAge.shift(); //first element deletes
console.log(friendAge);
friendAge.unshift(50);
console.log(friendAge); // first e element add kore 
var slice_part = friendAge.slice(2);
console.log(slice_part);
var slice_part2 = friendAge.slice(1,3);
console.log(slice_part2);


                          // while loop 13.5

var num = 0;
while (num < 15){
    num++;
    console.log(num);
}
console.log('\n\n\n');
                          // for loop 13.5

num = 15;
for(var i=5; i<num; i++){
    console.log(i);
}

var nums = [55,65,77,45,32,45];
for(i=0; i<nums.length; i++){
    console.log("nums["+i+"]"+" is "+ nums[i])
}

                        // 13.8 Function

function sayFuckYou(){
    console.log("Tumi manush bhalo na");
    console.log("Fuck You!!!!");
}

sayFuckYou();

                        //13.9

function DoubleIt(num){
    var result = num*2;
    console.log(result);
}
function ReturnTripple(num){
    var result = num*3;
    return result;
}
function add(num1,num2){
    var result = num1+num2;
    return result;
}
DoubleIt(5);
DoubleIt(10);
console.log(ReturnTripple(5));
console.log(add(30,15));


                                // 13.11 Object,key value pair

//creating object
var student1 = { id:2013303, name:"Sabbir Ahmed", pNUmber:013031406 }
var student2 = { id:2015503, name:"Kawsar Ahmed", pNUmber:011406 }

//ways of accesing object data
console.log(student1, student2);
console.log(student1.pNUmber);

var phone_number = student1["pNUmber"];
console.log(phone_number);

var property_name = "id";
console.log(student1[property_name]);

student2.pNUmber = 302;  //updating value of a object
console.log(student2.pNUmber);

//property add

student1.cinema = "agni";
console.log(student1);