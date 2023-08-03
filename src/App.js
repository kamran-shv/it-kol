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


function App() {
    return (<ModalProvider>
            <Header></Header>
            <HeadBanner></HeadBanner>
            <SolutionsShort></SolutionsShort>
            <Grow></Grow>
            <Industries></Industries>
            <Partner></Partner>
            <Stuffs></Stuffs>
            <Media></Media>
            <Player></Player>
            <Footer></Footer>
        </ModalProvider>);
}

export default App;
