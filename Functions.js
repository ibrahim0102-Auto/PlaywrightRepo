
// Task 1: Function Declaration 
// Create a function named `userProfile` that takes a `name` as a parameter and logs “Hello, 
// <name>!" to the console. 

function userProfile(name)
{
    console.log(`Hello, ${name}!`)
}

userProfile("Rocky")
console.log(`********Task-1 ends*********`)
// Task 2: Arrow Function 
// Create an arrow function named `double` that takes a number as a parameter and returns 
// double its value. 

let double=(number)=>
{
    let doubleValue=number*2;
    return doubleValue
}

let result=double(6);
console.log(`Double value is ${result}`);
console.log(`********Task-2 ends*********`)

// Task 3: Anonymous Function 
// Use an anonymous function with `setTimeout` to log `"This message is delayed by 2 seconds"` 
// after 2 seconds. 
console.log(`Execution Starts...`)
setTimeout(function()
{
    console.log(`"This message is delayed by 2 seconds" `)
    console.log(`********Task-3 ends*********`)
},2000)

console.log(`Executiuon Ends...`)


// Task 4: Callback Function 
// Create a function named `getUserData` that takes a callback function as a parameter. Inside 
// `getUserData`, simulate fetching data with `setTimeout` and then call the callback function 
// with a user object after 3 seconds. 
// Call the `getUserData` function and log the user's name and age using the callback function. 

function getUserData(callback)
{
    setTimeout(function()
{
   
    console.log(`this execution is delayed by 3 secs`)
    callback();
},3000)
}

function displayData()
{
    console.log(`User name is Rocky and Age is 56.`)
      console.log(`********Task-4 ends*********`)
}

getUserData(displayData);