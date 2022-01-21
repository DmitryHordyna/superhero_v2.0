import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { CreatePlanet } from '../components/modals/CreatePlanet';
import { CreateSuperhero } from '../components/modals/CreateSuperhero';
import { CreateUniverse } from '../components/modals/CreateUniverse';

export const Admin = () => {
  const [universVisible, setUniversVisible] = useState();
  const [planetVisible, setPlanetVisible] = useState();
  const [superheroVisible, setSuperheroVisible] = useState();

  return (
    <Container className="d-flex flex-column">
      <Button
        variant={'outline-dark'}
        className="mt-4 p-2"
        onClick={() => setUniversVisible(true)}
      >
        Add universe
      </Button>
      <Button
        variant={'outline-dark'}
        className="mt-4 p-2"
        onClick={() => setPlanetVisible(true)}
      >
        Add planet
      </Button>
      <Button
        variant={'outline-dark'}
        className="mt-4 p-2"
        onClick={() => setSuperheroVisible(true)}
      >
        Add SUPERHERO
      </Button>
      <CreateUniverse
        show={universVisible}
        onHide={() => setUniversVisible(false)}
      />
      <CreatePlanet
        show={planetVisible}
        onHide={() => setPlanetVisible(false)}
      />
      <CreateSuperhero
        show={superheroVisible}
        onHide={() => setSuperheroVisible(false)}
      />
    </Container>
  );
};
