const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

// LEVEL 1
// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
// console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

// Destructure and assign the elements of countries array to fin, est, sw, den, nor
const [fin, est, sw, den, nor] = countries;
// console.log(fin, est, sw, den, nor);

// Destructure the rectangle object by its properties or keys.
const { width: w, height: h, area: a, perimeter: p } = rectangle;
// console.log(w, h, a, p);

// LEVEL 2
// Iterate through the users array and get all the keys of the object using destructuring
const userKeys = Object.keys(...users);
// console.log(userKeys.join(', '));

// Find the persons who have less than two skills
const persons = users.filter((user) => user.skills.length < 2);
// console.log(persons);

// LEVEL 3
// Destructure the countries object print name, capital, population and languages of all countries

/* A junior developer structure student name, 
skills and score in array of arrays 
which may not easy to read. 
Destructure the following array name to 
name, skills array to skills, 
scores array to scores, 
JavaScript score to jsScore and React score to reactScore variable in one line.
*/

// Write a function called convertArrayToObject which can convert the array to a structure object.
const convertArrayToObject = (arr) => {
  // return arr;
  newArr = [];
  for (i = 0; i < arr.length; i++) {
    // for (const [name, skills, scores] of arr) {
    //   newArr.push({ name, skills, scores });
    // }

    // arr.map(([name, skills, scores]) => { newArr.push({ name, skills, scores }); });

    arr.filter(([name, skills, scores]) => { newArr.push({ name, skills, scores }); });
    
    // arr.forEach(([name, skills, scores]) => { newArr.push({ name, skills, scores }); });

    return newArr;
  }
};

const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
  ["Mike", ["HTM", "CSS", "JS", "React",`php`], [85, 50, 70, 20]],
];

console.log(convertArrayToObject(students));


/*
Copy the student object to newStudent without mutating the original object. In the new object add the following ?
Add Bootstrap with level 8 to the front end skill sets
Add Express with level 9 to the back end skill sets
Add SQL with level 8 to the data base skill sets
Add SQL without level to the data science skill sets
 */

 const student = {
   name: "David",
   age: 25,
   skills: {
     frontEnd: [
       { skill: "HTML", level: 10 },
       { skill: "CSS", level: 8 },
       { skill: "JS", level: 8 },
       { skill: "React", level: 9 },
     ],
     backEnd: [
       { skill: "Node", level: 7 },
       { skill: "GraphQL", level: 8 },
     ],
     dataBase: [{ skill: "MongoDB", level: 7.5 }],
     dataScience: ["Python", "R", "D3.js"],
   },
};
 
const newStudent = { ...student };
newStudent.skills.frontEnd.push({ skill: "Bootstrap", level: 8 });//or push
newStudent.skills.backEnd.push({ skill: "Express", level: 9 });
newStudent.skills.dataBase.push({ skill: `sql`, level: 8 });
newStudent.skills.dataScience.push(`sql`);

console.log(newStudent);