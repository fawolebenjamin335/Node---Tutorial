import React from 'react';
import { useState, useEffect }  from 'react';

const MyUseEffect = () => {
    const [users, setUsers] = useState([]);   

    useEffect(() => {
        fetch('src/data/mydata.json')
            .then(response => response.json())
            .then(data => setUsers(data));
    }  , [] );
  return (
    <div>   
      <h1>Movies List</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-1'>
        {users.map(movie => (
            <div key={movie.id} className='p-4 rounded  m-4'> 
                
                <p className=' text-black bg-white absolute mt-1 ml-[8%]  w-10 text-center rounded-xl '> {movie.rating}</p>
                <img src={movie.img} alt={movie.movieName}  className='rounded-xl cursor-pointer hover:opacity-75 hover:scale-105 transition-transform duration-300 ' />
                <p className=' text-black  absolute flex text-center ml-[1%]  mt-[0%]'> {movie.movieName}</p>
                <p className=' text-white absolute bg-black/60 w-12 text-center rounded-xl ml-[7.5%]  mt-[-2%]'> {movie.year}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default MyUseEffect;
