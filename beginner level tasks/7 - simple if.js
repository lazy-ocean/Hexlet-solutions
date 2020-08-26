//finalGrade.js
/*
Write finalGrade function that returns grade of student using his exam grade and the number of projects.

Your function should have to arguments:

exam — exam grade, 0 to 100;
projects — number of projects, >=0.

4 possible returns (grades):

100, if exam grade is >=90 OR there're 10 projects
90, if exam grade is > 75 AND there're 5 projects min
75, if exam grade is > 50 AND there're 2 projects min
0  - every other case.
*/

const finalGrade = (exam, projects) => {
    if (exam >= 90 || projects >= 10) {
        return 100;
    }
    if (exam > 75 && projects >= 5) {
        return 90;
    }
    if (exam > 50 && projects >= 2) {
        return 75;
    }
    return 0;
};

console.log(finalGrade(70, 2)); // 75
console.log(finalGrade(100, 12)); // 100
console.log(finalGrade(99, 0)); // 100
console.log(finalGrade(10, 15)); // 100
console.log(finalGrade(85, 5)); // 90
console.log(finalGrade(55, 3)); // 75
console.log(finalGrade(55, 0)); // 0
console.log(finalGrade(20, 2)); // 0