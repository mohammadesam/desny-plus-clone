import React from "react";
import styled from "styled-components";

const Warper = styled.div`
  display: flex;
  flex-direction: column;
`;

function Details() {
  return (
    <Container>
      <Background>
        <img src="/images/slider-scale.jpg" alt="" />
      </Background>
      <Warper>
        <Title>
          <img src="/images/viewers-pixar.png" alt="" />
        </Title>
        <ToolBar>
          <BigButton>
            <img src="/images/play-icon-black.png" alt="" />
            Play
          </BigButton>

          <BigButton className="black">
            <img src="/images/play-icon-white.png" alt="" />
            Trailer
          </BigButton>

          <SmallButton>
            <span>+</span>
          </SmallButton>
          <GroupButton className="black">
            <img src="/images/group-icon.png" alt="" />
          </GroupButton>
        </ToolBar>

        <SubTitle>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum,
          dolorum.
        </SubTitle>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          voluptatibus at deserunt. Perspiciatis voluptatibus ipsum quod, veniam
          eligendi cupiditate dolorem reprehenderit adipisci nam voluptate eum
          molestias animi! Tenetur in placeat rerum odit nesciunt quis itaque.
        </Description>
      </Warper>
    </Container>
  );
}

export default Details;

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

const Title = styled.div`
  width: 180px;
  height: 150px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ToolBar = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
`;

const BigButton = styled.button`
  margin: 0 10px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
  background: #fff;
  outline: 0;
  border: none;
  color: black;
  font-weight: bolder;
  letter-spacing: 1.42px;
  cursor: pointer;
  transition: 0.25s;

  &.black {
    color: white;
    background: rgba(0, 0, 0, 0.4);
    border: solid 2px rgba(249, 249, 249, 0.7);
  }

  img {
    width: 30px;
    height: 30px;
    margin: 0 5px 0 0;
  }

  &:hover {
    transform: scale(1.04);
  }
`;

const SmallButton = styled.button`
  border: solid 1.5px rgba(249, 249, 249, 0.7);
  margin: 0 3px 0 10px;
  background: rgba(6, 6, 6, 0.6);
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  outline: 0;
  cursor: pointer;
  transition: 0.25s;

  img {
    width: 20px;
    height: 20px;
  }

  span {
    transform: translate(0px, -2px);
    color: white;
    font-size: 30px;
  }

  &:hover {
    transform: scale(1.04);
    border: solid 1.5px rgba(249, 249, 249, 0.5);
  }
`;

const GroupButton = styled(SmallButton)`
  margin: 0;
  background: black;
`;

const SubTitle = styled.p`
  margin-top: 25px;
  color: rgb(249, 249, 249);
`;

const Description = styled.p`
  margin: 15px 0;
  color: rgb(249, 249, 249);
`;
