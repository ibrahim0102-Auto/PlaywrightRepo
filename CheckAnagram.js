
let string1="Night "
let string2=" thing"

let newString1=string1.trim().toUpperCase().split("").sort().join("");
let newString2=string2.trim().toUpperCase().split("").sort().join("")

if(newString1===newString2)
{
    console.log(`${string1} and ${string2} are anagram..`)
}

else{
console.log(`${string1} and ${string2} are not anagram..`)
}

//Learnt --> In js, String does not support sort() method, only array support it.