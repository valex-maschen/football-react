import React, {useEffect, useState} from 'react';
import styles from './Main.module.css';
import axios from 'axios';
import FetchingCompetitions from '../../Components/Navbar/Competitions/FetchCompetitions.jsx';

const Main = () => {
    const [State, setState] = useState();  

    useEffect(() => {
        const url = "/v2/competitions";
        axios.get(url,{headers: {'X-Auth-Token': '4c67bbe4227444039570151af37c1608'}},)
        .then((res) => {
          const data = res.data;
          setState(data);
        });
      }, [setState]);
 

    return (
        <div className={styles.Container}>
            <h1> Главная </h1>
            <FetchingCompetitions titles={["Турнир", "Страна", "Начало сезона", "Конец сезона"]} items={[]}/>
        </div>
    )
}

export default Main;