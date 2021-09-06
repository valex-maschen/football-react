/* eslint-disable no-undef */
import React, {useEffect, useMemo, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CompCalendar from '../../Components/CompCalendar/CompCalendar';

const LeagueCompList = () => {
    const [state, setState] = useState([]);
    const [error, setError] = useState('');
    const param = useParams();

    useEffect(()=>{
        const url = `/v2/competitions/${param.id}/matches?`;
        axios.get(url, {headers: {'X-Auth-Token': '4c67bbe4227444039570151af37c1608'}},)
        .then((res) => {
            const data = res.data;
            setState(data.matches)
        }).catch(err =>{
            setError(err.response.data.message)
        })
    }, [param]);

   
    const rows = useMemo(() =>
    state.map((match) => {
        return{
            homeTeam: match?.homeTeam.name,
            awayTeam: match?.awayTeam.name,
            score:match?.score.fullTime,
            winner:match?.score.winner,
            status:match?.status,
        }
    }), [state]) 

    if (error) {
        return <div>Ошибка: {error}</div>;
      }
    return(
        <div>
            <h1> Матчи лиги </h1>
             <CompCalendar coloums={["Команда хозяев", "Команда гостей", "Счет", "Команда победитель" ,"Статус"]} rows={ rows }/>
        </div>
    )
}

export default LeagueCompList;