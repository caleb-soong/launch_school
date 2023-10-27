/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
const school = {
  students: [],

  addStudent(name, year) {
    if (['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
      let student = createStudent(name, year);
      school.students.push(student);
      return student;
    } else {
      console.log('Invalid Year');
      return undefined;
    }
  },

  enrollStudent(student, course) {
    student.addCourse(course);
  },

  addGrade(student, courseCode, grade) {
    for (let index = 0; index < student.courses.length; index += 1) {
      if (student.courses[index].code === courseCode) {
        student.courses[index].grade = grade;
      }
    }
  },

  getReportCard(student) {
    student.courses.forEach(course => {
      if (course.grade) {
        console.log(`${course.name}: ${course.grade}`);
      } else {
        console.log(`${course.name}: In progress`);
      }
    });
  },

  courseReport(courseName) {
    let grades = [];

    school.students.forEach(student => {
      let reportedCourse = student.courses.filter(course => course.name === courseName && course.grade);
      if (reportedCourse.length > 0) {
        grades.push(reportedCourse[0].grade);
      }
    });

    if (grades.length === 0) {
      console.log('undefined');
      return undefined;
    }

    console.log(`=${courseName} Grades=`);

    school.students.forEach(student => {
      let reportedCourse = student.courses.filter(course => course.name === courseName && course.grade);
      if (reportedCourse.length > 0) {
        console.log(`${student.name}: ${reportedCourse[0].grade}`);
      }
    });

    console.log('---');

    let courseAverage = grades.reduce((sum, value) => sum + value, 0) / grades.length;

    console.log(`Course Average: ${courseAverage}`);

    return undefined;
  },
};

function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    addCourse(course) {
      this.courses.push(course);
    },

    listCourses() {
      return this.courses;
    },

    addNote(code, note) {
      for (let index = 0; index < this.courses.length; index += 1) {
        if (this.courses[index].code === code) {
          if (this.courses[index].note) {
            this.courses[index].note += `; ${note}`;
          } else {
            this.courses[index].note = note;
          }
        }
      }
    },

    updateNote(code, note) {
      for (let index = 0; index < this.courses.length; index += 1) {
        if (this.courses[index].code === code) {
          this.courses[index].note = note;
        }
      }
    },

    viewNotes() {
      this.courses.forEach(course => {
        if (course.note) {
          console.log(`${course.name}: ${course.note}`);
        }
      });
    },
  };
}

let foo = school.addStudent('foo', '3rd');
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.addCourse({ name: 'Physics', code: 202 });
school.addGrade(foo, 101, 95);
school.addGrade(foo, 102, 90);

let bar = school.addStudent('bar', '1st');
bar.addCourse({ name: 'Math', code: 101 });
school.addGrade(bar, 101, 91);

let qux = school.addStudent('qux', '2nd');
qux.addCourse({ name: 'Math', code: 101 });
qux.addCourse({ name: 'Advanced Math', code: 102 });
school.addGrade(qux, 101, 93);
school.addGrade(qux, 102, 90);

school.getReportCard(foo);
school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');