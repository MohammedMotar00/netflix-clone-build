import React, { useRef } from "react";
import styled from "styled-components";
import { auth } from "../firebase";

function SignUp() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <SignUpContainer>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <h4>
          <span>New to Netflix?</span>{" "}
          <span onClick={register}>Sign up now.</span>
        </h4>
      </form>
    </SignUpContainer>
  );
}

export default SignUp;

const SignUpContainer = styled.div`
  z-index: 200;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  padding: 70px;
  background: rgba(0, 0, 0, 0.85);

  form {
    display: grid;
    flex-direction: column;

    h1 {
      text-align: left;
      margin-bottom: 25px;
    }

    h4 {
      text-align: left;
      margin-top: 30px;

      span {
        color: gray;
      }

      span:last-child {
        cursor: pointer;
        text-decoration: underline;
        color: #fff;
      }
    }

    input {
      outline-width: 0;
      height: 40px;
      margin-bottom: 14px;
      border-radius: 5px;
      border: none;
      padding: 5px 15px;
    }

    button {
      padding: 16px 20px;
      font-size: 1rem;
      color: #fff;
      background-color: #e50914;
      border: none;
      font-weight: 600;
      cursor: pointer;
      margin-top: 20px;
    }
  }
`;
