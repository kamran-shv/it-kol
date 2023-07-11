import React, {useState} from 'react';
import styles from './Partner.module.css';
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Partner = () => {
    const [counterOn, setCounterOn] = useState(false);
    return (<div className={styles.partner_wrapper}>
        <div className={styles.partner_container}>
            <div className={styles.partner_top}>
                <p>ITKol - Partner for Your Business</p>
                <p>We understand the complexities of modern markets and translate them into real business solutions
                    for automotive, financial, insurance, pharma & life sciences, and real estate with more to
                    come.</p>
            </div>
            <button className={styles.menu_btn}>Get Free Quote</button>
            <ScrollTrigger onEnter={() => setCounterOn(true)}>
                <div className={styles.partner_bottom}>
                    <div className={styles.counter_wrapper}>
                        {counterOn && <CountUp end={2500} duration={2} separator={''} suffix={'+'}></CountUp>}
                        <p>We understand the complexities of modern markets</p>
                    </div>
                    <div className={styles.counter_wrapper}>
                        {counterOn && <CountUp end={350} duration={2} separator={''} suffix={'+'}></CountUp>}
                        <p>We understand the complexities of modern markets</p>
                    </div>
                    <div className={styles.counter_wrapper}>
                        {counterOn && <CountUp end={20} duration={2} separator={''} suffix={'+'}></CountUp>}
                        <p>We understand the complexities of modern markets</p>
                    </div>
                </div>
            </ScrollTrigger>
        </div>
    </div>);
};

export default Partner;