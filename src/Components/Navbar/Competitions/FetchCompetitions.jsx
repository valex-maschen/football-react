import React from 'react';
import cn from 'classnames';
import styles from './FetchCompetitions.module.css';


const FetchingCompetitions = ({ titles, items }) => {
    
    return(
        <div className={styles.Container}>
            <div className={styles.Window}>
                <table>
                    <thead>
                        <tr>
                            {titles.map((title) => {
                                return(
                                    <th className={cn(styles.Header, styles.HeaderPadding)}  key={title}>{title}</th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {items.map((item) =>{
                                return(
                                    <td key={item}>{item}</td>
                                )
                            })}    
                        </tr>    
                    </tbody>
                </table>
            </div>
        </div>
    )
}





export default FetchingCompetitions;