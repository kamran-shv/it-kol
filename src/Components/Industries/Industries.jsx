import React from 'react';
import styles from './Industries.module.css';
import IndustriesCard from "../IndustriesCard/IndustriesCard";
import stack1 from '../../img/stack1.svg';
import stack2 from '../../img/stack2.svg';
import stack3 from '../../img/stack3.svg';
import stack4 from '../../img/stack4.svg';

const Industries = (props) => {
    return (<div className={styles.industries_wrapper}>
            <div className={styles.industries_container}>
                <div className={styles.industries_top}>
                    <div className={styles.top_left}>
                        <p>Industries We Serve</p>
                        <p>IT services customized <br/> for your industry</p>
                    </div>
                    <p>No matter the business, NanoSoft has you covered with industry compliant solutions, customized to
                        your company’s specific needs.</p>
                </div>
                <div className={styles.industries_middle}>
                    <IndustriesCard image={stack1} text={`Industries & Manufacturing`}></IndustriesCard>
                    <IndustriesCard image={stack2} text='Education & Health'></IndustriesCard>
                    <IndustriesCard image={stack3} text='Retail & Ecommerce'></IndustriesCard>
                    <IndustriesCard image={stack4} text='Travel & Hospitality'></IndustriesCard>
                </div>
                <p className={styles.industries_bottom}>Need a Technology support? <a href="#">Get Started Now</a></p>
            </div>
        </div>);
};

export default Industries;