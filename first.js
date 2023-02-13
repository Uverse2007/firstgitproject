const x = 12 + 5
console.log(x)
document.write(x)

// var first = prompt("Enter the first number");
// var second = prompt("Enter the second number");
// var sum = Number(first) + Number(second);
// alert("Your sum is : " + sum);


// var first = prompt("Enter the first number");
// var second = prompt("Enter the second number");
// var sub = Number(first) - Number(second);
// alert("your subtract Number is: " + sub)
// var multi = prompt("Enter the number for multiply");
// var mltply = Number(sub) * Number(multi);
// alert("your multification number is " + mltply);
// var dvd = prompt("Enter the number for devident");
// var dvdd = Number(mltply) / Number(dvd);
// alert("your devident number is " + dvdd);

var name = "Billy";
var name = "Susy";

if (name === "Billy") {
    console.log("Hi Billy");
} else {
    console.log("You are not Billy. You are Susy")
}

if (name === "Billy" || name === "Susy") {
    console.log("Hi " + name)
}

var fname = "Sam";
var lname = "Smith";

if (fname === "Sam" && lname === "Smith") {
    console.log("Hi " + fname + " " + lname)
}

if (!(fname === "Bob")) // fname !=="Bob" other way to write the code
{
    console.log("Hi I'm not Bob");
} else {
    console.log("My fname is Sam");
}

// var age = prompt("Enter your age");
// if (Number(age) < 18) {
//     alert("Sorry, you are too young to drive this car. Powering off");
// } else if (Number(age) === 18) {
//     alert("Congratulations on your first year of driving. Enjoy the ride!");
// } else if (Number(age) > 18) {
//     alert("Powring On. Enjoy the ride!");
// }
//----------------------------------------------------------------------

function checkDriverAge() {
	var age = prompt("What is your age?");
	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}



//How to write funtions 2 ways to write-----------------------------------------
function sayHello() {
    console.log("Hello World");
}
sayHello();

// other way to write function using variable ananymous function
var bye = function () {
    console.log("bye for now");
}
bye();
//------------------------------------------------------------------------
function sing1() {
    console.log("Ladee lala");
    console.log("Ahhhhhhhh")
}
sing1()

function sing2() {
    console.log("Ladee lala");
    console.log("Ahhhhhhhh")
}
sing2()

// easy way to do it ---------------------------------------------------
function sing(song) {
    console.log(song);
}
sing("damamamdam");
sing("amamamama");

//---------------------------------------------------------------------

function multiply(a, b) {
    console.log(a, b);
    a * b;
}
multiply(10, 15);

//---------to get the value need (return)-----------------------------
function multiplyy(a, b) {
    return a * b;
}
multiplyy(6, 6);
console.log(multiplyy(10, 5)); //to display in console

//-----------------------------------------------------------------------

function multiplyyy(aa, bb) {
    if (aa > 10 || bb > 10) {
        return "that is too hard";
    } else {
        return "Value is " + aa * bb;
    }
}
console.log(multiplyyy(10, 6));

//--------assign variable to function--------------------------------------------------
var mtl = function (aa, bb) {
    if (aa > 10 || bb > 10) {
        return "that is too hard";
    } else {
        return "Value is " + aa * bb;
    }
}
console.log(mtl(10, 15));

//------------------------------------------------------------------
function mlt(c, d) {
    return c * d;
}
alert(mlt(5, 5));



























