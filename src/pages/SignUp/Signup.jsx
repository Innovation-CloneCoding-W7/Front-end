import { Container1, Container3 } from "../Login/Login";
import { StForm, StButton, StButton2 } from "../Login/Login";
import { StSpan1, StSpan2 } from "../Login/Login";
import { StDiv } from "../Login/Login";
import { StInput } from "../Login/Login";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

import { useState } from "react";
import instance from "../../shared/Requests";

const SignUp = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitHandler = () => {
    const data = (name, nickname, password);
    instance.post("주소", data);
  };

  return (
    <>
      <Header />
      <Container1>
        <Container3>
          <h1>Create Account</h1>
          <StForm>
            <StDiv>
              <StSpan1>Name</StSpan1>
            </StDiv>
            <StInput
              onChange={(e) => {
                onChangeName(e);
              }}></StInput>
            <StDiv>
              <StSpan1>nickname Address</StSpan1>
            </StDiv>
            <StInput
              onChange={(e) => {
                onChangeNickname(e);
              }}></StInput>
            <StDiv>
              <StSpan1>Password</StSpan1>
            </StDiv>
            <StInput
              onChange={(e) => {
                onChangePassword(e);
              }}></StInput>
          </StForm>
          <StButton
            onClick={() => {
              onSubmitHandler();
            }}>
            CREATE ACCOUNT
          </StButton>
          <StSpan2>OR</StSpan2>
          <Link to="/login">
            <StButton2>Sign in</StButton2>
          </Link>
        </Container3>
      </Container1>
    </>
  );
};

export default SignUp;
