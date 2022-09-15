import styled from "styled-components";

const ShoppingCartContainer = styled.div`
  width: 600px;
  display: grid;
  grid-template-columns: 75% 20%;
  gap: 5%;
`;

const ShoppingCartList = styled.div``;

const ShoppingCartCheck = styled.div``;

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 75%;
  gap: 5%;
  margin-bottom: 10px;
`;

const ItemTitle = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-weight: normal;
  }
`;

const ItemQuantity = styled.div`
  p {

  }
`;

const ItemImage = styled.div`
  img {
    width: 100%;
  }
`;

const ItemDetail = styled.div``;

export {
    ItemDetail,
    ItemImage,
    ItemQuantity,
    ShoppingCartContainer,
    ShoppingCartCheck,
    ShoppingCartList,
    ItemContainer,
    ItemTitle
};