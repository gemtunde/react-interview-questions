import React, {useEffect} from 'react'

const Question3 = () => {
    useEffect(()=>{
        let age = 26;
        let name= 'Tunde';
        // if(age > 26){
        //     console.log('you are old')
        // }else if(name==='Tunde' && age===26){
        //     console.log('Tunde is my name'); 
        //     console.log('Tunde is 26 yrs'); 
        // }
        // else{
        //      console.log('Tunde is NOT my name'); 
        //     console.log('Tunde is LESS than 26 yrs'); 
        // }

        //using conditional rendering
        age > 26 ? console.log('you are old') :
        name==='Tunde' && age===26 ? (
            <>
            alert('Tunde is my name');
            console.log('Tunde is 26 yrs');
            </> ) :(
            <>
            console.log('Tunde is NOT my name'); 
            console.log('Tunde is LESS than 26 yrs');
            </>
        )
    },[])
  return (
    <div>Inline Conditional expression </div>
  )
}

export default Question3