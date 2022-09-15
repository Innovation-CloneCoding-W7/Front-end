import {ProductDetailBodyContainer, Quantity, QuantityInput} from "./styles";
import {useContext, useEffect, useState} from "react";
import GlobalState from "../../shared/GlobalStates";
import priceFormatter from "../../utils/priceFormatter";
import useQuantity from "../../Hooks/useQuantity";

const ProductDetailBody = ({data}) => {
    const {setIsNavigationBarAlwaysOpen} = useContext(GlobalState);
    const [quantity, increaseQuantity, decreaseQuantity] = useQuantity(data.maxQuantity);
    useEffect(() => {
        setIsNavigationBarAlwaysOpen(true);
    }, [setIsNavigationBarAlwaysOpen]);
    return <ProductDetailBodyContainer>
        <h2>{data.productName}</h2>
        <h3>{priceFormatter.format(data.price)}</h3>
        <Quantity>
            <p>수량</p>
            <QuantityInput>
                <p className="subtract" onClick={decreaseQuantity}>-</p>
                <p>{quantity}</p>
                <p className="add" onClick={increaseQuantity}>+</p>
            </QuantityInput>
        </Quantity>
    </ProductDetailBodyContainer>
}

export default ProductDetailBody;