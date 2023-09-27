/* eslint-disable max-lines-per-function */
function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    listCourses() {
      return this.courses;
    },

    addCourse(course) {
      this.courses.push(course);
    },

    addNote(courseCode, note) {
      let course = this.courses.filter(course => {
        return course.code === courseCode;
      })[0];

      if (course) {
        if (course.note) {
          course.note += `; ${note}`;
        } else {
          course.note = note;
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

    updateNote(courseCode, note) {
      let course = this.courses.filter(course => {
        return course.code === courseCode;
      })[0];

      if (course) {
        course.note = note;
      }
    },
  };
}

let foo = createStudent('Foo', '1st');
foo.info();
console.log(foo.listCourses());
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
console.log(foo.listCourses());
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
foo.updateNote(101, 'Fun course');
foo.viewNotes();