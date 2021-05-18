import React from "react";
import styled from "styled-components";

function Header(props) {
  return (
    <Nav>
      <Logo src="/Disney+_logo.svg" />
      <NavMenu>
        <NavLink>
          <Icon src="/images/home-icon.svg" />
          <span>Home</span>
        </NavLink>

        <NavLink>
          <Icon src="/images/search-icon.svg" />
          <span>Search</span>
        </NavLink>

        <NavLink>
          <Icon src="/images/watchlist-icon.svg" />
          <span>WatchList</span>
        </NavLink>

        <NavLink>
          <Icon src="/images/Original-icon.svg" />
          <span>Originals</span>
        </NavLink>

        <NavLink>
          <Icon src="/images/movie-icon.svg" />
          <span>Movies</span>
        </NavLink>

        <NavLink>
          <Icon src="/images/series-icon.svg" />
          <span>Series</span>
        </NavLink>
      </NavMenu>
      <ProfileImage src="/images/profile-pic.png" />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 5px;
`;

const Logo = styled.img`
  width: 80px;
  height: 70px;
  margin: 0 70px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;

  @media screen and (max-width: 950px) {
    display: none;
  }
`;

const NavLink = styled.a`
  display: flex;
  margin: 0 8px;
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    letter-spacing: 1.42px;
    margin-left: 3px;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      height: 2px;
      background: white;
      bottom: -5px;
      left: 0px;
      right: 0;
      opacity: 0;
      transform-origin: left center;
      transform: scaleX(0);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
  }

  &:hover {
    span:after {
      opacity: 1;
      transform: scaleX(1);
    }
  }
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const ProfileImage = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin: 0 30px;
  cursor: pointer;
`;
