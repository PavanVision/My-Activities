const cinema = {
    name: "AMB Cinemas",
    location: "HiTech City",
    movies: [
      { 
        title: "Kalki", 
        shows: ["10AM", "3PM"],
        seats: [60, 60],
        Image:"https://cdn.123telugu.com/content/wp-content/uploads/2024/01/Kalki2898AD.jpg"
      },
      {
        title: "Pushpa 2",
        shows: ["11AM", "4PM"],
        seats: [60, 60],
        Image:"https://tse3.mm.bing.net/th?id=OIP.OvG6JQ_YBNGZ9UzDohLlwgHaEK&pid=Api&P=0&h=180"
      }
    ]
  };
  
  // Display in Console
  console.log("Theater Name:", cinema.name,cinema.location);
  console.log("First Movie:", cinema.movies[0].title);
  console.log("First Movie:", cinema.movies[1].title);
  