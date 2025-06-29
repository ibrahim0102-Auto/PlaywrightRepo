//Given a string s consisting of words and spaces, 
// return the length of the last word in the string. 

function FindLength(value)
{

    let s=value.trim();
    let SplitWords=s.split(" ");
    for(let i=0;i<=SplitWords.length-1;i++)
    {
        if(i=SplitWords.length-1)
        {
            return SplitWords[i]
        }
    }
}

let LastWord=FindLength("  Cricket is a gentlemen game  ")
console.log(LastWord.length)