import React from 'react';
import styles from './BlogCard.module.css';
import user from '../../img/user (1).png';
import chat from '../../img/bubble-chat.png';

const BlogCard = (props) => {

    const {image, firstText, secondText} = props;

    return (
        <div className={styles.card}>
            <div className={styles.float}>
                <p>15</p>
                <p>Jan</p>
            </div>
            <img src={image} alt="def"/>
            <div className={styles.text_box}>
                <p>{firstText}</p>
                <p>{secondText}</p>
                <div className={styles.text_bottom}>
                    <div className={styles.text_item}>
                        <img src={user} alt="us"/>
                        <p>Travel, Lifestyle</p>
                    </div>
                    <div className={styles.text_item}>
                        <img src={chat} alt="us"/>
                        <p>03 Comments</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;