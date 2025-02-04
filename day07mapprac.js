// 1️⃣ Basic Map Example
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log("Original numbers:", numbers);
console.log("Doubled numbers:", doubled);

const movieList = [
    { title: "Movie 1", price: 200 },
    { title: "Movie 2", price: 150 },
    { title: "Movie 3", price: 300 }
];

// Format prices to include "₹" symbol
const formattedMovies = movieList.map(movie => {
    return {
        title: movie.title,
        formattedPrice: `₹${movie.price}`
    };
});
console.log("Formatted Movies:", formattedMovies);

const showTimings = [
    { time: "10:00 AM", seats: 50 },
    { time: "2:00 PM", seats: 0 },
    { time: "6:00 PM", seats: 25 }
];

// Create availability status
const availabilityStatus = showTimings.map(show => {
    return {
        time: show.time,
        status: show.seats > 0 ? "Available" : "Housefull",
        seatsLeft: show.seats
    };
});

console.log("Show Availability:", availabilityStatus);


const moviedetails = [
    {
        title: "Gaami",
        rating: 3.5,
        price: 250
    },
    {
        title: "sankrantiki vastunnam",
        rating: 4.0,
        price: 200
    },
    {
        title: "chiruta",
        rating: 2.5,
        price: 80
    },
    {
        title: "Julai",
        rating: 3.0,
        price: 180
    },
    {
        title: "orange",
        rating: 3.2,
        price: 100,
    },
];
const premiumprice = moviedetails.map(movie => {
    return {
        premiumprice: movie.price + 100
    };
});

console.log(premiumprice);

const recommendations = moviedetails.map(movie => ({
    title: movie.title,
    recommendation: movie.rating >= 2.5 ? "Highly Recommended" : "Recommended"
}));//

console.log(recommendations);

const movieCollection = [
    {
        title: "Inception",
        price: 200,
        seatsAvailable: 50,
        ratings: 4.5
    },
    {
        title: "squid game",
        price: 280,
        seatsAvailable: 100,
        ratings: 3.5
    },
    {
        title: "evil dead",
        price: 150,
        seatsAvailable: 60,
        ratings: 4.0
    },
    {
        title: "mask",
        price: 100,
        seatsAvailable: 150,
        ratings: 5.0
    },
    {
        title: "final destination",
        price: 250,
        seatsAvailable: 50,
        ratings: 3.75
    },
];
const allmovies = movieCollection.map(movie => {
    return {
        title: movie.title,
        price: movie.price,
        seatsAvailability: movie.seatsAvailable,
        ratings: movie.ratings,
    };
});

console.log(allmovies);

const Availablemovies = movieCollection.map(movie => {
    return {
        title: movie.title,
        seatsAvailable: movie.seatsAvailable > 60 ? "available" : "housefull",
    };
});
console.log(Availablemovies);

const weekendpricing = movieCollection.map(movie => {
    return {
        title: movie.title,
        weekendpricing: movie.price * 1.5,
    };
});
console.log(weekendpricing);