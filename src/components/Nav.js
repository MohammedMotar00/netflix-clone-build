import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import NetflixLogo from "../img/Netflix-Logo-PNG-Image.png";

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <NavContainer className={show && "nav__black"}>
      <Container>
        <div>
          <NavLogo onClick={() => history.push("/")} src={NetflixLogo} alt="" />
          <h3>Clone app</h3>
        </div>
        <NavAvatar
          onClick={() => history.push("/profile")}
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt=""
        />
      </Container>
    </NavContainer>
  );
}

export default Nav;

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  padding: 20px;
  width: 100%;
  height: 30px;
  z-index: 1;

  /* Animations */
  transition-timing-function: ease-in;
  transition: all 0.5s;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    margin-left: 90px;
    color: white;
  }
`;

const NavLogo = styled.img`
  position: fixed;
  left: 20px;
  width: 80px;
  object-fit: contain;
  cursor: pointer;
`;

const NavAvatar = styled.img`
  position: fixed;
  right: 20px;
  height: 30px;
  width: 30px;
  cursor: pointer;
`;
