import styles from './Category.module.css';
import React from 'react';

const Category = (props) => {
    const textOne = props.textOne;
    const textTwo = props.textTwo;
    return (
        <div className={styles.category}>
            <div className={styles.category_box}>
                <p>{textOne}</p>
                <p>{textTwo}</p>
            </div>
        </div>
    );
};

export default Category;