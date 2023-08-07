import React from 'react';
import Category from "../Components/Category/Category";
import BlogCard from "../Components/BlogCard/BlogCard";
import photo from '../../src/img/single_blog_1.jpg.jpg';
import styles from './Blog.module.css';

const Blog = () => {
    return (
        <div>
            <Category textOne = 'Blog' textTwo = 'Naxly bring the power of data science and artificial intelligence to every business.'></Category>
            <div className={styles.box}>
                <div className={styles.main_wrapper}>
                    <div className={styles.left}>
                        <BlogCard image={photo} firstText={'Google inks pact for new 35-storey office'} secondText={'That dominion stars lights dominion divide years for fourth have don\'t stars is that he earth it first without heaven in place seed it second morning saying.'}></BlogCard>
                        <BlogCard image={photo} firstText={'Google inks pact for new 35-storey office'} secondText={'That dominion stars lights dominion divide years for fourth have don\'t stars is that he earth it first without heaven in place seed it second morning saying.'}></BlogCard>
                        <BlogCard image={photo} firstText={'Google inks pact for new 35-storey office'} secondText={'That dominion stars lights dominion divide years for fourth have don\'t stars is that he earth it first without heaven in place seed it second morning saying.'}></BlogCard>
                        <BlogCard image={photo} firstText={'Google inks pact for new 35-storey office'} secondText={'That dominion stars lights dominion divide years for fourth have don\'t stars is that he earth it first without heaven in place seed it second morning saying.'}></BlogCard>
                        <BlogCard image={photo} firstText={'Google inks pact for new 35-storey office'} secondText={'That dominion stars lights dominion divide years for fourth have don\'t stars is that he earth it first without heaven in place seed it second morning saying.'}></BlogCard>
                        <BlogCard image={photo} firstText={'Google inks pact for new 35-storey office'} secondText={'That dominion stars lights dominion divide years for fourth have don\'t stars is that he earth it first without heaven in place seed it second morning saying.'}></BlogCard>
                    </div>
                    <div className={styles.right}>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;