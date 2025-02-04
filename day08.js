

// 3 Ways to Create Objects
// 1. Literal Method (Most Common)
let movie1 = { 
    name: "Game Changer", 
    director: "Rajamouli" 
  };

  // 2. Empty Object + Properties
  let movie2 = {};
  movie2.name = "RRR";
  movie2.budget = "500Cr";

  
  // 3. From Existing Object
  let movie3 = Object.create(movie1);
  movie3.name = "Bahubali";
  console.log(movie3,"movie3")
  console.log(movie1,"movie1")
  console.log(movie2,"movie2")
  
  let myMovie = {
    title: "Orange",
    actors: ["Ramcharan ", "Nagababu"],
    rating: 4.8,
    is3D: false
  };
  console.log(myMovie)

  let theater ={
    name : "PVR Cinemas",
    screens : ["screen1","screen2"],
    facilities :["AC","Dolby Atoms"],
    showcount : 5,
  
  }
  console.log(theater)