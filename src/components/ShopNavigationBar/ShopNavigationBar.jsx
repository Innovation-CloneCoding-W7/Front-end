import {
    ShopNavigationBarCenter,
    ShopNavigationBarContainer,
    ShopNavigationBarLeft,
    ShopNavigationBarRight
} from "./styles";
import {Link} from "react-router-dom";
import {FaSearch, FaShoppingCart} from "react-icons/fa";
import {useContext} from "react";
import GlobalState from "../../shared/GlobalStates";

const ShopNavigationBar = () => {
    let {setIsMenuOpen} = useContext(GlobalState);
    const menuClickHandler = () => {
        setIsMenuOpen(true);
    }
    return <ShopNavigationBarContainer>
        <ShopNavigationBarLeft>
            <Link to="/">
                <img src="/assets/Logo.png" alt="Logo"/>
            </Link>
            <Link to="/shop">Shop</Link>
        </ShopNavigationBarLeft>
        <ShopNavigationBarCenter>
            <Link to="/shop/category/charging">충전</Link>
            <Link to="/shop/category/vehicle-accessories">차량 액세서리</Link>
            <Link to="/shop/category/apparel">의류</Link>
            <Link to="/shop/category/lifestyle">라이프스타일</Link>
            <Link to="/shop/category/service-installables">충전</Link>
        </ShopNavigationBarCenter>
        <ShopNavigationBarRight>
            <FaSearch/>
            <FaShoppingCart/>
            <p onClick={menuClickHandler}>메뉴</p>
        </ShopNavigationBarRight>
    </ShopNavigationBarContainer>
}

export default ShopNavigationBar;