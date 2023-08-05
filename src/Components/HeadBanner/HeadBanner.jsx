import styles from "./HeadBanner.module.css";
import banner from "../../img/hero-img.png.png";
import {NavLink} from "react-router-dom";


export default function HeadBanner(){
    return(
        <div className={styles.head_banner_wrapper}>
            <img src={banner} alt="banner"/>
            <div className={styles.banner_content}>
                <p>We provide best <br/> IT solution</p>
                <p>Naxly bring the power of data science and artificial intelligence to every business.</p>
                <NavLink to='/services' className={styles.link}>Our Services</NavLink>
            </div>
        </div>
    )
}