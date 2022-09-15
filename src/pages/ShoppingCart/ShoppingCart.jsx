import {ShoppingCartCheck, ShoppingCartContainer, ShoppingCartList} from "./styles";
import ShoppingCartItem from "./ShoppingCartItem";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getSomeProductsThunk} from "../../redux/modules/productSlice";

const ShoppingCart = ({localCart}) => {
    const response = useSelector(state => state.productSliceReducer);
    const productNames = localCart.map(cart => cart.productName);
    const dispatcher = useDispatch();
    console.dir(response);
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
                    return <ShoppingCartItem item={response.data[key]} key={response.data[key].productName}/>
                })}
            </ShoppingCartList>
            <ShoppingCartCheck>

            </ShoppingCartCheck>
        </ShoppingCartContainer>
    }
}

export default ShoppingCart;