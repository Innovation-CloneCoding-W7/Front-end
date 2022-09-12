import styled from "styled-components";

const OverlayMenuContainer = styled.div`
  position: fixed;
  background-color: white;
  height: 100vh;
  padding: 30px;
  z-index: 2;
  top: 0;
  right: 0;
  transform: translateX(${(props) => props.$isMenuOpen ? `0` : `300`}px);
  width: 300px;
  display: flex;
  flex-direction: column;
  transition: all 1s;

  svg {
    align-self: end;
    margin-bottom: 30px;
    cursor: pointer;
    font-size: 2rem;
    padding: 5px;
    border-radius: 5px;
    transition: all .3s;

    &:hover {
      background-color: lightgray;
    }
  }

  a {
    text-decoration: none;
    color: black;
    transition: all .3s;
    padding: 8px;

    &:hover {
      background-color: lightgray;
      border-radius: 5px;
    }
  }
`;

export {OverlayMenuContainer}