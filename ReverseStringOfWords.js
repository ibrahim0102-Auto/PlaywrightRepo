
let str="Learn String and Function";
let value=str.split(" ");
let reverseString="";
for(let i=value.length-1;i>=0;i--)
{
    reverseString=reverseString + " " + value[i]
}
console.log(reverseString)