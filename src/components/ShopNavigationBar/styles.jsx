import styled from "styled-components";

const ShopNavigationBarContainer = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  transition: all .3s;

  &:hover {
    background-color: white;
  }

  &:hover * {
    color: black !important;
    border-color: black !important;
  }

  &:hover img {
    filter: brightness(0);
  }
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

const ShopNavigationBarCenter = styled.div`
  a {
    text-decoration: none;
    color: white;

    &:not(:last-child) {
      margin-right: 24px;
    }
  }
`;

const ShopNavigationBarRight = styled.div`
  display: flex;
  color: white;
  align-items: center;

  svg {
    cursor: pointer;
    margin-right: 15px;
  }

  p {
    cursor: pointer;
    margin: 0;
  }
`;

export {ShopNavigationBarContainer, ShopNavigationBarLeft, ShopNavigationBarCenter, ShopNavigationBarRight}