import React, {useContext} from 'react';
import {ModalContext} from "../../Context/ModalContext";
import styles from './Media.module.css';
import play from '../../img/play (1).png'
import {NavLink} from "react-router-dom";

const Media = () => {

    const {modal, close} = useContext(ModalContext);

    return (<div className={styles.media_wrapper}>
            <div className={styles.media}>
                <button onClick={close} style={{zIndex: 2, borderRadius: '50%', border: 0}}>
                    <div className={styles.button}>
                        <img src={play} alt="play"/>
                    </div>
                </button>
                <p>Innovative IT Solution for your <br/> Business & Startup</p>
                    <NavLink to='/contact'>
                        <button className={styles.btn}>Get Started Now</button>
                    </NavLink>
            </div>
        </div>);
};

export default Media;