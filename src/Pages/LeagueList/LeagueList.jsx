import React, {useEffect, useMemo, useState} from 'react';
import axios from 'axios';
import MainTable from '../../Components/MainTable/MainTable.jsx';
import Input from '@material-ui/core/Input';


const LeagueList = () => {
    const [state, setState] = useState([]); 
    const [error, setError] = useState('');
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const url = "/v2/competitions";
          axios.get(url,{headers: {'X-Auth-Token': '4c67bbe4227444039570151af37c1608'}},)
         .then((res) => {
          const data = res.data;
          setState(data.competitions);
        }).catch(err =>{
          setError(err.response.data.message)
      })
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

    const filterRows = rows.filter((row)=> {
      return row.competitionName.toLowerCase().includes(inputValue.toLowerCase());
    })

  const handleChange = (e) => {
      setInputValue(e.target.value)
  }

  console.log(inputValue)
  if (error) {
    return <div>Ошибка: {error}</div>;
  }
     return (
        <div>
            <h1> Список лиг </h1>
            <Input placeholder='Введите название турнира' inputProps={{ 'aria-label': 'description' }} onChange={handleChange} value={ inputValue }/> 
            <MainTable coloums={["Турнир", "Страна", "Начало сезона", "Конец сезона"]} rows={inputValue?filterRows:rows}/>
        </div>
    )
}

export default LeagueList;