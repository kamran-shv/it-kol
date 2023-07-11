import React from 'react';
import styles from "./SolutionsShorts.module.css";
import SolutionCard from "../SolutionCard/SolutionCard";
import serv1 from '../../img/services1.svg'
import serv2 from '../../img/services2.svg'
import serv3 from '../../img/services3.svg'

function SolutionsShort() {
    return (
        <div className={styles.solutions_wrapper}>
            <div className={styles.solutions_top}>
                <p>Our Services</p>
                <p>IT solutions for startup <br/> and enterprises</p>
            </div>
            <div className={styles.solutions_bottom}>
                <SolutionCard image = {serv1} title = 'Managed IT services' desc = 'Naxly bring the power of data science and artificial intelligence to every business.'></SolutionCard>
                <SolutionCard image = {serv2} title = 'Backup and recovery' desc = 'Naxly bring the power of data science and artificial intelligence to every business.'></SolutionCard>
                <SolutionCard image = {serv3} title = 'Cyber security' desc = 'Naxly bring the power of data science and artificial intelligence to every business.'></SolutionCard>
            </div>
        </div>
    );
}

export default SolutionsShort;