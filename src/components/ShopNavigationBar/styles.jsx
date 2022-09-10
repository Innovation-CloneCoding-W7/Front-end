import styled from "styled-components";

const ShopNavigationBarContainer = styled.div`
  position: absolute;
  padding: 20px;
  z-index: 2;
`;

const ShopNavigationBarLeft = styled.div`
  img {
    width: 100px;
    filter: brightness(0) invert(1);
    margin-right: 30px;
  }

  a:last-child {
    text-decoration: none;
    color: white;
    border-left: 1px solid white;
    padding-left: 30px;
  }
`;

export {ShopNavigationBarContainer, ShopNavigationBarLeft}