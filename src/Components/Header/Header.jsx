import styles from './Header.module.css';
import logo from '../../img/logo.png.png';
import {NavLink} from "react-router-dom";
import {useContext, useState} from "react";
import {MenuContext} from "../../Context/MenuContext";
import close from '../../img/menu-button-of-three-horizontal-lines.png'

export default function Header(){

    const [flag, setFlag] = useState(false);
    const {changeFlag} = useContext(MenuContext);

    window.addEventListener('scroll', () =>{
        if (window.scrollY >= 660){
            setFlag(true);
        }else {
            setFlag(false);
        }
    })

    return(
        <div className={flag ? styles.header_wrapper_fixed:styles.header_wrapper}>
            <header className={styles.header}>
                <NavLink to="/"><img className={styles.logo} src={logo} alt="logo"/></NavLink>
                <div className={styles.menu}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/case_study">Case Study</NavLink>
                    <div className={styles.menu_dropdown_wrapper}>
                        <NavLink to="/blog">Blog</NavLink>
                        <div className={styles.menu_dropdown}>
                            <NavLink to="/blog">Blog</NavLink>
                            <NavLink to="/blog">Blog Details</NavLink>
                            <NavLink to="/blog">Element</NavLink>
                        </div>
                    </div>
                    <NavLink to="/contact">Contact</NavLink>
                </div>
                <button className={styles.menu_btn}>Get Free Quote</button>
                <img className={styles.ham_btn} onClick={changeFlag} src={close} alt="img"/>
            </header>
        </div>
    )
}