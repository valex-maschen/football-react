import React, {useEffect, useMemo, useState} from 'react';
import axios from 'axios';
import TeamCalendar from '../../Components/TeamCalendar/TeamCalendar';
import { useParams } from 'react-router-dom';


const Matches = () => {
    const [state, setState] = useState([]);  
    const param = useParams();
    console.log(param)
        
    useEffect(() => {
        const url = `/v2/teams/${param.id}/matches`;
        axios.get(url,{headers: {'X-Auth-Token': '4c67bbe4227444039570151af37c1608'}},)
        .then((res) => {
          const data = res.data;
          setState(data.competitions);
        });
      }, [param]);

    //   const rows = useMemo(() =>  
    //   state.map((match) => {
    //     return{
          
    //     }
    // }),[state])

    return (
        <div>
            <h1> Матчи </h1>
            <TeamCalendar coloums={["1", "2", "3", "4"]} rows={[]}/>
        </div>
    )
}

export default Matches;