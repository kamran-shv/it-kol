import React from 'react';
import HeadBanner from "../Components/HeadBanner/HeadBanner";
import SolutionsShort from "../Components/SolutionsShort/SolutionsShort";
import Grow from "../Components/Grow/Grow";
import Industries from "../Components/Industries/Industries";
import Partner from "../Components/Partner/Partner";
import Stuffs from "../Components/Stuffs/Stuffs";
import Media from "../Components/Media/Media";
import Player from "../Components/Player/Player";

const Home = () => {
    return (
        <div>
            <HeadBanner></HeadBanner>
            <SolutionsShort status = {false}></SolutionsShort>
            <Grow></Grow>
            <Industries></Industries>
            <Partner></Partner>
            <Stuffs></Stuffs>
            <Media></Media>
            <Player></Player>
        </div>
    );
};

export default Home;