import React from 'react';
import { useState, useEffect } from 'react';

const UseEffect = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('src/data/mydata.json')
            .then(response => response.json())
            .then(data => setUsers(data));
    }   , [] );

    return (
        <div>
             <h1 className=''> Users List </h1 >
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
               
                {users.map(user => (
                    <div key={user.id} className='bg-gray-200 p-4 rounded shadow m-4'>
                        <h1 className='text-stone-950 font-bold'>{user.name}</h1>
                        <img src={user.img} alt={user.name} className=' h-24 w-24 object-cover rounded-full' />
                        <p className='text-stone-800'>{user.email}</p>
                        <p className='text-black/60'>{user.phone}</p>

                    </div>
                ))}
            </div>
            </div>
    );
}
export default UseEffect;