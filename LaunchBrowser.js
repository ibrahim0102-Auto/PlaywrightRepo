
//launchBrowser
function launchBrowser(brName) {
    if (brName === 'chrome') {
        console.log(`Browser name is ${brName}`)
    }
    else {
        console.log(`Browser name is not chrome, it is ${brName}`)
    }

}
let browserName = 'Safari';
launchBrowser(browserName)

console.log("*********************************")
//runTests
function runTests(testType) {
    switch (testType) {

        case "sanity":
            console.log("Test Type team is going to perform is : " + testType)
            break;
        case "regression":
            console.log("Test Type team is going to perform is : " + testType)
            break;
        default:
            console.log("Test Type team is going to perform is Smoke")
            break;


    }
}

let testType = "sanity"
runTests(testType);
