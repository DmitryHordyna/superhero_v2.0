import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { useParams } from 'react-router-dom';
import bigStar from '../assets/bigStar.png';
import { fetchOneSupehero } from '../http/superheroAPI';
import { REACT_APP_API_URL } from '../utils/consts';

export const SuperheroPage = () => {
  const [superhero, setSuperhero] = useState({ info: [] });
  const { id } = useParams();

  useEffect(() => {
    fetchOneSupehero(id).then(data => setSuperhero(data));
  }, []);

  return (
    <Container className="mt-3">
      <Row>
        <Col md={6} className="d-flex flex-column align-items-center ">
          <Image
            width={200}
            height={300}
            src={REACT_APP_API_URL + superhero.images}
          />
        </Col>
        <Col md={6} className="d-flex flex-column align-items-center ">
          <h2>{superhero.nickname}</h2>
          <div
            className="d-flex align-items-center justify-content-center "
            style={{
              background: `url(${bigStar}) no-repeat center center`,
              width: 200,
              height: 200,
              backgroundSize: 'cover',
              fontSize: '64px',
            }}
          >
            {superhero.rating}
          </div>
          <Button className="mt-2" variante={'outline-dark'}>
            Add to Favorite
          </Button>
        </Col>
      </Row>
      <Row className="d-flex flex-column mt-5">
        {/* <Container key={superhero.info.superheroId}>
          <h2>More information</h2>
          <Row style={{ background: 'lightgray', padding: 5 }}>
            {' '}
            {info.title}:{superhero.info.description}
          </Row>
          <Row style={{ background: 'transparent', padding: 5 }}>
            {' '}
            {superhero.info.real_name}:{superhero.info.description}
          </Row>
          <Row style={{ background: 'lightgray', padding: 5 }}>
            {' '}
            {superhero.info.title}:{superhero.info.description}
          </Row>
        </Container> */}
      </Row>
    </Container>
  );
};
