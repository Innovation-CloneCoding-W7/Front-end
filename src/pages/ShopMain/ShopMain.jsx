import {ShopMainContainer} from "./styles";
import ShopMainCarousel from "./ShopMainCarousel";
import ShopMainShowcase from "./ShopMainShowcase";
import ShopFooter from "../../components/ShopFooter/ShopFooter";
import ShopNavigationBar from "../../components/ShopNavigationBar/ShopNavigationBar";
import OverlayMenu from "../../components/OverlayMenu/OverlayMenu";
import ShopLayout from "../../components/ShopLayout/ShopLayout";

const ShopMain = () => {
    return <ShopLayout>
        <ShopMainContainer>
            <ShopNavigationBar/>
            <ShopMainCarousel/>
            <ShopMainShowcase/>
            <ShopFooter/>
            <OverlayMenu/>
        </ShopMainContainer>
    </ShopLayout>
}

export default ShopMain;