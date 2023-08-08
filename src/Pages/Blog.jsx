import React, {useEffect, useState} from 'react';
import Category from "../Components/Category/Category";
import BlogCard from "../Components/BlogCard/BlogCard";
import styles from './Blog.module.css';
import StuffCard from "../Components/StuffCard/StuffCard";
import image1 from "../img/stuffs1.jpg.png";
import image2 from "../img/stuffs2.jpg.png";
import image3 from "../img/stuffs3.jpg.png";

const Blog = () => {

    const [blogs, setBlogs] = useState(null);

    useEffect(()=>{
        fetch('https://same-unmarred-santanaraptor.glitch.me/games')
            .then(res =>{
                return res.json();
            })
            .then(data =>{
                console.log(data);
                setBlogs(data);
            })
    },[])

    return (
        <div>
            <Category textOne = 'Blog' textTwo = 'Naxly bring the power of data science and artificial intelligence to every business.'></Category>
            <div className={styles.box}>
                <div className={styles.main_wrapper}>
                    <div className={styles.left}>
                        {blogs && blogs.map( blog => <BlogCard key={blog.key} image={blog.img} firstText={blog.textOne} secondText={blog.textTwo}></BlogCard>)}
                    </div>
                    <div className={styles.right}>
                        <StuffCard image={image1} text={'The Security Risks of Changing Package Owners'}></StuffCard>
                        <StuffCard image={image2} text={'The Security Risks of Changing Package Owners'}></StuffCard>
                        <StuffCard image={image3} text={'The Security Risks of Changing Package Owners'}></StuffCard>
                        <StuffCard image={image1} text={'The Security Risks of Changing Package Owners'}></StuffCard>
                        <StuffCard image={image2} text={'The Security Risks of Changing Package Owners'}></StuffCard>
                        <StuffCard image={image2} text={'The Security Risks of Changing Package Owners'}></StuffCard>
                        <StuffCard image={image3} text={'The Security Risks of Changing Package Owners'}></StuffCard>
                        <StuffCard image={image1} text={'The Security Risks of Changing Package Owners'}></StuffCard>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;