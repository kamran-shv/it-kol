import styles from './IndustriesCard.module.css';

import React from 'react';

const IndustriesCard = (props) => {

    let image = props.image;
    let text = props.text;

    return (
        <a href='#'>
            <div className={styles.card}>
                <img className={styles.pic} src={image} alt="img"/>
                <p>{text}</p>
            </div>
        </a>
    );
};

export default IndustriesCard;