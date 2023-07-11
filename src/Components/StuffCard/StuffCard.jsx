import React from 'react';
import styles from './StuffCard.module.css';

const StuffCard = (props) => {
    let image = props.image;
    let text = props.text;

    return (
        <div className={styles.card}>
            <div className={styles.box}>
                    <div className={styles.image_content}>
                        <div className={styles.circle}></div>
                        <p>INSPIRE</p>
                        <p>DESIGN STUDIO</p>
                    </div>
                    <img src={image} alt="img"/>
            </div>
            <p>{text}</p>
        </div>
    );
};

export default StuffCard;