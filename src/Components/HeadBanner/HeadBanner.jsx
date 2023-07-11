import styles from "./HeadBanner.module.css";
import banner from "../../img/hero-img.png.png";


export default function HeadBanner(){
    return(
        <div className={styles.head_banner_wrapper}>
            <img src={banner} alt="banner"/>
            <div className={styles.banner_content}>
                <p>We provide best <br/> IT solution</p>
                <p>Naxly bring the power of data science and artificial intelligence to every business.</p>
                <button>Our Services</button>
            </div>
        </div>
    )
}