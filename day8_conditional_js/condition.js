console.log("Ruqayya Mustafa")
console.log("==== Example 1: if statement ====")
let day = true;

if (day){
    console.log("Good morning!")
}

console.log("==== Example 2: if-else statement ==== ")
let n1 = 8, n2 = 10

if(n1===n2){
    console.log("They are equal")
}
else{
    console.log("They are different")
}

console.log("==== Example 3: multiway condition statement ==== ")
// check if a number is positive, negative, or zero
let number = 0
if(number>0){
    console.log(`Number ${number} is positive`)
} 
else if(number<0){
    console.log(`Number ${number} is negative`)
} 
else if(number===0){
    console.log(`The number is zero`)
} 
else{
    console.log(`${number} is undefined!`)
} 

console.log("==== Example 4: multiway condition statement in prompt function ==== ")
// check if a user enters a number, didn't enter anything, or pressed cancel button
let n = prompt("Enter a number: ")

if(n===null){
    console.log("Cancel button was pressed")
}
else if(n===""){
    console.log("Ok button was pressed")
}
else if(isNaN(n)){
    console.log(`${n} is a string`)
}
else{
    console.log(`${n} is a number`)
}   

console.log("==== Example 5: nested conditional statement ==== ")
// check if a password has at least 6 characters and no space
let password = prompt("Enter a password: ")

// to find the number of characters in a string, we use the method .length
if(password.length>=6){
    console.log(`Password $(password) has $(password.length) characters`)
    if(password.indexOf(" ")=== -1){
        console.log(`Password $(password) DOESN"T HAVE SPACE`)
    }
    else{
        console.log(`Password $(password) HAS SPACE`)
    }
}
else{
    console.log(`Password $(password) has less than 6 characters`)
}

console.log("==== Excercise ==== ")

console.log("==== Example 6: list ==== ")
let colors = ["red", "olive", "orange", "babyblue", "hotpink"]
// all list has an index number that starts with 0(leftmost)
console.log(`The third color is $(colors[2])`)

let selectcolor = prompt("Example 6: select a color using an index number")
switch (selectcolor){
    case '0':
        console.log("Selected color = red")
        break
    case '1':
        console.log("Selected color = olive")
        break
    case '2':
        console.log("Selected color = orange")
        break
    case '3':
        console.log("Selected color = babyblue")
        break
    case '4':
        console.log("Selected color = hotpink")
        break
    default:
        console.log("Color is not on the list")
}

console.log("==== Example 7: string ==== ")
let greeting ="Good evening"
console.log(`The seventh character is ${greeting[6]}`)