//Given a string s consisting of words and spaces, 
// return the length of the last word in the string. 

function FindLength(value)
{

    let s=value;
    let SplitWords=s.split(" ");
    for(let i=0;i<=SplitWords.length-1;i++)
    {
        if(i=SplitWords.length-1)
        {
            return SplitWords[i]
        }
    }
}

let LastWord=FindLength("I am on the way to complete Playwright Automation")
console.log(LastWord.length)