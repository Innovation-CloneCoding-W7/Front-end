import styled from "styled-components";

const ProductDetailContainer = styled.div`
  display: grid;
  grid-template-columns: 67% 30%;
  gap: 3%;
  padding: 80px 30px 30px 30px;
`;

const ProductDetailImageContainer = styled.div`
  img {
    width: 100%;
  }
`;

const ProductDetailBodyContainer = styled.div`
  h2 {
    font-size: 1.5rem;
    font-weight: normal;
  }

  h3 {
    font-size: 1rem;
    font-weight: normal;
    margin-bottom: 15px;
  }
`;

const Quantity = styled.div`
  & > p {
    font-size: 0.8rem;
    margin-bottom: 10px;
  }
`;

const QuantityInput = styled.div`
  display: flex;
  align-items: center;

  p {
    font-weight: bold;

    &.add, &.subtract {
      cursor: pointer;
    }

    &.subtract {
      padding-right: 15px;
    }

    &.add {
      padding-left: 15px;
    }
  }
`;

export {Quantity, ProductDetailBodyContainer, ProductDetailContainer, ProductDetailImageContainer, QuantityInput}