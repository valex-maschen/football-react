import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import Search from '../../Components/Search/Search.jsx';

const MATCHES = '/matches';
const MATCH = `${MATCHES}/:id`;
const TEAMS = '/teams';
const TEAM = `${TEAMS}/:id`;
export const Routes = {
    MATCHES,
    MATCH,
    TEAMS,
    TEAM
};
const Navbar = () => (
    
    <nav className={styles.Nav}>
        <ul className={styles.NavItems}>
            <li className={styles.NavItem}>
                <NavLink className={styles.NavLink} to="/" exact>
                   Главная
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



