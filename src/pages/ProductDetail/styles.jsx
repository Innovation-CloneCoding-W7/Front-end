import styled from "styled-components";

const ProductDetailContainer = styled.div`
  padding: 30px;
  display: grid;
  grid-template-columns: 67% 30%;
  gap: 3%;
  padding-top: 80px;
`;

const ProductDetailImageContainer = styled.div`
  img {
    width: 100%;
  }
`;

const ProductDetailBodyContainer = styled.div`
  h2 {
    font-size: 1.2rem;
    font-weight: normal;
  }

  h3 {
    font-size: 1rem;
    font-weight: normal;
  }
`;

const Quantity = styled.div``;

export {Quantity, ProductDetailBodyContainer, ProductDetailContainer, ProductDetailImageContainer}