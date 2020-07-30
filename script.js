"use string";
//#1
let submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2020-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2029-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];

//functionality test
// console.log(submissions);

//#2 Declare a function named addSubmission
// ○ Parameter(s): array, newName, newScore, newDate
// ○ Functionality: construct an object and push it into the array. The object must have the same properties as the objects already in the array. Use conditional statements to set the value for the passed property to true if the score is greater than or equal to 60 and false otherwise.

const addSubmission = (array, newName, newScore, newDate) => {
  let newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newSubmission);
};

// functionality test
// addSubmission(submissions, "Demetri", 99, "2020-07-29");
// console.log(submissions);

//#3
const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

//functionality test
// deleteSubmissionByIndex(submissions, 1);
// console.log(submissions);

//#4
const deleteSubmissionByName = (array, name) => {
  let erase = array.findIndex((student) => {
    return student.name === name;
  });
  return array.splice(erase, 1);
};
// functionality test
// deleteSubmissionByName(submissions, "Jill");
// console.log(submissions);

//#5
const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60;
};

//#6
const findSubmissionByName = (array, name) => {
  let found = array.find((student) => {
    return student.name === name;
  });
  return found;
};

// console.log(findSubmissionByName(submissions, "Jill"));

// functionality test
// console.log(findSubmissionByName(submissions, "Joe"));

//#7
// const findLowestScore = (array) => {
//   let lowestScoredStudent;
//   array.forEach((student) => {
//     if (lowestScoredStudent === undefined) {
//       lowestScoredStudent = student;
//     } else if (lowestScoredStudent.score > student.score) {
//       lowestScoredStudent = student;
//     }
//   });
//   return lowestScoredStudent;
// };

//#7 - using Mitch's example
const findLowestScore = (array) => {
  let currentLowest = array[0];
  array.forEach((student) => {
    if (student.score < currentLowest.score) {
      currentLowest = student;
    }
  });
  return currentLowest;
};

//functionality test
// console.log(findLowestScore(submissions));
// Thanks to Chris for guiding me through this

//#8

const findAverageScore = (array) => {
  let sum = 0;
  for (let item of array) {
    sum += item.score;
  }
  return sum / array.length;
};

// functionality test
// console.log(findAverageScore(submissions));

//#9

const filterPassing = (array) => {
  let newArray = array.filter((item) => {
    return (item.passed = true);
  });
  return newArray;
};

//functionality test
console.log(filterPassing(submissions));

//#10

const filter90AndAbove = (array) => {
  let newArray = array.filter((item) => {
    return item.score >= 90;
  });
  return newArray;
};
// functionality test
// console.log(filter90AndAbove(submissions));
