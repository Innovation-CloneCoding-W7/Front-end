import styled from "styled-components";

const ShopLayoutContainer = styled.div`
  width: 100vw;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  transition: all .5s;
  ${(props) => props.$isBlurred ? `
    filter: blur(5px);
  ` : null}
`;

export default ShopLayoutContainer;