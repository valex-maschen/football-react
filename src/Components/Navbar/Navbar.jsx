import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import Search from '../../Components/Search/Search.jsx';
import { Routes } from '../../constants/Routes';


const Navbar = () => (
    
    <nav className={styles.Nav}>
        <ul className={styles.NavItems}>
            <li className={styles.NavItem}>
                <NavLink className={styles.NavLink} to={Routes.LEAGUES} exact>
                   Лиги
                </NavLink>
            </li>
            <li className={cn(styles.NavItem, styles.NavItemPadding)}>
                <NavLink className={styles.NavLink} to={Routes.MATCH} exact>
                    Матчи
                </NavLink>
            </li>
            <li className={cn(styles.NavItem, styles.NavItemPadding)}>
                <NavLink className={styles.NavLink} to={Routes.TEAM} exact>
                    Команды
                </NavLink>
            </li>
        </ul>
        <Search/>
    </nav>
)
    

export default Navbar;



