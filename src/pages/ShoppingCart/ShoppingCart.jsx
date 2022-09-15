import {ShoppingCartCheck, ShoppingCartContainer, ShoppingCartList} from "./styles";
import ShoppingCartItem from "./ShoppingCartItem";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getSomeProductsThunk} from "../../redux/modules/productSlice";

const ShoppingCart = ({localCart}) => {
    const response = useSelector(state => state.productSliceReducer);
    const productNames = localCart.map(cart => cart.productName);
    const dispatcher = useDispatch();
    useEffect(() => {
        dispatcher(getSomeProductsThunk(productNames));
    }, [dispatcher]);
    if (response.isLoading) {
        return <div>Loading...</div>
    }
    if (response.error) {
        return <div>{response.error}</div>
    }
    if (response.data) {
        return <ShoppingCartContainer>
            <ShoppingCartList>
                {Object.keys(response.data).map((key) => {
                    const productName = response.data[key].productName;
                    const cartItem = localCart.find(cartItem => cartItem.productName === productName);
                    return <ShoppingCartItem item={response.data[key]} key={productName} cartItem={cartItem}
                    />
                })}
            </ShoppingCartList>
            <ShoppingCartCheck>

            </ShoppingCartCheck>
        </ShoppingCartContainer>
    }
}

export default ShoppingCart;