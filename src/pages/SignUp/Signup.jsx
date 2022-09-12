import {Container1, Container3} from "../Login/Login";
import {StForm, StButton, StButton2} from "../Login/Login";
import {StSpan1, StSpan2} from "../Login/Login";
import {StDiv} from "../Login/Login";
import {StInput} from "../Login/Login";
import {Link} from "react-router-dom";
import Header from "../../components/Header/Header";

const SignUp = () => {
    return (
        <>
            <Header/>
            <Container1>
                <Container3>
                    <h1>Create Account</h1>
                    <StForm>
                        <StDiv>
                            <StSpan1>Name</StSpan1>
                        </StDiv>
                        <StInput></StInput>
                        <StDiv>
                            <StSpan1>Email Address</StSpan1>
                        </StDiv>
                        <StInput></StInput>
                        <StDiv>
                            <StSpan1>Password</StSpan1>
                        </StDiv>
                        <StInput></StInput>
                    </StForm>
                    <StButton>CREATE ACCOUNT</StButton>
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
