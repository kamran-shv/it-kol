import React from 'react';
import Category from "../Components/Category/Category";
import Media from "../Components/Media/Media";
import Player from "../Components/Player/Player";
import Partner from "../Components/Partner/Partner";
import Grow from "../Components/Grow/Grow";

const About = () => {
    return (
        <div>
            <Category textOne = 'About Us' textTwo = 'Naxly bring the power of data science and artificial intelligence to every business.'></Category>
            <Partner></Partner>
            <Grow></Grow>
            <Media></Media>
            <Player></Player>
        </div>
    );
};

export default About;