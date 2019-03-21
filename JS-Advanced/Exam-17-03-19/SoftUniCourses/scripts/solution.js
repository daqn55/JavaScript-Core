function solve() {
    $('.courseFoot').first().on('click', singMeUp);
    let coursesPrices = {'js-fundamentals': 170, 'js-advanced': 180, 'js-applications': 190, 'js-web':490};

    function singMeUp() {
        let checked = $('input:checked');

        let sumOFCourses = 0;
        let courses = [];
        let typeOfStudy = '';

        for(let x of checked){
            let inputType = $(x).attr('type');
            let inputValue = $(x);
            if (inputType === 'radio') {
                typeOfStudy = inputValue.val();
            }else {

                let valueOfCourse = inputValue.val();
                courses.push(valueOfCourse);
            }
        }
        if(courses.includes('js-advanced') && courses.includes('js-fundamentals')){
            for(let x of courses){
                if(x === 'js-advanced'){
                    coursesPrices[x] *= 0.9;
                }
            }
        }

        if(courses.includes('js-advanced') && courses.includes('js-fundamentals') && courses.includes('js-applications')){
            for(let x of courses){
                coursesPrices[x] *= 0.94;
            }
        }

        if(courses.length === 4){
            courses.push('HTML and CSS');
        }

        if(typeOfStudy === 'online'){
            for(let x of courses){
                coursesPrices[x] *= 0.94;
            }
        }

        for(let x of courses){
            if(coursesPrices[x] !== undefined) {
                sumOFCourses += coursesPrices[x];
            }
        }

        let coursesBody = $('#myCourses .courseBody ul');
        let cost = $('#myCourses .courseFoot p');
        for(let x of courses){
            let courseName = $(`[name="${x}"]`).parent().text().trim().split(' - ')[0].split(' ').join('-');
            let li = $(`<li>${courseName}</li>`)
            coursesBody.append(li);
        }

        cost.text(`Cost: ${Math.floor(sumOFCourses).toFixed(2)} BGN`);
    }
}

solve();