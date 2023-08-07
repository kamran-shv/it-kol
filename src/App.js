import './App.css';
import ModalProvider from "./Context/ModalContext";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import ScrollTo from "./Components/ScrollTo/ScrollTo";
import About from "./Pages/About";
import Study from "./Pages/Study";
import HambMenu from "./Components/HambMenu/HambMenu";
import MenuProvider from "./Context/MenuContext";
import Blog from "./Pages/Blog";


function App() {
    return (
        <BrowserRouter>
            <MenuProvider>
                <ModalProvider>
                    <ScrollTo></ScrollTo>
                    <HambMenu></HambMenu>
                    <Header></Header>
                    <Routes>
                        <Route path='/' element={<Home/>}></Route>
                        <Route path='/services' element={<Services/>}></Route>
                        <Route path='/about' element={<About/>}></Route>
                        <Route path='/case_study' element={<Study/>}></Route>
                        <Route path='/blog' element={<Blog/>}></Route>
                        <Route path='/contact' element={<Home/>}></Route>
                    </Routes>
                    <Footer></Footer>
                </ModalProvider>
            </MenuProvider>
        </BrowserRouter>
    );
}

export default App;
