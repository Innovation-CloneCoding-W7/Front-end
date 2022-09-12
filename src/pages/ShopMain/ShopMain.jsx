import {ShopMainContainer} from "./styles";
import ShopMainCarousel from "./ShopMainCarousel";
import ShopMainShowcase from "./ShopMainShowcase";
import ShopFooter from "../../components/ShopFooter/ShopFooter";
import ShopNavigationBar from "../../components/ShopNavigationBar/ShopNavigationBar";
import ShopLayout from "../../components/ShopLayout/ShopLayout";

const ShopMain = () => {
    return <ShopLayout>
        <ShopMainContainer>
            <ShopNavigationBar/>
            <ShopMainCarousel/>
            <ShopMainShowcase/>
            <ShopFooter/>
        </ShopMainContainer>
    </ShopLayout>
}

export default ShopMain;