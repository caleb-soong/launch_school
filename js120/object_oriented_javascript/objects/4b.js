/* eslint-disable max-lines-per-function */
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