import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

const LogIn = () => {
  return (
    <>
      <Header></Header>
      <Container1>
        <Container3>
          <h1>Sign In</h1>
          <StForm>
            <StDiv>
              <StSpan1>Email Address</StSpan1>
            </StDiv>
            <StInput></StInput>
            <StDiv>
              <StSpan1>Password</StSpan1>
            </StDiv>
            <StInput></StInput>
            <StButton>Log In</StButton>
          </StForm>
          <StForm>
            <StDiv2>
              <StSpan2>
                <Sthr></Sthr> OR <Sthr></Sthr>
              </StSpan2>
            </StDiv2>
            <Link to="/signup">
              <StButton2>CREATE ACCOUNT</StButton2>
            </Link>
          </StForm>
        </Container3>
      </Container1>
    </>
  );
};

export default LogIn;

const Sthr = styled.hr`
  width: 150px;
  margin-left: 10px;
  margin-right: 10px;
`;
const StDiv2 = styled.div`
  align-content: space-between;
`;

export const Container1 = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const Container3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 400px;
  height: 600px;
  margin-top: 100px;
`;

export const StForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 400px;
  height: 600px;
  margin-top: 40px;
`;

export const StInput = styled.input`
  width: 350px;
  height: 42px;
  padding: 10px 20px;
  border-radius: 20px;
  border: 2px solid transparent;
  margin: 0px auto;
  background-color: #f5f5f5;
  transition: 0.3s ease-in-out;
  &:focus {
    outline: none;
    border: 2px solid rgba(0, 0, 0, 0.3);
  }
`;

export const StSpan1 = styled.span`
  grid-area: label-text;
  color: #5c5d61;
  font-size: 30;
  line-height: 1.414;
  font-weight: 500;
  display: inline-block;
  transition: color 0.33s ease;
`;

export const StSpan2 = styled.span`
  color: #5c5d61;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  margin: 40px auto;
  white-space: nowrap;
`;

export const StSpan3 = styled.span`
  width: 40%;
  height: 1px;
  margin: 0 8px;
  background-color: gray;
`;
export const StDiv = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
`;

export const StButton = styled.button`
  width: 350px;
  height: 42px;
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  margin: 20px auto;
  background-color: #3d69e1;
  color: white;
  font-family: "text";
  font-size: 12px;
  transition: 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: #3457b2;
  }
`;

export const StButton2 = styled.button`
  width: 350px;
  height: 42px;
  padding: 10px 20px;
  border-radius: 20px;
  border: 3px solid black;
  margin: 0px 27px;
  background-color: white;
  color: black;
  font-family: "text";
  font-size: 12px;
  transition: 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: black;
    color: white;
  }
`;

export const StText = styled.span`
  font-family: "text";
  color: rgba(0, 0, 0, 0.7);
  font-size: 15px;
`;