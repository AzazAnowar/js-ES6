const student = {
    name: 'Kolim Uddin',
    age: 15,
    class: '10',
    marks: {
        math: 78,
        physics: 89,
        chemistry: 65
    },
}

const marks = student.marks;
const math = student.marks.math;

const chemistry = student['marks']['chemistry'];

const subject = 'math';
const subjectMarks = student.marks[subject];

// error
const marks2 = student.marks.subject;

console.log(marks2);
console.log(subjectMarks);