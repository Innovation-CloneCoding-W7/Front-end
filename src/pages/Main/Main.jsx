import MainHeader from "../../components/Header/Mainheader";
import styled from "styled-components";

const Main = () => {
  return (
    <>
      <MainHeader />
      <Stdiv>
        <Sth1>Model 3</Sth1>
        <Stspan>Order Online for Touchless Delivery</Stspan>
      </Stdiv>
      <Stdiv>
        <Sth1>model</Sth1>
      </Stdiv>
      <Stdiv>
        <Sth1>model</Sth1>
      </Stdiv>
      <Stdiv2></Stdiv2>
    </>
  );
};

export default Main;

const Stdiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("img/tesla_main1.jpg");
  background-size: cover;
  padding: 100px;
`;

const Sth1 = styled.h1`
  text-align: center;
`;

const Stspan = styled.h3`
  text-align: center;
`;

const Stdiv2 = styled.div``;
