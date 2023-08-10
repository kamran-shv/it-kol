import React from 'react';
import styles from './Contact.module.css';
import home from '../../img/home.png';
import smart from '../../img/smartphone.png';
import mail from '../../img/email (2).png';


const Contact = () => {
    return (
        <div className={styles.contact_wrapper}>
            <div className={styles.contact_box}>
                <div className={styles.top}>

                    <div style={{width: '100%'}}>
                        <iframe width="100%" height="400" frameBorder="0" scrolling="no" marginHeight="0"
                                marginWidth="0"
                                src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            <a href="https://www.maps.ie/population/">Population Estimator map</a></iframe>
                    </div>

                </div>
                <div className={styles.bottom}>
                    <div className={styles.grid}>
                        <p>Get in Touch</p>
                        <textarea placeholder={'Enter message'} className={styles.message}/>
                        <input placeholder={'Name'} className={styles.name} type="text"/>
                        <input placeholder={'Email'} className={styles.email} type="text"/>
                        <input placeholder={'Subject'} className={styles.subject} type="text"/>
                        <button>SEND</button>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.info}>
                            <img src={home} alt="icon"/>
                            <div><p>Buttonwood, California.</p><p>Rosemead, CA 91770</p></div>
                        </div>
                        <div className={styles.info}>
                            <img src={smart} alt="icon"/>
                            <div><p>+1 253 565 2365</p><p>Mon to Fri 9am to 6pm</p></div>
                        </div>
                        <div className={styles.info}>
                            <img src={mail} alt="icon"/>
                            <div><p>support@colorlib.com</p><p>Send us your query anytime!</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;