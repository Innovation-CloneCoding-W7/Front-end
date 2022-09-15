import {ProductContainer, ProductImageContainer, ProductTitleContainer} from "./styles";

const Product = ({product}) => {
    const priceFormatter = new Intl.NumberFormat("ko-KR", {
        style: "currency",
        currency: "KRW"
    });
    const formattedPrice = priceFormatter.format(product.price)
    return <ProductContainer>
        <ProductImageContainer>
            <img loading="lazy" src={product.imageUrl} alt={product.productName}/>
        </ProductImageContainer>
        <ProductTitleContainer>
            <h3>{product.productName}</h3>
            <p>{formattedPrice}</p>
        </ProductTitleContainer>
    </ProductContainer>
}

export default Product;