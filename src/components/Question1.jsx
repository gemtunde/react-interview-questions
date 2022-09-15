import React from 'react'
import {useState, useEffect} from 'react';


const Question1 = () => {
   const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>res.json())
      //.then(data=>console.log(data))
      .then(data=>setUsers(data));

  }, []);

  const handleFilter = () => {
    let filterData = users.filter(
      user => user.name.toLowerCase().includes('t') )
    setUsers(filterData)
  }

  return (
     <>
      <h2>Map, filter questions</h2>
        <div className='card'>
            {
              users.map((user, index) => (
                <div key={index} className='inner-card'>
                <p>{user.name}</p>
                <p>{user.username}</p>
            </div>
              ))
            }
        </div>
            <button onClick={handleFilter}>filter</button>
    </>
  )
}

export default Question1