
// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const anwer = 'apple,banana,orange';
  const result = fruits.join();
  console.log(result);

  
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const newArr = fruits.split();
  console.log(newArr);
  
  

}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const newArr = array.reverse();
  console.log(newArr);
 
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const newArr = array.slice(2);
  console.log(newArr);

 
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90

{
  const find = students.find((student) => student.score === 90 );
  console.log(find);


}

// Q6. make an array of enrolled students
{
 const findEvery = students.filter((student) => student.enrolled === true);
 console.log(findEvery); 
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const socres = students.map((student) => student.score);
  console.log(socres);
}

// Q8. check if there is a student with the score lower than 50
{
 const check = students.some((student) => student.score < 40);
 console.log(check);
}

// Q9. compute students' average score
{
  console.clear();
  const scores = students.map((student) => student.score);
  const sum = scores.reduce((pre,curr) => pre + curr, 0);
  const avg = Math.round(sum / students.length);
  console.log(avg);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const arr = students.map((student) => student.score);
  const newArr = arr.join();
  console.log(newArr);
 
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const arr = students.map((student) => student.score);
  const sortData = arr.sort();
  const answer = sortData.join();
  console.log(answer);
}
// array-api.js
// array-api.js 표시 중입니다.
