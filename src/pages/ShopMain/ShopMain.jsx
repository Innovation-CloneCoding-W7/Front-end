import {ShopMainContainer} from "./styles";
import ShopMainCarousel from "./ShopMainCarousel";
import ShopMainShowcase from "./ShopMainShowcase";
import ShopFooter from "../../components/ShopFooter/ShopFooter";

const ShopMain = () => {
    return <ShopMainContainer>
        <ShopMainCarousel/>
        <ShopMainShowcase/>
        <ShopFooter/>
    </ShopMainContainer>
}

export default ShopMain;