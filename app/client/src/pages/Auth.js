import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../index';
import { registration, login } from '../http/userAPI';
import { LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

export const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }

      user.setUser(user);
      user.setIsAuth(true);
      navigate(MAIN_ROUTE);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 50 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Login' : 'Autorization'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            onChange={e => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
            className="mt-2"
          />
          <Form.Control
            onChange={e => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            className="mt-2"
            type="password"
          />
          <Container className="d-flex  justify-content-between mt-3 ">
            {isLogin ? (
              <div>
                Don't have account?
                <NavLink to={REGISTRATION_ROUTE}> Registration </NavLink>
              </div>
            ) : (
              <div>
                Do you have account?
                <NavLink to={LOGIN_ROUTE}> Login </NavLink>
              </div>
            )}

            <Button
              onClick={click}
              className="align-self-end "
              variant="outline-success"
            >
              {isLogin ? 'Login' : 'Registration'}
            </Button>
          </Container>
        </Form>
      </Card>
    </Container>
  );
});
