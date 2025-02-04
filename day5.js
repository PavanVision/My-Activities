//practice variables in js

let studentName="John";
studentName="Mike";
console.log(studentName);

const birthyear=2000;
//birthyear=2001; it is showing error bcs cosnst assigned it is  fixed value
console.log(birthyear);

var word="Hello";
word="hi";
console.log(word);

 
const movies = [
    "Inception",
    "The Dark Knight",
    "Interstellar",
    "Tenet",
    "Oppenheimer"
];

// Print array and its length
console.log("Movies:", movies);
console.log("Number of movies:", movies.length);

const movieDetails = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    price: {
        normal: 200,
        premium: 350
    },
    showTimings: ["10:00 AM", "2:00 PM", "6:00 PM"]
};

// Print object
console.log("Movie Details:", movieDetails);