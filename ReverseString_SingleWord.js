
// basic For Loop

let value="TestLeaf";
let len=value.length;
  let reverseString=''
for (let i=len-1;i>=0;i--)
{
         
    // console.log(value.charAt(i))
  
reverseString=reverseString+value[i]

   
}
console.log(reverseString)

//Reverse a string

//method 1

let Name="Ibrahim"
let reverseName='';

for(let i=Name.length-1;i>=0;i--)
{
    reverseName=reverseName+Name[i]
}
console.log(reverseName)

//method 2

let val="Test$000$Leaf";

console.log(val.split('$').reverse().join('$'))
