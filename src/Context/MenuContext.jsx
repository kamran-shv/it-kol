import {createContext, useState} from "react";
import styles from "../Components/HambMenu/HambMenu.module.css";

export const MenuContext = createContext();

function MenuProvider(props){

    const [hamb_menu, setHambMenu] = useState(styles.disp_none);
    const [flag, setFlag] = useState(false);

    function changeFlag(){
        if (flag){
            setHambMenu(styles.disp_none);
            setFlag(false);
        }else {
            setHambMenu(styles.hamb_menu);
            setFlag(true);
        }
    }



    return <MenuContext.Provider value={{hamb_menu,flag,changeFlag}}>
        {props.children}
    </MenuContext.Provider>
}


export default MenuProvider;