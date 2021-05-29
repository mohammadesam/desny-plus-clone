import React from "react";
import styled from "styled-components";
function Login() {
  return (
    <Container>
      <Background>
        <img src="/images/login-background.jpg" alt="" />
      </Background>

      <Warper>
        <Logo className="cta-one">
          <img src="/images/cta-logo-one.svg" alt="" />
        </Logo>
        <LoginButton>GET ALL THERE</LoginButton>
        <Description>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora,
          dolor. Quia iure ullam, aspernatur, repudiandae totam numquam
          possimus, quisquam asperiores expedita nihil voluptate molestiae
          aperiam!
        </Description>
        <Logo>
          <img src="/images/cta-logo-two.png" alt="" />
        </Logo>
      </Warper>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Warper = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div.cta-one {
    width: 100%;
  }
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
  img {
    width: 75%;
    height: 80px;
  }

  @media screen and (max-width: 550px) {
    img {
      width: 100%;
    }
  }
`;

const LoginButton = styled.a`
  width: 75%;
  background-color: #065ddd;
  color: rgba(249, 249, 249);
  padding: 10px 0;
  outline: 0;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 0.25s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }
`;

const Description = styled.div`
  width: 75%;
  margin: 10px 0;
  font-size: 0.8;
  color: rgba(249, 249, 249, 0.7);
  text-align: center;
  letter-spacing: 1.5px;
  line-height: 1.5;
`;
