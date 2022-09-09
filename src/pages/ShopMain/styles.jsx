import styled from "styled-components";

const ShopMainContainer = styled.div``;

const ShopMainCarouselContainer = styled.div`
  img {
    height: 100vh;
    display: block;
  }
`;

const SwiperOverlay = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: white;
    text-align: center;
    font-weight: normal;
    font-size: 2.5rem;
    margin-bottom: 10px;
  }

  p {
    color: white;
    text-align: center;
    font-size: 1.5rem;
    margin: 0;
    margin-bottom: 30px;
  }

  button {
    border: none;
    padding: 10px;
    border-radius: 5px;
    width: 300px;
  }
`;

const ShopMainShowcaseContainer = styled.div``;

const ShowcaseItemContainer = styled.div`
  position: relative;

  img {
    width: 100vw;
    max-width: 100%;
    display: block;
  }
`;

const ShowcaseItemOverlay = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: ${(props) => props.$isTitleDark ? "black" : "white"};
    font-weight: normal;
    font-size: 2rem;
  }

  button {
    border: none;
    border-radius: 5px;
    padding: 10px;
    width: 250px;
  }
`;

export {
    ShowcaseItemOverlay,
    ShowcaseItemContainer,
    ShopMainContainer,
    ShopMainCarouselContainer,
    SwiperOverlay,
    ShopMainShowcaseContainer
};

