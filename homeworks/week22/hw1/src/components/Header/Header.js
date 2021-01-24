/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-unresolved */
import { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../../Contexts';
import { setAuthToken } from '../../utils';

const HeaderContainer = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  max-width: 1620px;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: baseline;

  .left__button {
    margin: 10px;
    font-size: 16px;
  }
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  .register {
    color: rgba(26, 137, 23, 1);
    border: 1px solid rgba(26, 137, 23, 1);
    padding: 8px 12px;
    border-radius: 4px;
    letter-spacing: 0.1em;
    font-size: 14px;
    text-align: center;
    line-height: 13px;
  }

  .login {
    color: rgba(26, 137, 23, 1);
    border: 1px solid rgba(26, 137, 23, 1);
    padding: 8px 12px;
    border-radius: 4px;
    letter-spacing: 0.1em;
    font-size: 14px;
    text-align: center;
    line-height: 13px;
  }
`;
const Logo = styled(Link)`
  font-size: 28px;
  font-weight: bold;
  text-decoration: none;
  margin: 10px;
  color: rgba(26, 137, 23, 1);
`;
const Nav = styled(Link)`
  display: block;
  padding: 21px;
  color: rgb(40, 40, 40, 0.6);
  text-decoration: none;
  cursor: pointer;

  & + & {
    margin: 10px;
  }

  &:hover {
    color: rgba(26, 137, 23, 1);
  }

  ${props => props.$active
    && `
    
    color: rgba(26, 137, 23, 1);
  `}
`;

export default function Header() {
  const location = useLocation();
  const { user, setUser } = useContext(AuthContext);
  const history = useHistory();
  const handleSignOut = (e) => {
    setAuthToken('');
    setUser(null);
    if (location.pathname !== '/') {
      history.push('/');
    }
  };
  return (
    <HeaderContainer>
      <HeaderLeft>
        <Logo className="logo" to="/">
          My Blog
        </Logo>
        <Nav
          className="left__button"
          to="/"
          $active={location.pathname === '/'}
        >
          Home
        </Nav>
        <Nav
          className="left__button"
          to="/archive"
          $active={location.pathname === '/archive'}
        >
          Archive
        </Nav>
        <Nav
          className="left__button"
          to="/about"
          $active={location.pathname === '/about'}
        >
          About
        </Nav>
      </HeaderLeft>
      <HeaderRight>
        {!user && (
          <Nav
            className="login"
            to="/login"
            $active={location.pathname === '/login'}
          >
            Login
          </Nav>
        )}
        {!user && (
          <Nav
            className="register"
            to="/register"
            $active={location.pathname === '/register'}
          >
            Register
          </Nav>
        )}
        {user && (
          <Nav
            className="left__button"
            to="/release"
            $active={location.pathname === '/release'}
          >
            Release
          </Nav>
        )}
        {user && <Nav onClick={handleSignOut}>Sign Out</Nav>}
      </HeaderRight>
    </HeaderContainer>
  );
}
