function palindrome(value) {
    console.log("original string value is : " + value)

    let splitValue = value.split("")

    let reverseString = splitValue.reverse().join('');
    console.log("Reverse String is : " + reverseString)
    if (value === reverseString) {
        console.log("Given String Value is palindrome")
    }
    else {
        console.log("Given String is not a palindorme")
    }

}

palindrome("radar");