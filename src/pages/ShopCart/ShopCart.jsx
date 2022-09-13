import {ShopCartContainer} from "./styles";
import ShopCartHeader from "./ShopCartHeader";
import ShopCartBody from "./ShopCartBody";
import ShopLayout from "../../components/ShopLayout/ShopLayout";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCartThunk} from "../../redux/modules/cartSlice";

const ShopCart = () => {
    const dispatcher = useDispatch();
    const {isLoading, cart, error} = useSelector((state) => state.cartSliceReducer);
    useEffect(() => {
        dispatcher(getCartThunk());
    }, [dispatcher]);
    return <ShopLayout>
        <ShopCartContainer>
            <ShopCartHeader/>
            <ShopCartBody/>
        </ShopCartContainer>
    </ShopLayout>
}

export default ShopCart;