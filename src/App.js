import './App.css';
import Header from "./Components/Header/Header";
import HeadBanner from "./Components/HeadBanner/HeadBanner";
import SolutionsShort from "./Components/SolutionsShort/SolutionsShort";
import Grow from "./Components/Grow/Grow";
import Industries from "./Components/Industries/Industries";
import Partner from "./Components/Partner/Partner";
import Stuffs from "./Components/Stuffs/Stuffs";

function App() {
    return (<>
        <Header></Header>
        <HeadBanner></HeadBanner>
        <SolutionsShort></SolutionsShort>
        <Grow></Grow>
        <Industries></Industries>
        <Partner></Partner>
        <Stuffs></Stuffs>
    </>);
}

export default App;
