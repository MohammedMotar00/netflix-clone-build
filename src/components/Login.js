import React, { useState } from "react";
import styled from "styled-components";
import SignUp from "./SignUp";

function Login() {
  const [signIn, setSignIn] = useState(false);

  return (
    <LoginContainer>
      <Background>
        <Image
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <Button onClick={() => setSignIn(true)}>Sign In</Button>

        <Gradient />
      </Background>

      <Body>
        {signIn ? (
          <SignUp />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <InputContainer>
              <form>
                <input type="email" placeholder="Email Adress" />
                <GetStartedButton onClick={() => setSignIn(true)}>
                  GET STARTED
                </GetStartedButton>
              </form>
            </InputContainer>
          </>
        )}
      </Body>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background-image: url("https://assets.nflxext.com/ffe/siteui/vlv3/757ab38f-5d08-40bc-b3eb-eaba63ed8203/93c34f94-56c8-40a7-8b2e-b4aac6427977/GB-en-20210125-popsignuptwoweeks-perspective_alpha_website_medium.jpg");
  background-size: cover;
`;

const Background = styled.div``;

const Image = styled.img`
  position: fixed;
  left: 0;
  width: 150px;
  object-fit: contain;
  padding-left: 20px;
`;

const Button = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #e50914;
  border: none;
  cursor: pointer;
  z-index: 1;
`;

const Gradient = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1;
  background: rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );
`;

const Body = styled.div`
  position: absolute;
  z-index: 1;
  color: #fff;
  padding: 20px;
  top: 30%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  h1 {
    font-size: 3.125rem;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 30px;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 400;
  }
`;

const InputContainer = styled.div`
  padding: 10px;
  margin: 20px;

  input {
    padding: 10px;
    outline-width: 0;
    height: 30px;
    width: 30%;
    max-width: 600px;
  }
`;

const GetStartedButton = styled.button`
  padding: 16px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #e50914;
  border: none;
  cursor: pointer;
`;
