import {ItemContainer, ItemTitle} from "./styles";

const ShoppingCartItem = ({item}) => {
    console.dir(item);
    return <ItemContainer>
        <ItemTitle>
            <h3>{item.productName}</h3>
            <p>{item.price}</p>
        </ItemTitle>
    </ItemContainer>
}

export default ShoppingCartItem;