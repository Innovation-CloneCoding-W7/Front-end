import {ShopMainContainer} from "./styles";
import ShopMainCarousel from "./ShopMainCarousel";
import ShopMainShowcase from "./ShopMainShowcase";

const ShopMain = () => {
    return <ShopMainContainer>
        <ShopMainCarousel/>
        <ShopMainShowcase/>
    </ShopMainContainer>
}

export default ShopMain;