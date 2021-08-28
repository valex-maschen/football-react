import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';


const Navbar = () => (
    
    <nav className={styles.Nav}>
        <ul className={styles.NavItems}>
            <li className={styles.NavItem}>
                <NavLink className={styles.NavLink} to="/" exact>
                   Главная
                </NavLink>
            </li>
            <li className={cn(styles.NavItem, styles.NavItemPadding)}>
                <NavLink className={styles.NavLink} to="/matches" exact>
                    Матчи
                </NavLink>
            </li>
            <li className={cn(styles.NavItem, styles.NavItemPadding)}>
                <NavLink className={styles.NavLink} to="/tours" exact>
                   Турниры
                </NavLink>
            </li>
            <li className={cn(styles.NavItem, styles.NavItemPadding)}>
                <NavLink className={styles.NavLink} to="/teams" exact>
                    Команды
                </NavLink>
            </li>
        </ul>
    </nav>
)
    

export default Navbar;