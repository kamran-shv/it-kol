import React from 'react';
import styles from './SolutionCard.module.css';

const SolutionCard = (props) => {

    let image = props.image;
    let title = props.title;
    let desc = props.desc;

    return (
        <div className={styles.card}>
            <div className={styles.img_wrapper}>
                <img src={image} alt="image"/>
            </div>
            <p>{title}</p>
            <p>{desc}</p>
        </div>
    );
};

export default SolutionCard;