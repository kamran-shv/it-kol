import React, {useState, useContext} from 'react';
import styles from './Player.module.css';
import {ModalContext} from "../../Context/ModalContext";
import cancel from '../../img/cancel.png';


const Player = () => {

    const {close} = useContext(ModalContext);
    const {modal} = useContext(ModalContext);


    return (<>

            {modal && (<div className={styles.player}>
                    <button className={styles.close} onClick={close}><img src={cancel} alt="close"/></button>
                    <iframe className={styles.frame} width="560" height="315" src="https://www.youtube.com/embed/il986P_ooEE?autoplay=1"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </div>)}


        </>);
};

export default Player;