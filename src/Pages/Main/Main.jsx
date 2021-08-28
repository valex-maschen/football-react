import React from 'react';
import styles from './Main.module.css';
import FetchingCompetitions from '../../Components/Navbar/Competitions/Competitions';

const Main = () => {
    return (
        <div className={styles.Container}>
            <h1> Главная </h1>
            <FetchingCompetitions/>
        </div>
    )
}

export default Main;