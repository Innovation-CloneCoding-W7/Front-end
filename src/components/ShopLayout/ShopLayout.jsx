import {useState} from "react";
import GlobalState from "../../shared/GlobalStates";
import ShopLayoutContainer from "./styles";
import ShopNavigationBar from "../ShopNavigationBar/ShopNavigationBar";

const ShopLayout = ({children}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const containerClickHandler = () => {
        setIsMenuOpen(false);
    }
    return <GlobalState.Provider value={{isMenuOpen, setIsMenuOpen}}>
        <ShopNavigationBar/>
        <ShopLayoutContainer $isBlurred={isMenuOpen} onClick={containerClickHandler}>
            {children}
        </ShopLayoutContainer>
    </GlobalState.Provider>;
}

export default ShopLayout;