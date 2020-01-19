function getGrade(score) {
    let grade;
        if(0 <= score && score <= 5) {
            return 'F';
        } else if (5 < score && score <= 10) {
            return 'E';
        } else if(10 < score && score <= 15) {
            return 'D';
        } else if(15 < score && score <= 20) {
            return 'C';
        } else if(20 < score && score <= 25) {
            return 'B';
        } else if(25 < score && score <= 30) {
            return 'A';
        }
    return grade;
}

console.log(getGrade(3));
