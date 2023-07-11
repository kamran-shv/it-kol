import React from 'react';
import styles from './Partner.module.css';

const Partner = () => {
    return (<div className={styles.partner_wrapper}>
        <div className={styles.partner_container}>
            <div className={styles.partner_top}>
                <p>ITKol - Partner for Your Business</p>
                <p>We understand the complexities of modern markets and translate them into real business solutions
                    for automotive, financial, insurance, pharma & life sciences, and real estate with more to
                    come.</p>
            </div>
            <button className={styles.menu_btn}>Get Free Quote</button>
            <div className={styles.partner_bottom}>
                <div className={styles.counter_wrapper}>
                    <div className={styles.counter}>
                        <p className={styles.number}></p>
                        <p>+</p>
                    </div>
                    <p>We understand the complexities of modern markets</p>
                </div>
                <div className={styles.counter_wrapper}>
                    <div className={styles.counter}>
                        <p className={styles.number}></p>
                        <p>+</p>
                    </div>
                    <p>We understand the complexities of modern markets</p>
                </div>
                <div className={styles.counter_wrapper}>
                    <div className={styles.counter}>
                        <p className={styles.number}></p>
                        <p>+</p>
                    </div>
                    <p>We understand the complexities of modern markets</p>
                </div>
            </div>
        </div>
    </div>);
};

export default Partner;