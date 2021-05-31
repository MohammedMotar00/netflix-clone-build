import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "./Nav";

function Profile() {
  const user = useSelector(selectUser);

  return (
    <ProfileContainer>
      <Nav />
      <ProfileBody>
        <h1>Edit Profile</h1>
        <Info>
          <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" />
          <Details>
            <h2>{user.email}</h2>
            <Plans>
              <h3>Plans</h3>
              <SignOutButton onClick={() => auth.signOut()}>
                Sign Out
              </SignOutButton>
            </Plans>
          </Details>
        </Info>
      </ProfileBody>
    </ProfileContainer>
  );
}

export default Profile;

const ProfileContainer = styled.div`
  height: 100vh;
  color: #fff;
`;

const ProfileBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: auto;
  margin-right: auto;

  h1 {
    font-size: 60px;
    font-weight: 400;
    border-bottom: 1px solid #282c2d;
    margin-bottom: 20px;
  }
`;

const Info = styled.div`
  display: flex;

  img {
    height: 100px;
  }
`;

const Details = styled.div`
  color: #fff;
  margin-left: 25px;
  flex: 1;

  h2 {
    background-color: gray;
    padding: 15px;
    font-size: 15px;
    padding-left: 20px;
  }
`;

const Plans = styled.div`
  margin-top: 20px;

  h3 {
    border-bottom: 1px solid #282c2d;
    padding-bottom: 10px;
  }
`;

const SignOutButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  margin-top: 5%;
  width: 100%;
  color: #fff;
  background-color: #e50914;
  border: none;
  font-weight: 600;
  outline: none;
`;
