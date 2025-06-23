
//runTests
function GradeCalc(Score) {
    switch (true) {

        case Score >= 90:
            return "A+"
            break;
        case Score >= 80:
            return "A"
            break;
        case Score >= 65:
            return "C"
            break;
        default:
            return "D"
            break;


    }
}

let Score = 73
let grade = GradeCalc(Score);
console.log("Student achieved the grade of : " + grade);
