import React, { useEffect, useState } from 'react';

const url= "/v2/competitions";

const getData = async () => {
    
    const response = await fetch(url,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': '4c67bbe4227444039570151af37c1608'
        },
    }) 
    return await response.json(); 
}      

function FetchingCompetitions () {
    const [items, setItems] = useState([]);

    useEffect(() => {
        (async () =>{
            console.log(await getData())
        })()
        
    })

    return(
        <div>
            1
        </div>
    )
}



export default FetchingCompetitions;