import React, { useEddect, useState } from 'react';

const Foods = () => {
    const [foods, serFoods] =useState([])
    useEffect(()=>{
     fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
     .then(res => res.json())
     .then(data => console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Foods;