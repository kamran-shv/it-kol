import React from 'react';
import styles from './Footer.module.css';
import logo from '../../img/logo2_footer.png.webp';
import arrow from '../../img/right-arrow (1).png'
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (<div className={styles.footer}>
            <div className={styles.footer_box}>
                <div className={styles.footer_card}>
                    <a href="#"><img className={styles.logo} src={logo} alt="logo"/></a>
                    <p className={styles.sec_text} style={{lineHeight: '30px'}}>Duis aute irure dolor inasfa
                        reprehenderit in voluptate velit esse cillum</p>
                    <p className={styles.number}>10 (87) 738-3940</p>
                    <a className={styles.mail} href="mailto:contact@it-kol.com">contact@it-kol.com</a>
                </div>
                <div className={styles.footer_card}>
                    <a href="#" className={styles.header}>Navigation</a>
                    <NavLink to='/'  className={styles.sec_text}>Home</NavLink>
                    <NavLink to='/about'  className={styles.sec_text}>About</NavLink>
                    <NavLink to='/services'  className={styles.sec_text}>Services</NavLink>
                    <NavLink to='/blog'  className={styles.sec_text}>Blog</NavLink>
                    <NavLink to='/contact'  className={styles.sec_text}>Contact</NavLink>
                </div>
                <div className={styles.footer_card}>
                    <a href="#" className={styles.header}>Services</a>
                    <a href="#" className={styles.sec_text}>Drone Mapping</a>
                    <a href="#" className={styles.sec_text}>Real State</a>
                    <a href="#" className={styles.sec_text}>Commercial</a>
                    <a href="#" className={styles.sec_text}>Construction</a>
                </div>
                <div className={styles.footer_card}>
                    <a href="#" className={styles.header}>Services</a>
                    <a href="#" className={styles.sec_text}>Drone Mapping</a>
                    <div className={styles.input}>
                        <input placeholder={'Email Adress'} type="text"/>
                        <a href="#"><img src={arrow} alt="arr"/></a>
                    </div>
                    <div className={styles.social}>
                        <a href="https://bit.ly/sai4ull"><i style={{color: '#232F55' }}  className="fab fa-facebook"></i></a>
                        <a href="#"><i style={{color: '#232F55' }} className="fab fa-instagram"></i></a>
                        <a href="#"><i style={{color: '#232F55' }}  className="fab fa-linkedin-in"></i></a>
                        <a href="#"><i style={{color: '#232F55' }}  className="fab fa-youtube"></i></a>
                    </div>
                </div>

            </div>
        </div>);
};

export default Footer;