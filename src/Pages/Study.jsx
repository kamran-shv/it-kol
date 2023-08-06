import React from 'react';
import Category from "../Components/Category/Category";
import Stuffs from "../Components/Stuffs/Stuffs";
import Media from "../Components/Media/Media";
import Player from "../Components/Player/Player";

const Study = () => {
    return (
        <div>
            <Category textOne = 'Case Study' textTwo = 'Naxly bring the power of data science and artificial intelligence to every business.'></Category>
            <Stuffs status = {true}></Stuffs>
            <Media></Media>
            <Player></Player>
        </div>
    );
};

export default Study;