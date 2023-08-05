import styles from './Header.module.css';
import logo from '../../img/logo.png.png';
import {NavLink} from "react-router-dom";
import {useState} from "react";

export default function Header(){

    const [flag, setFlag] = useState(false);

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
                <a href="#"><img className={styles.logo} src={logo} alt="logo"/></a>
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
            </header>
        </div>
    )
}