import React from 'react';
import styles from './Grow.module.css';
import team from '../../img/about1.jpg.png';
import not from '../../img/notification1.svg';
import notif from '../../img/notification.svg';

const Grow = () => {
    return (
        <div className={styles.grow_wrapper}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <img src={team} alt="team"/>
                    <div className={styles.floatbox}>
                        <img src={notif} alt="notif"/>
                        <div className={styles.card_text}>
                            <p>New Features</p>
                            <p>You have received notification</p>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <p>Grow your <br/> business fast.</p>
                    <div className={styles.r_cards}>
                        <div className={styles.r_card}>
                            <img src={not} alt="note"/>
                            <div className={styles.r_card_text}>
                                <p>Engage Teammates</p>
                                <p>Naxly bring the power of data science and artificial intelligence to every business.</p>
                            </div>
                        </div>
                        <div className={styles.r_card}>
                            <img src={not} alt="note"/>
                            <div className={styles.r_card_text}>
                                <p>Engage Teammates</p>
                                <p>Naxly bring the power of data science and artificial intelligence to every business.</p>
                            </div>
                        </div>
                    </div>
                    <button className={styles.btn}>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Grow;