import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

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
          <NavLogo
            onClick={() => history.push("/")}
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt=""
          />
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
    margin-left: 80px;
    color: white;
  }
`;

const NavLogo = styled.img`
  position: fixed;
  top: 10px;
  left: 0;
  width: 80px;
  object-fit: contain;
  cursor: pointer;
  padding-left: 20px;
`;

const NavAvatar = styled.img`
  position: fixed;
  right: 20px;
  height: 30px;
  width: 30px;
  cursor: pointer;
`;
