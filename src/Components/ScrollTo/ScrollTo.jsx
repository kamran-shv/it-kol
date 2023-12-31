import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";

const ScrollTo = () => {
    const {pathname} = useLocation();
    useEffect(() =>{
        window.scrollTo({top:0,})
    },[pathname]);
    return null;
};

export default ScrollTo;