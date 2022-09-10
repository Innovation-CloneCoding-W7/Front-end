import {ShopMainContainer} from "./styles";
import ShopMainCarousel from "./ShopMainCarousel";
import ShopMainShowcase from "./ShopMainShowcase";
import ShopFooter from "../../components/ShopFooter/ShopFooter";
import ShopNavigationBar from "../../components/ShopNavigationBar/ShopNavigationBar";

const ShopMain = () => {
    return <ShopMainContainer>
        <ShopNavigationBar/>
        <ShopMainCarousel/>
        <ShopMainShowcase/>
        <ShopFooter/>
    </ShopMainContainer>
}

export default ShopMain;