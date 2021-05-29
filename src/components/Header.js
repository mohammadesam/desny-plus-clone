import React, { useEffect } from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { useSelector } from "react-redux";
import { selectUserName, selectUserPhoto } from "../features/user/userSlice";
import { useDispatch } from "react-redux";
import { setUserLogin, setSignOut } from "../features/user/userSlice";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  const dispatch = useDispatch();
  let userName = useSelector(selectUserName);
  let userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
      }
    });
  }, []);

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      let profile = result.additionalUserInfo.profile;
      dispatch(
        setUserLogin({
          name: profile.name,
          email: profile.email,
          photo: profile.picture,
        })
      );
      history.push("/");
    });
  };

  const signOut = () => {
    dispatch(setSignOut());
    auth.signOut().then((res) => {
      history.push("/login");
    });
  };

  function handleSignOut(e) {
    e.target.nextSibling.classList.add("show");
  }

  return (
    <Nav>
      <Logo src="/Disney+_logo.svg" />

      {!userName ? (
        <LogInButton onClick={signIn}> login </LogInButton>
      ) : (
        <>
          <NavMenu>
            <NavLink href="/">
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
          <ProfileWarper>
            <ProfileImage src={userPhoto} onClick={(e) => handleSignOut(e)} />
            <div onClick={signOut}> Log Out </div>
          </ProfileWarper>
        </>
      )}
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
  justify-content: space-between;
  padding: 0 10px;
  width: 100vw;
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
  text-decoration: none;
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

const LogInButton = styled.button`
  padding: 5px 15px;
  color: white;
  letter-spacing: 1.42px;
  background: rgba(20, 20, 20, 0.5);
  outline: 0;
  border: solid 1px white;
  cursor: pointer;
  text-transform: uppercase;
  transition: 0.25s;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const ProfileWarper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    display: none;
  }

  div.show {
    display: block;
    bottom: -25px;
    cursor: pointer;
    background: rgba(20, 20, 20, 0.5);
    color: white;
  }
`;
