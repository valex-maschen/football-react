import React, {useEffect, useMemo, useState} from 'react';
import axios from 'axios';
import TeamCalendar from '../../Components/TeamCalendar/TeamCalendar';
import { useParams } from 'react-router-dom';


const Matches = () => {
    const [state, setState] = useState([]);  
    const param = useParams();
        
    useEffect(() => {
        const url = `/v2/teams/${param.id}/matches`;
        axios.get(url,{headers: {'X-Auth-Token': '4c67bbe4227444039570151af37c1608'}},)
        .then((res) => {
          const data = res.data;
          setState(data.matches);
        });
      }, [param]);

      console.log(state)

        const rows = useMemo(() =>  
        state.map((match) => {
        return{
        id:match.id,
        homeTeam:match.homeTeam.name,
        awayTeam:match.awayTeam.name,
        score:match.score.fullTime,
        winner:match.score.winner,
        status:match.status,
        }
     }),[state])

     console.log(rows)

    return (
        <div>
            <h1> Матчи </h1>
            <TeamCalendar coloums={["Команда хозяев", "Команда гостей", "Счет", "Команда победитель" ,"Статус"]} rows={ rows }/>
        </div>
    )
}

export default Matches;