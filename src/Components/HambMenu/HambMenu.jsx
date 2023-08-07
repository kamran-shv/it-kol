import React, {useContext, useState} from 'react';
import styles from './HambMenu.module.css';
import {NavLink} from "react-router-dom";
import {MenuContext} from "../../Context/MenuContext";
import close from '../../img/cancel.png';

const HambMenu = () => {

    const {hamb_menu} = useContext(MenuContext);
    const {flag} = useContext(MenuContext);
    const {changeFlag}   = useContext(MenuContext);


    return (
        <div className={hamb_menu}>
            <img onClick={changeFlag} className={styles.close} src={close} alt="close"/>
            <div className={styles.hamb_menu_box}>
                <NavLink onClick={changeFlag} className={styles.hamb_item} to='/'>Home</NavLink>
                <NavLink onClick={changeFlag} className={styles.hamb_item} to='/services'>Services</NavLink>
                <NavLink onClick={changeFlag} className={styles.hamb_item} to='/about'>About</NavLink>
                <NavLink onClick={changeFlag} className={styles.hamb_item} to='/case_study'>Case Study</NavLink>
                <NavLink onClick={changeFlag} className={styles.hamb_item} to='/blog'>Blog</NavLink>
                <NavLink onClick={changeFlag} className={styles.hamb_item} to='/contact'>Contact</NavLink>
            </div>
        </div>
    );
};

export default HambMenu;