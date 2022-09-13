import { Container1, Container3 } from "../Login/Login";
import { StForm, StButton, StButton2 } from "../Login/Login";
import { StSpan1, StSpan2 } from "../Login/Login";
import { StDiv } from "../Login/Login";
import { StInput } from "../Login/Login";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
<<<<<<< HEAD

import { useState } from "react";
import UseSignup from "../../utils/UseSignup";
=======
import {useState} from "react";
>>>>>>> cf1c86802218f8f2c082650aac1d73272b427ab8

const SignUp = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const regNickname = /[a-zA-Z\\d]{3,12}$/;
  const regPassword = /[a-z\\d]{3,32}$/;
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const test1 = (nickname) => {
    return !regNickname.test(nickname)
      ? alert("Please enter a valid email address")
      : true;
  };

  const test2 = (password) => {
    return !regPassword.test(password) ? alert("Enter a password") : true;
  };

  const OnSubmitHandler = () => {
    const a = test1(nickname);
    const b = test2(password);
    if (a === true && b === true) {
      return UseSignup({ name, nickname, password });
    }
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
              <StSpan1>E-mail Address</StSpan1>
            </StDiv>
            <StInput
              onChange={(e) => {
                onChangeNickname(e);
              }}></StInput>
            <StDiv>
              <StSpan1>Password</StSpan1>
            </StDiv>
            <StInput
              type="password"
              onChange={(e) => {
                onChangePassword(e);
              }}></StInput>
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
