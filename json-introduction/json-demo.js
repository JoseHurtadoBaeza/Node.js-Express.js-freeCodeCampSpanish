// const course = require('./curso.json');

// console.log(course);
// console.log(typeof course);
// console.log(course.title);
// console.log(course.topics);

let courseInfo = {
    "title": "Learn Node.js",
    "numViews": 45642,
    "numLikes": 21123,
    "topics": [
        "JavaScript",
        "Node.js"
    ],
    "isPublic": true
}

console.log(courseInfo);
console.log(typeof courseInfo);

// Object -> Character chain
// Character chain in JSON format
let courseInfoJSON = JSON.stringify(courseInfo);

console.log(courseInfoJSON);
console.log(typeof courseInfoJSON);

console.log(courseInfoJSON.title);

// Character chain -> Object
let courseInfoObject = JSON.parse(courseInfoJSON);

console.log(courseInfoObject);
console.log(typeof courseInfoObject);

console.log(courseInfoObject.title);