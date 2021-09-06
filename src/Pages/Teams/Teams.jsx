import React, {useEffect, useMemo, useState} from 'react';
import TeamsTable from '../../Components/TeamsTable/TeamsTable';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Teams = () => {
    const [state, setState] = useState([]);
    const [error, setError] = useState('');
    const param = useParams();

    useEffect(()=>{
        const url = `/v2/competitions/${param.id}/teams`;
        axios.get(url, {headers: {'X-Auth-Token': '4c67bbe4227444039570151af37c1608'}},)
        .then((res) => {
            const data = res.data;
            setState(data.teams)
        }).catch(err =>{
            setError(err.response.data.message)
        })
    }, [param]);
   
    const rows = useMemo(() =>
    state.map((teams) => {
        return{
            id: teams.id,
            teamFlag:teams?.crestUrl,
            teamCountry:teams?.area.name,
            teamFoundDate:teams?.founded,
            teamColor:teams?.clubColors,
        }
    }), [state]) 

    if (error) {
        return <div>Ошибка: {error}</div>;
      } 
      return(
        <div>
            <h1> Команды </h1>
            <TeamsTable coloums={["Флаг", "Сборная", "Дата основания", "Цвета команды"]} rows={rows}/>
        </div>
    )

}

export default Teams;