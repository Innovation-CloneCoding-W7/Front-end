import {ProductDetailBodyContainer, Quantity} from "./styles";
import {useContext, useEffect} from "react";
import GlobalState from "../../shared/GlobalStates";
import priceFormatter from "../../utils/priceFormatter";

const ProductDetailBody = ({data}) => {
    const {setIsNavigationBarAlwaysOpen} = useContext(GlobalState);
    useEffect(() => {
        setIsNavigationBarAlwaysOpen(true);
    }, [setIsNavigationBarAlwaysOpen]);
    return <ProductDetailBodyContainer>
        <h2>{data.productName}</h2>
        <h3>{priceFormatter.format(data.price)}</h3>
        <Quantity></Quantity>
    </ProductDetailBodyContainer>
}

export default ProductDetailBody;