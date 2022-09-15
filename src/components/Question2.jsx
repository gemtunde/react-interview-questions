import React from 'react'
import {useState, useEffect} from 'react';

//child component
const Child = ({name, handleClub, club}) => {
    

       return(
        <div>
            <h3>{name}</h3>
            <h3>{club}</h3>
            <button onClick={handleClub}>change club</button>
        </div>
    )
}

//parent
const Question2 = () => {
   const [counter, setCounter] = useState(0);
   const [name, setName]  = useState('babatunde');
   const [club, setClub] = useState('liverpool');

    const handleIncrease = () => {
        setCounter(counter + 1);
        setName('kante');
    }
    const handleDecrease = () => {
        setCounter(counter - 1);
        setName('modric');
    }

    const handleClub = ()=> {
        setClub('Madrid');
    }
  return (
     <>
      <h2>States</h2>
      <Child name={name} handleClub={handleClub} club={club}/>
        <div className='card'>
          <p>increase - {counter} </p>
        </div>
           <button onClick={handleIncrease}>Increase</button>
           <button onClick={handleDecrease}>Decrease</button>
    </>
  )
}

export default Question2