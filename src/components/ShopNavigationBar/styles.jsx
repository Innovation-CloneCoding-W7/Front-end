import styled from "styled-components";

const ShopNavigationBarContainer = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  display: flex;
  align-items: center;

  img {
    width: 100px;
    filter: brightness(0) invert(1);
    padding-right: 20px;
    border-right: 1px solid white;
  }

  a:last-child {
    text-decoration: none;
    color: white;
    padding: 5px 10px;
    transition: all .3s;
    border-radius: 5px;
    margin-left: 10px;

    &:hover {
      background-color: lightgray;
    }
  }
`;

const ShopNavigationBarCenter = styled.div`
  a {
    text-decoration: none;
    color: white;
    padding: 5px 10px;
    transition: all .3s;
    border-radius: 5px;

    &:not(:last-child) {
      margin-right: 10px;
    }

    &:hover {
      background-color: lightgray;
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
    padding: 5px 10px;
    border-radius: 5px;
    transition: all .3s;

    &:hover {
      background-color: lightgray;
    }
  }
`;

export {ShopNavigationBarContainer, ShopNavigationBarLeft, ShopNavigationBarCenter, ShopNavigationBarRight}