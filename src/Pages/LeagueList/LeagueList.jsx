import React, {useEffect, useMemo, useState} from 'react';
import axios from 'axios';
import MainTable from '../../Components/MainTable/MainTable.jsx';


const LeagueList = () => {
    const [state, setState   ] = useState([]);  

    useEffect(() => {
        const url = "/v2/competitions";
        axios.get(url,{headers: {'X-Auth-Token': '4c67bbe4227444039570151af37c1608'}},)
        .then((res) => {
          const data = res.data;
          setState(data.competitions);
        });
      }, []);
 
    const rows = useMemo(() =>  
    state.map((comp) => {
      return{
        id: comp.id,
        competitionName: comp?.name,
        areaName: comp?.area.name,
        startDate: comp?.currentSeason?.startDate,
        endDate: comp?.currentSeason?.endDate,
      }
  }),[state])

     return (
        <div>
            <h1> Список лиг </h1>
            <MainTable coloums={["Турнир", "Страна", "Начало сезона", "Конец сезона"]} rows={rows}/>
        </div>
    )
}

export default LeagueList;