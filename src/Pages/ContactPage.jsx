import React from 'react';
import Category from "../Components/Category/Category";
import Contact from "../Components/Contact/Contact";

const ContactPage = () => {
    return (
        <div>
            <Category textOne = 'Contact Us' textTwo = 'Naxly bring the power of data science and artificial intelligence to every business.'></Category>
            <Contact></Contact>
        </div>
    );
};

export default ContactPage;