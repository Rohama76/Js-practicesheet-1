//Task 1:identify which of the following variable names are legal and which are illegal.
//var myVariable=number//
//legal
//var -special=number//
//illegal
//var 123variable=number//
//illegal
//var firstname=number//
//legal
//var 7eleven=number
//illegal
//var $price=number//
//legal
//var your_variable=number//
//illegal
//task2//
//Assignent Operater//
var total=10;
total+=5;
total-=3;
total*=2;
console.log(total);//answer=24
//Task3//
//promptand variable//
var number1=prompt("enter first number");
var number2=prompt("enter second number");
var sum= number1 + number2;
console.log('The sum of ' + number1 + ' and ' + number2 + ' is: ' + sum);
//task 4//
//string concatenation//
var title="In a different voice";
var author="Gillian carol";
var year=1982;
console.log('The book ' + title + ' by ' + author + ' was published in ' + year);
//Task5//
//Checking even and odd//
let number=prompt("enter number");
if (number%2===0){
    alert(number+" an even number")
}
else{
    alert(number+" an odd number")
}
//task 6//
//grade calculation//
var score=prompt("enter your exams score(out of 150)");
if(score>=90){
    alert("you got a A")
}
else if(score>=80){
    alert("you got a B")
}
else if(score>=70){
    alert("you got a C")
}
else if(score>=60){
    alert("you got a D")
}
else{
    alert("Fail")
}
//task7//
//maximum of three number//
let home=prompt("enter first number")
let house=prompt("enter second number")
let horse=prompt("enter third number")
let hum=Math.max("home,house,horse");
 alert(`The maximum of ${home}, ${house}, and ${horse} is ${hum}.`);

 //task 8 : odd or even sum
 let min = 0;
for (let i = 1; i <= 100; i++) {
   if (i % 2 === 0) {
    min += i++;   }}
console.log(" The sum of all even numbers from 1 to 100 is " + sum );
//task 9 :output
 var a=5 ; b=3 ; c=7 ;
 result=a++ - ++c + b + ++c - b++;
 console.log(a); //6
 console.log(b); //4
 console.log(c); //9
console.log(result); //6
 var a=1 ; b=2 ; c=0 ;
 result=++a - --a+ ++c + c - a++ + --b;
 console.log(a); //2
 console.log(b); //1
 console.log(c); //1
 console.log(result); //3
 var a=2 ; b= 4; c=6;
 result=a++ - --b + c-- + b++ - ++c;
 console.log(a); //3
 console.log(b); //4
 console.log(c); //6
 console.log(result); //2
 var a= 10; b= 5; c=8;
 result=++a + --b - c++ - ++c + b--;
 console.log(a); //11
 console.log(b); //3
 console.log(c); //10
 console.log(result); //1
 var a= 3; b=2 ; c=1;
 result=b-- - --a + ++c - a++ + ++b - a;
 console.log(a); //3
 console.log(b); //2
 console.log(c); //2
 console.log(result); //-1
 var a= 1; b=5 ; c=3;
 result=++c + a-- - b++ + c-- - --a;
 console.log(a); //-1
 console.log(b); //6
 console.log(c); //3
 console.log(result); //5
 var a= 7; b=0 ; c=1;
 result=++c - a-- + --b + b++ - --c + c;
 console.log(a); //6
 console.log(b); //0
 console.log(c); //1
 console.log(result); //-7
 var a= 3; b= 4; c=9;
 result=--a + ++b + c-- - b++ + ++c - --c - --b;
 console.log(a); //2
 console.log(b); //5
 console.log(c); //8
 console.log(result); //7
 var a= 6; b=1 ; c=3;
 result=c++ - b + a-- - --c + b;
 console.log(a); //5
 console.log(b); //1
 console.log(c); //3
 console.log(result); //6
 var a= 10; b= 5; c=8;
 result=a + --b - c - ++c + b-- + a++;
 console.log(a); //11
 console.log(b); //3
 console.log(c); //9
 console.log(result); //11
// task 10: output ?
 console.log(undefined && false);  //output undefined
 console.log(true && false);  //output false
 console.log(true && undefined);  //output undefined
 console.log(undefined || undefined);  //output undefined
 console.log('undefined' || 'true');  //output undefined
 console.log(null || 'true');  //output true
 console.log(null || undefined);  //output undefined
 console.log(null && true || false );  //output false
 console.log(null && true || false && true);  //output false
 console.log(null && true || false && true);  //output false
 console.log((null && true) || (false && 1));  //output false;