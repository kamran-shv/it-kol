import './App.css';
import ModalProvider from "./Context/ModalContext";
import Header from "./Components/Header/Header";
import HeadBanner from "./Components/HeadBanner/HeadBanner";
import SolutionsShort from "./Components/SolutionsShort/SolutionsShort";
import Grow from "./Components/Grow/Grow";
import Industries from "./Components/Industries/Industries";
import Partner from "./Components/Partner/Partner";
import Stuffs from "./Components/Stuffs/Stuffs";
import Media from "./Components/Media/Media";
import Player from "./Components/Player/Player";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import {useEffect} from "react";
import ScrollTo from "./Components/ScrollTo/ScrollTo";
import About from "./Pages/About";


function App() {
    return (
        <BrowserRouter>
                <ModalProvider>
                    <Header></Header>
                    <ScrollTo></ScrollTo>
                        <Routes>
                                <Route path='/' element={<Home/>}></Route>
                                <Route path='/services' element={<Services/>}></Route>
                                <Route path='/about' element={<About/>}></Route>
                                <Route path='/case_study' element={<Home/>}></Route>
                                <Route path='/blog' element={<Home/>}></Route>
                                <Route path='/contact' element={<Home/>}></Route>
                        </Routes>
                    <Footer></Footer>
                </ModalProvider>
        </BrowserRouter>
    );
}

export default App;
