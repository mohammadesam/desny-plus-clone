import React from "react";
import styled from "styled-components";

function Movies() {
  return (
    <Container>
      <h4> Recommended For You </h4>
      <Originals>
        <MovieCard>
          <img src="/images/slider-scales.jpg" alt="" />
        </MovieCard>

        <MovieCard>
          <img src="/images/slider-scales.jpg" alt="" />
        </MovieCard>

        <MovieCard>
          <img src="/images/slider-scales.jpg" alt="" />
        </MovieCard>

        <MovieCard>
          <img src="/images/slider-scales.jpg" alt="" />
        </MovieCard>
      </Originals>
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  margin: 0px 0px 30px;
  display: flex;
  flex-direction: column;
`;
const Originals = styled.div`
  padding: 20px 0px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 20px;

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const MovieCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid rgba(249, 249, 249, 0.4) 2px;

  box-shadow: rgb(0 0 0 / 80%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 10px 16px 10px -2px;
  transition: 0.25s;
  cursor: pointer;

  img {
    width: 100%;
    min-height: 130px;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    border: solid white 1px;
    transform: scale(1.05);
  }
`;
