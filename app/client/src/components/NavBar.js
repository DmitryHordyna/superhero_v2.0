import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import React, { useContext } from 'react';
import { Context } from '../index';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE } from '../utils/consts';

export const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink
          style={{ color: 'white', textDecoration: 'none', fontWeight: '900' }}
          to="/"
        >
          Superhero
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto">
            <Button
              onClick={() => navigate(ADMIN_ROUTE)}
              variant={'outline-light'}
            >
              Add new hero
            </Button>
            <Button
              onClick={() => logOut()}
              variant={'outline-light'}
              style={{ marginLeft: '20px' }}
            >
              Exit
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Button
              variant={'outline-light'}
              onClick={() => navigate(LOGIN_ROUTE)}
            >
              Autorization
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});
