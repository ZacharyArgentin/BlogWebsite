// Declaring Variables

var name = "Zach";
var letter = "a";
var number = 5.25;

var x, y, z;
x = 2;
y = 5;
z = 10;

// Operators on Numbers

10 + 5;
10 - 5;
10 * 5;
10 / 5;
10 ** 2;
x++;
x--;

// String Operators

var firstName = "Zachary"
var lastName = "Argentin"
var fullName = firstName + lastName

// Excercise 1

var time;
var greeting;

if (time < 12) {
    greeting = "Good Morning!";
} else if (time < 19) {
    greeting = "Good Afternoon!";
} else {
    greeting = "Good Evening!";
}

// Excercise 2
var speed;
var result;
var isBirthday;

if (isBirthday) {
    speed = speed - 5;
}

if (speed <= 60) {
    result = 0;
} else if (speed <= 80) {
    result = 1;
} else {
    result = 2;
}

// For Loop 

for (i = 0; i < 10; i++) {
    alert("number is: " + i);
}

// While Loop
i = 0;
while (i < 10) {
    alert("number is: " + i);
    i++;
}

// Excercise

for (i = 2; i <= 100; i = i + 2) {
    alert(i);
}

i = 2;
while (i <= 100) {
    alert(i);
    i += 2;
}

// Arrays

var cities = ["Paris","Vancouver","London","Berlin","Cairo","Seattle"]

cities[2];
cities[5];
cities.length();

// Looping throught the array

for (i = 0; i < cities.length(); i++) {
    dialog("Current City: " + cities[i]);
}

// Functions

function addNums(a,b) {
    sum = a + b
    return sum
}

var sum = addNums(5,6);
print(sum);