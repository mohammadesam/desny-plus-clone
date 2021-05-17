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
  display: flex;
  flex-warp: warp;
`;

const Viewer = styled.div`
  padding: 10px 20px;
  margin: 15px;
  max-width: 160px;
  max-height: 100px;
  border: solid rgba(249, 249, 249, 0.4) 2px;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 80%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 10px 16px 10px -2px;

  img {
    width: 120px;
    height: 80px;
  }

  &:hover {
    background: url("/videos/1564674844-disney.mp4") center center / cover
      no-repeat fixed;
  }
`;
