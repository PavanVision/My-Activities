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
const allmovies= movieCollection.map(movie=>{
    return{
        title:movie.title,
        price:movie.price,
        seatsAvailability:movie.seatsAvailable,
        ratings:movie.ratings,
    };
});
console.log( allmovies);
const Availablemovies =movieCollection.map(movie=>{
    return{
 title: movie.title,
 seatsAvailable: movie.seatsAvailable>60?"available" :"housefull",
    };
});
console.log( Availablemovies);


 