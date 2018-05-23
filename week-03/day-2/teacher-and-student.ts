class Student {
  learn() {
    console.log('Student learned the lesson');
  }
  question(teacher){
    return teacher.answer();
  }
}

class Teacher {
  teach(student) {
    return student.learn();
  }
  answer() {
    console.log ('Teacher answered to the question')
  }
}

// testing zone

let testStudent = new Student;
let testTeacher = new Teacher;

testTeacher.teach(testStudent);
testStudent.question(testTeacher);