import {ShopNavigationBarContainer, ShopNavigationBarLeft} from "./styles";
import {Link} from "react-router-dom";

const ShopNavigationBar = () => {
    return <ShopNavigationBarContainer>
        <ShopNavigationBarLeft>
            <Link to="/">
                <img src="/assets/Logo.png" alt="Logo"/>
            </Link>
            <Link to="/shop">Shop</Link>
        </ShopNavigationBarLeft>
    </ShopNavigationBarContainer>
}

export default ShopNavigationBar;