import styles from './Header.module.css';
import logo from '../../img/logo.png.png';

export default function Header(){
    return(
        <div className={styles.header_wrapper}>
            <header className={styles.header}>
                <a href="#"><img className={styles.logo} src={logo} alt="logo"/></a>
                <div className={styles.menu}>
                    <a href="#">Home</a>
                    <a href="#">Services</a>
                    <a href="#">About</a>
                    <a href="#">Case Study</a>
                    <div className={styles.menu_dropdown_wrapper}>
                        <a href="#">Blog</a>
                        <div className={styles.menu_dropdown}>
                            <a href="#">Blog</a>
                            <a href="#">Blog Details</a>
                            <a href="#">Element</a>
                        </div>
                    </div>
                    <a href="#">Contact</a>
                </div>
                <button className={styles.menu_btn}>Get Free Quote</button>
            </header>
        </div>
    )
}