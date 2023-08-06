import React from 'react';
import styles from './Stuffs.module.css';
import StuffCard from "../StuffCard/StuffCard";
import image1 from '../../img/stuffs1.jpg.png';
import image2 from '../../img/stuffs2.jpg.png';
import image3 from '../../img/stuffs3.jpg.png';

const Stuffs = (props) => {
    let status = props.status;

    return (<div className={styles.stuff_wrapper}>
            <div className={styles.stuff_container}>
                <p>Some of Our Great Stuffs</p>
                <div className={styles.stuff_items}>
                    <StuffCard image={image1} text={'The Security Risks of Changing Package Owners'}></StuffCard>
                    <StuffCard image={image2} text={'The Security Risks of Changing Package Owners'}></StuffCard>
                    <StuffCard image={image3} text={'The Security Risks of Changing Package Owners'}></StuffCard>
                </div>
                {status ? <div className={styles.stuff_items}>
                    <StuffCard image={image2} text={'The Security Risks of Changing Package Owners'}></StuffCard>
                    <StuffCard image={image3} text={'The Security Risks of Changing Package Owners'}></StuffCard>
                    <StuffCard image={image1} text={'The Security Risks of Changing Package Owners'}></StuffCard>
                </div> : ''}
            </div>
        </div>);
};

export default Stuffs;