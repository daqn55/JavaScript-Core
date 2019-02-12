function gradeCalculate(examPoints, homeworkComp, totalHomework) {
    let pointsForHund = 22.5;

    let grade = 6;
    if(+examPoints === 400){
        console.log(grade.toFixed(2));
    }else{
        let points = (examPoints / 100) * pointsForHund;
        let homeworkPoints = (homeworkComp / totalHomework) * 10;
        let totalPoints = points + homeworkPoints;

        grade = 3 + 2 * (totalPoints - 100 / 5) / (100 / 2);

        if(grade < 3){
            grade = 2;
        }else if(grade > 6){
            grade = 6;
        }
        console.log(grade.toFixed(2));
    }
}

gradeCalculate(200, 5, 5);