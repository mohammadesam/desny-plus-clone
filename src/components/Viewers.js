import React from "react";
import styled from "styled-components";
function Viewers() {
  return (
    <ViewersContainer>
      <Viewer>
        <img src="/images/viewers-disney.png" alt="" />
      </Viewer>

      <Viewer>
        <img src="/images/viewers-marvel.png" alt="" />
      </Viewer>

      <Viewer>
        <img src="/images/viewers-national.png" alt="" />
      </Viewer>

      <Viewer>
        <img src="/images/viewers-pixar.png" alt="" />
      </Viewer>

      <Viewer>
        <img src="/images/viewers-starwars.png" alt="" />
      </Viewer>
    </ViewersContainer>
  );
}

export default Viewers;

const ViewersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 20px;
  margin-top: 30px;
  padding: 26px 0px 30px 0px;

  @media screen and (max-width: 700px) and (min-width: 500px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Viewer = styled.div`
  border: solid rgba(249, 249, 249, 0.4) 2px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgb(0 0 0 / 80%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 10px 16px 10px -2px;
  transition: 0.25s;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    border: solid white 1px;
    transform: scale(1.05);
  }
`;
