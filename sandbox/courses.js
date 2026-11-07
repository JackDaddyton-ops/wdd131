// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T' },
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A' }
    ],
    enrollStudent: function (num) {
        // get section that has sectionNum == num
        const theSection = this.sections.find(section => section.sectionNum === num);
        console.log(theSection);
        // increment enrolled
        theSection.enrolled++;
    },
    removeStudent: function (num) {
        // get section that has sectionNum == num
        const theSection = this.sections.find(section => section.sectionNum === num);
        console.log(theSection);
        // increment enrolled
        theSection.enrolled--;
    }

};
const anotherCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { sectionNum: 10, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T' },
        { sectionNum: 20, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A' }
    ],
    enrollStudent: function (num) {
        // get section that has sectionNum == num
        const theSection = this.sections.find(section => section.sectionNum === num)
        console.log(theSection)
        // increment enrolled
        theSection.enrolled++;
    },
    removeStudent: function (num) {
        // get section that has sectionNum == num
        const theSection = this.sections.find(section => section.sectionNum === num);
        console.log(theSection);
        // increment enrolled
        theSection.enrolled--;
    }

};



function setHeader(course) {
    const courseName = document.querySelector('#courseName');
    const courseCode = document.querySelector('#courseCode');
    courseName.textContent = course.name;
    courseCode.textContent = course.code;
}

function sectionTemplate(section) {
    return `<tr>
                <td>${section.sectionNum}</td>
                <td>${section.roomNum}</td>
                <td>${section.enrolled}</td>
                <td>${section.days}</td>
                <td>${section.instructor}</td>
            </tr>`
}

function setSections(sections) {
    const sectionsEl = document.querySelector("#sections")
    const html = sections.map(sectionTemplate)
    sectionsEl.innerHTML = html.join('');
}

function enrollHandler(ev) {
    console.log(ev)
    sectionNum = parseInt(document.querySelector("#sectionNumber").value);
    if (ev.target.id == "enrollStudent") {
        aCourse.enrollStudent(sectionNum);
    }
    else if (ev.target.id == "dropStudent") {
        aCourse.removeStudent(sectionNum);
    }
    setHeader(aCourse);
    setSections(aCourse.sections);
    return;
}

setHeader(aCourse);
setSections(aCourse.sections);


document.querySelector("#enrollStudent").addEventListener("click", enrollHandler)
document.querySelector("#dropStudent").addEventListener("click", enrollHandler)
