console.log("===================Assignment on Grade System===============");

function gradeSystem(score) {
    switch (true) {
        case score >= 100 || score == " " || score <= 0 || score == undefined:
            console.log(`"${score}" -> Invalid input`);
            break;
        case score < 35:
            console.log(`"${score}" -> You are failed.`);
            break;
        case score >= 35 && score < 60:
            console.log(`"${score}" -> You are passed with grade is "C"`);
            break;
        case score >= 60 && score < 75:
            console.log(`"${score}" -> You are passed with grade is "B"`);
            break;
        case score >= 75 && score < 90:
            console.log(`"${score}" -> You are passed with grade is "A"`);
            break;
        case score >= 90 && score < 100:
            console.log(`"${score}" -> You are passed with grade is "A+"`);
            break;
        default:
            console.log(`"${score}" -> Invalid input`);
    }
    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = ");

}
gradeSystem(66);
gradeSystem(13);
gradeSystem(" ");
gradeSystem(98);
gradeSystem("fifty Five");
gradeSystem(35);
gradeSystem(75);
gradeSystem(null);
gradeSystem(undefined);
gradeSystem(-20);
gradeSystem(55);
gradeSystem(82);