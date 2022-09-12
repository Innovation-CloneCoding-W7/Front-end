import {ShopMainContainer} from "./styles";
import ShopMainCarousel from "./ShopMainCarousel";
import ShopMainShowcase from "./ShopMainShowcase";
import ShopFooter from "../../components/ShopFooter/ShopFooter";
import ShopNavigationBar from "../../components/ShopNavigationBar/ShopNavigationBar";
import {useState} from "react";
import OverlayMenu from "../../components/OverlayMenu/OverlayMenu";
import GlobalState from "../../shared/GlobalStates";

const ShopMain = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return <GlobalState.Provider value={{
        isMenuOpen,
        setIsMenuOpen
    }}>
        <ShopMainContainer>
            <ShopNavigationBar/>
            <ShopMainCarousel/>
            <ShopMainShowcase/>
            <ShopFooter/>
            <OverlayMenu/>
        </ShopMainContainer>
    </GlobalState.Provider>
}

export default ShopMain;