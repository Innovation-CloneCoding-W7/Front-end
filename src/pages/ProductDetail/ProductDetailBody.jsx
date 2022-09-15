import {ProductDetailBodyContainer, Quantity, QuantityInput} from "./styles";
import {useContext, useEffect, useState} from "react";
import GlobalState from "../../shared/GlobalStates";
import priceFormatter from "../../utils/priceFormatter";

const ProductDetailBody = ({data}) => {
    const {setIsNavigationBarAlwaysOpen} = useContext(GlobalState);
    const [quantity, setQuantity] = useState(1);
    useEffect(() => {
        setIsNavigationBarAlwaysOpen(true);
    }, [setIsNavigationBarAlwaysOpen]);
    const subtractQuantity = () => {
        setQuantity((previousQuantity) => {
            return Math.max(0, previousQuantity - 1);
        });
    }
    const addQuantity = () => {
        setQuantity((previousQuantity) => {
            return Math.min(data.maxQuantity, previousQuantity + 1);
        });
    }
    return <ProductDetailBodyContainer>
        <h2>{data.productName}</h2>
        <h3>{priceFormatter.format(data.price)}</h3>
        <Quantity>
            <p>수량</p>
            <QuantityInput>
                <p className="subtract" onClick={subtractQuantity}>-</p>
                <p>{quantity}</p>
                <p className="add" onClick={addQuantity}>+</p>
            </QuantityInput>
        </Quantity>
    </ProductDetailBodyContainer>
}

export default ProductDetailBody;