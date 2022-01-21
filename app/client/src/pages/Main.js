import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Context } from '..';
import { Pages } from '../components/Pages';
import { PlanetBar } from '../components/PlanetBar';
import { SuperheroList } from '../components/SuperheroList';
import { UniversBar } from '../components/UniversBar';
import {
  fetchPlanets,
  fetchSupeheros,
  fetchUniverses,
} from '../http/superheroAPI';

export const Main = observer(() => {
  const { superhero } = useContext(Context);

  useEffect(() => {
    fetchUniverses().then(data => superhero.setUnivers(data));
    fetchPlanets().then(data => superhero.setPlanet(data));
    fetchSupeheros(null, null, 1, 3).then(data => {
      superhero.setSuperhero(data.rows);
      superhero.setTotalCount(data.count);
    });
  }, []);

  useEffect(() => {
    fetchSupeheros(
      superhero.selectedByUnivers.id,
      superhero.selectedByPlanet.id,
      superhero.page,
      5,
    ).then(data => {
      superhero.setSuperhero(data.rows);
      superhero.setTotalCount(data.count);
    });
  }, [superhero.page, superhero.selectedByUnivers, superhero.selectedByPlanet]);

  return (
    <Container>
      <Row>
        <Col md={3} className="mt-3">
          <UniversBar />
        </Col>
        <Col md={9}>
          <PlanetBar />
          <SuperheroList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
});
