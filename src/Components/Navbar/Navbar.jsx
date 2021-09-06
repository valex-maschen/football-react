import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
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
                    Матчи команды
                </NavLink>
            </li>
            <li className={cn(styles.NavItem, styles.NavItemPadding)}>
                <NavLink className={styles.NavLink} to={Routes.TEAM} exact>
                    Команды
                </NavLink>
            </li>
            <li className={cn(styles.NavItem, styles.NavItemPadding)}>
                <NavLink className={styles.NavLink} to={Routes.COMP} exact>
                    Матчи лиги
                </NavLink>
            </li>
        </ul>
    </nav>
)
    

export default Navbar;



