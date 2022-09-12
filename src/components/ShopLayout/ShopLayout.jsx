import {useState} from "react";
import GlobalState from "../../shared/GlobalStates";
import ShopLayoutContainer from "./styles";

const ShopLayout = ({children}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return <GlobalState.Provider value={{isMenuOpen, setIsMenuOpen}}>
        <ShopLayoutContainer>
            {children}
        </ShopLayoutContainer>
    </GlobalState.Provider>;
}

export default ShopLayout;