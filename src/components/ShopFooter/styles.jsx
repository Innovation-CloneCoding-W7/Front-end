import styled from "styled-components";

const ShopFooterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px auto;

  p {
    color: gray;
    font-size: 0.7rem;
    cursor: pointer;

    &:not(:last-child) {
      margin-right: 12px;
    }
  }
`;

export {ShopFooterContainer};