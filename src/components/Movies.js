import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { selectMovies } from "../features/movie/movieSlice";
import { useSelector } from "react-redux";
function Movies() {
  const movies = useSelector(selectMovies);
  return (
    <Container>
      <h4> Recommended For You </h4>
      <MoviesContainer>
        {movies.map((movie, index) => {
          return (
            <MovieCard key={index}>
              <Link to={`details/${movie.id}`}>
                <img src={movie.cardImg} alt="" />
              </Link>
            </MovieCard>
          );
        })}
      </MoviesContainer>
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  margin: 0px 0px 30px;
  display: flex;
  flex-direction: column;
  max-width: 98vw;
`;
const MoviesContainer = styled.div`
  padding: 20px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (max-width: 800px) {
    // grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const MovieCard = styled.div`
  position: relative;
  min-width: 150px;
  max-width: 220px;
  min-height: 115px;
  max-height: 115px;
  display: flex;
  margin: 10px 5px;
  justify-content: center;
  align-items: center;
  border: solid rgba(249, 249, 249, 0.4) 2px;

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

  @media screen and (max-width: 550px) {
    width: 150px;
  }
`;
