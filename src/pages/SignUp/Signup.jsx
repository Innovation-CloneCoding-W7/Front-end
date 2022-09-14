import { Container1, Container3 } from "../Login/Login";
import { StForm, StButton, StButton2 } from "../Login/Login";
import { StSpan1, StSpan2 } from "../Login/Login";
import { StDiv } from "../Login/Login";
import { StInput } from "../Login/Login";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

import { useState } from "react";
import UseSignup from "../../utils/UseSignup";
import styled from "styled-components";

const SignUp = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const regNickname = /[a-zA-Z\\d]{3,12}$/;
  const regPassword = /[a-z\\d]{3,32}$/;
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const [nicknameState, setNicknameState] = useState(1);
  const [passwordState, setPasswordState] = useState(1);

  const test1 = (nickname) => {
    return !regNickname.test(nickname)
      ? setNicknameState(0)
      : setNicknameState(1);
  };

  const test2 = (password) => {
    return !regPassword.test(password)
      ? setPasswordState(0)
      : setPasswordState(1);
  };

  const OnSubmitHandler = () => {
    nicknameState === 0 && passwordState === 0
      ? UseSignup({ nickname, name, password, email })
      : alert("go back");
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
              <StSpan1>Nickname</StSpan1>
            </StDiv>
            <StInput
              onChange={(e) => {
                onChangeNickname(e);
                test1(nickname);
              }}></StInput>
            {nicknameState ? (
              <Sta>사용불가능한 닉네임입니다</Sta>
            ) : (
              <Sta1>사용가능한 닉네임입니다</Sta1>
            )}
            <StDiv>
              <StSpan1>E-mail Address</StSpan1>
            </StDiv>
            <StInput
              onChange={(e) => {
                onChangeEmail(e);
              }}></StInput>
            <StDiv>
              <StSpan1>Password</StSpan1>
            </StDiv>
            <StInput
              type="password"
              onChange={(e) => {
                onChangePassword(e);
                test2(password);
              }}></StInput>
            {passwordState ? (
              <Sta>패스워드 형식에 어긋납니다</Sta>
            ) : (
              <Sta1>사용가능한 패스워드입니다</Sta1>
            )}
          </StForm>
          <StButton
            onClick={() => {
              OnSubmitHandler();
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

const Sta = styled.a`
  color: red;
  font-size: 12px;
  width: 500px;
  float: right;
  margin-left: 250px;
`;

const Sta1 = styled.a`
  color: blue;
  font-size: 12px;
  width: 500px;
  float: right;
  margin-left: 250px;
`;
