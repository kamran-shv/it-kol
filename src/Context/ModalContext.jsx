import {createContext, useState} from "react";

export const ModalContext = createContext();

function ModalProvider(props){

    let [modal, setModal] = useState(false);
    let close = () => setModal(!modal);


    return <ModalContext.Provider value={{modal,close}}>
        {props.children}
    </ModalContext.Provider>
}


export default ModalProvider;