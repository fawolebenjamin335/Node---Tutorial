import React from 'react'

function Filter() {
    const Individuluals = [
        {id:1, name:"Alice", type:"User",  score: 13, age: 30},
        {id:2, name:"Bob", type:"Admin", score: 12, age: 25},
        {id:3, name:"Charlie", type:"User", score: 75, age: 35},
        {id:4, name:"David", type:"Guest", score: 60, age: 28},
        {id:5, name:"AEve", type:"Admin", score: 95, age: 40},
    ];
    
    const AllFilter = Individuluals.filter((ind) => (ind.score > 60)); 
    console.log(AllFilter);

    const LowIndividual = Individuluals.filter((ind) => (ind.score < 5));
    console.log(LowIndividual);

    const IndividualNames = Individuluals.filter((theirnames) => (theirnames.name.toLowerCase().startsWith("a")))

    console.log(IndividualNames);

    const Agerange = Individuluals.filter((range) => range.age == 30 || range.name.toLowerCase().includes("a"));
  console.log(Agerange);

  const TopPeople = Individuluals.sort((small, big) => (big.score - small.score)).slice(3)
  
  console.log(TopPeople);

  
    
    


  return (
    <div>
      
    </div>
  )
}

export default Filter
