/* eslint-disable max-len */
function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
};

Person.prototype.communicate = function() {
  console.log('Communicating');
};

Person.prototype.eat = function() {
  console.log('Eating');
};

Person.prototype.sleep = function() {
  console.log('Sleeping');
};

function Doctor(firstName, lastName, age, gender, specialization) {
  Person.call(this, firstName, lastName, age, gender);
  this.specialization = specialization;
}

Doctor.prototype = Object.create(Person.prototype);
Doctor.prototype.diagnose = function() {
  console.log('Diagnosing');
};
Doctor.prototype.constructor = Doctor;

function Professor(firstName, lastName, age, gender, subject) {
  Person.call(this, firstName, lastName, age, gender);
  this.subject = subject;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.teach = function() {
  console.log('Teaching');
};
Professor.prototype.constructor = Professor;

function Student(firstName, lastName, age, gender, degree) {
  Person.call(this, firstName, lastName, age, gender);
  this.degree = degree;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.study = function() {
  console.log('Studying');
};
Student.prototype.constructor = Student;

function GraduateStudent(firstName, lastName, age, gender, degree, graduateDegree) {
  Student.call(this, firstName, lastName, age, gender, degree);
  this.graduateDegree = graduateDegree;
}

GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.research = function() {
  console.log('Researching');
};
GraduateStudent.prototype.constructor = GraduateStudent;

let person = new Person('foo', 'bar', 21, 'gender');
console.log(person instanceof Person);
person.eat();
person.communicate();
person.sleep();
console.log(person.fullName());

let doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
console.log(doctor instanceof Person);
console.log(doctor instanceof Doctor);
doctor.eat();
doctor.communicate();
doctor.sleep();
console.log(doctor.fullName());
doctor.diagnose();

let graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering');
console.log(graduateStudent instanceof Person);
console.log(graduateStudent instanceof Student);
console.log(graduateStudent instanceof GraduateStudent);
graduateStudent.eat();
graduateStudent.communicate();
graduateStudent.sleep();
console.log(graduateStudent.fullName());
graduateStudent.study();
graduateStudent.research();