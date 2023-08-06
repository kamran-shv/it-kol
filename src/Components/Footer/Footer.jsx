import React from 'react';
import styles from './Footer.module.css';
import logo from '../../img/logo2_footer.png.webp';
import arrow from '../../img/right-arrow (1).png'
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (<div className={styles.footer}>
            <div className={styles.footer_box}>
                <div className={styles.footer_card}>
                    <NavLink to='/'><img className={styles.logo} src={logo} alt="logo"/></NavLink>
                    <p className={styles.sec_text} style={{lineHeight: '30px'}}>Duis aute irure dolor inasfa
                        reprehenderit in voluptate velit esse cillum</p>
                    <p className={styles.number}>10 (87) 738-3940</p>
                    <a className={styles.mail} href="mailto:contact@it-kol.com">contact@it-kol.com</a>
                </div>
                <div className={styles.footer_card}>
                    <NavLink to='/' className={styles.header}>Navigation</NavLink>
                    <NavLink to='/'  className={styles.sec_text}>Home</NavLink>
                    <NavLink to='/about'  className={styles.sec_text}>About</NavLink>
                    <NavLink to='/services'  className={styles.sec_text}>Services</NavLink>
                    <NavLink to='/blog'  className={styles.sec_text}>Blog</NavLink>
                    <NavLink to='/contact'  className={styles.sec_text}>Contact</NavLink>
                </div>
                <div className={styles.footer_card}>
                    <NavLink to='/' className={styles.header}>Services</NavLink>
                    <NavLink to='/' className={styles.sec_text}>Drone Mapping</NavLink>
                    <NavLink to='/' className={styles.sec_text}>Real State</NavLink>
                    <NavLink to='/' className={styles.sec_text}>Commercial</NavLink>
                    <NavLink to='/' className={styles.sec_text}>Construction</NavLink>
                </div>
                <div className={styles.footer_card}>
                    <NavLink to='/' className={styles.header}>Services</NavLink>
                    <NavLink to='/' className={styles.sec_text}>Drone Mapping</NavLink>
                    <div className={styles.input}>
                        <input placeholder={'Email Adress'} type="text"/>
                        <NavLink to='/'><img src={arrow} alt="arr"/></NavLink>
                    </div>
                    <div className={styles.social}>
                        <NavLink to='/'><i style={{color: '#232F55' }}  className="fab fa-facebook"></i></NavLink>
                        <NavLink to='/'><i style={{color: '#232F55' }} className="fab fa-instagram"></i></NavLink>
                        <NavLink to='/'><i style={{color: '#232F55' }}  className="fab fa-linkedin-in"></i></NavLink>
                        <NavLink to='/'><i style={{color: '#232F55' }}  className="fab fa-youtube"></i></NavLink>
                    </div>
                </div>

            </div>
        </div>);
};

export default Footer;