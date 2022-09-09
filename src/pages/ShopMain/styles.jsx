import styled from "styled-components";

const ShopMainContainer = styled.div``;

const ShopMainCarouselContainer = styled.div`
  img {
    height: 100vh;
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

export {ShopMainContainer, ShopMainCarouselContainer, SwiperOverlay};

