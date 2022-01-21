import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Card, Container } from 'react-bootstrap';
import { Context } from '../index';

export const PlanetBar = observer(() => {
  const { superhero } = useContext(Context);

  return (
    <Container className="d-flex mt-3">
      {superhero.planet.map(planets => (
        <Card
          onClick={() => superhero.setSelectedByPlanet(planets)}
          key={planets.id}
          className="p-2"
          style={{ cursor: 'pointer' }}
          border={
            planets.id === superhero.selectedByPlanet.id ? 'danger' : 'light'
          }
        >
          {planets.name}
        </Card>
      ))}
    </Container>
  );
});
