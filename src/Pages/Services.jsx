import React from 'react';
import SolutionsShort from "../Components/SolutionsShort/SolutionsShort";
import Grow from "../Components/Grow/Grow";
import Industries from "../Components/Industries/Industries";
import Partner from "../Components/Partner/Partner";
import Stuffs from "../Components/Stuffs/Stuffs";
import Media from "../Components/Media/Media";
import Player from "../Components/Player/Player";
import Category from "../Components/Category/Category";

const Services = () => {
    return (
        <div>
            <Category textOne = 'Services' textTwo = 'Naxly bring the power of data science and artificial intelligence to every business.'></Category>
            <SolutionsShort status = {true}></SolutionsShort>
            <Industries></Industries>
            <Stuffs></Stuffs>
            <Media></Media>
            <Player></Player>
        </div>
    );
};

export default Services;